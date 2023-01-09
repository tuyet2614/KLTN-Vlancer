import { Button, Checkbox, DatePicker, Form, InputNumber } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import ChooseItem from "../../../components/base/chooseItem";
import FormInput from "../../../components/base/formInput";
import Icon from "../../../components/Icon";
import "../styles/index.scss";

const PostJob = () => {
  const { t } = useTranslation("postJob");
  const categoriesOption = [
    { label: t("categories"), value: "categories" },
    {
      label: t("it"),
      options: [
        { label: t("program.web"), value: "web" },
        { label: t("program.mobile"), value: "mobile" },
        { label: t("program.other"), value: "other" },
        { label: t("program.software"), value: "software" },
        { label: t("program.engine"), value: "engine" },
        { label: t("program.consulting"), value: "program-consulting" },
        { label: t("program.tester"), value: "tester" },
        { label: t("program.management"), value: "management" },
      ],
    },
    {
      label: t("sales"),
      options: [
        { label: t("marketing.advert"), value: "advert" },
        { label: t("marketing.associate"), value: "associate" },
        { label: t("marketing.consulting"), value: "marketing-consulting" },
        { label: t("marketing.research"), value: "research" },
        { label: t("marketing.business"), value: "business" },
        { label: t("marketing.event"), value: "event" },
        { label: t("marketing.consult"), value: "consult" },
        { label: t("marketing.face"), value: "face" },
      ],
    },
  ];

  const serviceOptions = [
    { label: t("service"), value: "service" },
    { label: t("service-option.2d"), value: "2d" },
    { label: t("service-option.2d-game"), value: "2d-game" },
    { label: t("service-option.degree"), value: "degree" },
    { label: t("service-option.3d"), value: "3d" },
    { label: t("service-option.3d-design"), value: "3d-design" },
    { label: t("service-option.3d-jewelry"), value: "3d-jewelry" },
    { label: t("service-option.adv"), value: "adv" },
  ];

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
  return (
    <div className="w-full flex justify-center bg-[#fafafa]">
      <Form className="post-job" layout="vertical">
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
              options={categoriesOption}
            />
            <ChooseItem
              label={t("service-fitting")}
              defaultValue={"service"}
              options={serviceOptions}
            />
            <FormInput
              label={t("specific-title")}
              placeholder={t("placeholder")}
            />
          </div>
        </div>

        <div className="flex gap-8">
          <div className="icon">
            <Icon name="edit" />
          </div>
          <div className="w-full">
            <p className="title-item">{t("detail-information")}</p>
            <Form.Item label={t("accurate-bid")}>
              <TextArea placeholder="example-holder" />
            </Form.Item>
            <div>{t("attachment")}</div>
            <FormInput
              label={t("skill")}
              placeholder="VD: Photoshop, English"
            />
            <Form.Item label={t("deadline")}>
              <DatePicker />
            </Form.Item>
            <ChooseItem
              label={t("pattern")}
              defaultValue="project"
              options={patternOptions}
            />
            <ChooseItem
              label={t("workplace")}
              defaultValue="office"
              options={workplaceOptions}
            />
          </div>
        </div>

        <div className="flex gap-8">
          <div className="icon">
            <Icon name="account" />
          </div>
          <div className="w-full">
            <p className="title-item">{t("requirements")}</p>
            <ChooseItem
              label={t("hire-freelancer")}
              options={locationOptions}
              defaultValue="location"
            />
          </div>
        </div>

        <div className="flex gap-8">
          <div className="icon">
            <Icon name="money" />
          </div>
          <div className="w-full">
            <p className="title-item">{t("expected")}</p>
            <ChooseItem
              label={t("payment")}
              defaultValue="pay-project"
              options={expectedOption}
            />
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
            <Button>{t("post")}</Button>
            <p>{t("confirm")}</p>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default PostJob;
