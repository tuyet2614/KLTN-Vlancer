import { Button, Checkbox, DatePicker, Form, InputNumber } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import ChooseItem from "../../../components/base/chooseItem";
import FormInput from "../../../components/base/formInput";
import {
  getCategories,
  getService,
  getSkills,
} from "../../../components/filters/api";
import Icon from "../../../components/Icon";
import { addNewPost } from "../service/api";
import "../styles/index.scss";

const PostJob = () => {
  const { t } = useTranslation("postJob");
  const dataCategory = getCategories();
  const dataServices = getService();
  const dataSkills = getSkills();

  const patternOptions = [
    { label: t("project"), value: "project" },
    { label: t("part-time"), value: "part-time" },
    { label: t("full-time"), value: "full-time" },
  ];

  const workplaceOptions = [
    { label: t("office"), value: "office" },
    { label: t("online"), value: "online" },
  ];

  const locationOptions = [
    { label: t("location"), value: "location" },
    { label: t("Ha Noi"), value: "HaNoi" },
    { label: t("TP. Ho Chi Minh"), value: "HoChiMinh" },
    { label: t("Da Nang"), value: "DaNang" },
    { label: t("An Giang"), value: "AnGiang" },
    { label: t("Bac Giang"), value: "BacGiang" },
    { label: t("Bac Ninh"), value: "BacNinh" },
    { label: t("Binh Duong"), value: "BinhDuong" },
  ];

  const expectedOption = [
    { label: t("pay-project"), value: "pay-project" },
    { label: t("hour-pay"), value: "hour-pay" },
    { label: t("month-pay"), value: "month-pay" },
  ];

  const handleAddNewPost = (value: any) => {
    JSON.stringify(addNewPost(value));
  };

  return (
    <div className="w-full flex justify-center bg-[#fafafa]">
      <Form className="post-job" layout="vertical" onFinish={handleAddNewPost}>
        <div className="title py-10">{t("post")}</div>

        <div className="flex gap-8">
          <div className="icon">
            <Icon name="job" />
          </div>
          <div className="w-full">
            <p className="title-item">{t("hire-job")}</p>

            <ChooseItem
              label={t("select-field")}
              defaultValue={"categories"}
              options={dataCategory}
              name="category"
            />

            <ChooseItem
              label={t("service-fitting")}
              defaultValue={"service"}
              options={dataServices}
              name="service"
            />

            <FormInput
              label={t("specific-title")}
              placeholder={t("placeholder")}
              name="title"
            />
          </div>
        </div>

        <div className="flex gap-8">
          <div className="icon">
            <Icon name="edit" />
          </div>
          <div className="w-full">
            <p className="title-item">{t("detail-information")}</p>
            <Form.Item label={t("accurate-bid")} name="description">
              <TextArea placeholder="example-holder" />
            </Form.Item>
            <div>{t("attachment")}</div>

            <ChooseItem
              label={t("service-fitting")}
              defaultValue={"service"}
              options={dataSkills}
              name="skill"
            />

            <Form.Item label={t("deadline")} name="deadline">
              <DatePicker />
            </Form.Item>

            <Form.Item>
              <ChooseItem
                label={t("pattern")}
                defaultValue="project"
                options={patternOptions}
              />
            </Form.Item>

            <Form.Item>
              <ChooseItem
                label={t("workplace")}
                defaultValue="office"
                options={workplaceOptions}
              />
            </Form.Item>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="icon">
            <Icon name="account" />
          </div>
          <div className="w-full">
            <p className="title-item">{t("requirements")}</p>
            <Form.Item>
              <ChooseItem
                label={t("hire-freelancer")}
                options={locationOptions}
                defaultValue="location"
              />
            </Form.Item>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="icon">
            <Icon name="money" />
          </div>
          <div className="w-full">
            <p className="title-item">{t("expected")}</p>
            <Form.Item>
              <ChooseItem
                label={t("payment")}
                defaultValue="pay-project"
                options={expectedOption}
              />
            </Form.Item>

            <Form.Item label={t("maximum")} className="number_salary">
              <InputNumber
                placeholder={t("from")}
                className="input-calender"
                controls={false}
              />
              <InputNumber
                placeholder={t("to")}
                className="input-calender"
                controls={false}
              />
            </Form.Item>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="icon">
            <Icon name="list" />
          </div>
          <div className="w-full">
            <p className="title-item">{t("display")}</p>
            <Checkbox>{t("display-private")}</Checkbox>
          </div>
        </div>

        <div className="confirm-post">
          <div>
            <Button htmlType="submit" type="primary">
              {t("post")}
            </Button>
            <p>{t("confirm")}</p>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default PostJob;
