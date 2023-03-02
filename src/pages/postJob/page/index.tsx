import { Button, Checkbox, DatePicker, Form, InputNumber, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { t } from "i18next";
import { cloneDeep, debounce } from "lodash";
import { useEffect, useState } from "react";
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
  const [serviceChoosen, setServiceChoosen] = useState();
  const dataCategory = getCategories();
  const dataServices = getService();
  const dataSkills = getSkills();
  // let newValue = cloneDeep(dataCategory);
  const [newValue, setNewValue] = useState([]);

  // useEffect(() => {
  //   setNewValue(dataCategory);
  // }, [dataCategory]);

  console.log("value state: ", newValue);

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

  const handleChangeFilter = (text: any) => {
    console.log("text: ", text);
    dataCategory.filter((item: any) => {
      if (text === "") setNewValue(dataCategory);
      else if (
        item.attributes.name.toLowerCase().includes(text.toLowerCase())
      ) {
        setNewValue({ ...newValue, ...item });
      }
    });
    return newValue;
  };

  console.log("new value: ", newValue);

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

            {/* <ChooseItem
              label={t("select-field")}
              defaultValue={"categories"}
              options={dataCategory}
              name="category"
            /> */}
            <Form.Item
              name="category"
              label={t("select-field")}
              rules={[{ required: true, message: t("error.required") }]}
            >
              <Select
                tabIndex={3}
                placeholder={t("placeholder.enter_category")}
                showSearch
                onSearch={(e: any) => {
                  handleChangeFilter(e);
                }}
                filterOption={false}
                onChange={(item) => setServiceChoosen(item)}
              >
                {dataCategory?.map((item: any) => (
                  <Select.Option value={item?.id} key={item?.id}>
                    {t(item?.attributes?.name)}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item name={"service"} label={t("service-fitting")}>
              <Select
                tabIndex={3}
                placeholder={t("placeholder.enter_service")}
                showSearch
                onSearch={(e: any) => {
                  handleChangeFilter(e);
                }}
                filterOption={false}
                onChange={(item) => setServiceChoosen(item)}
              >
                {dataServices?.map((item: any) => (
                  <Select.Option value={item?.id} key={item?.id}>
                    {t(item?.attributes?.name)}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item name={"title"}>
              <FormInput
                label={t("specific-title")}
                placeholder={t("placeholder.title")}
                name="title"
              />
            </Form.Item>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="icon">
            <Icon name="edit" />
          </div>
          <div className="w-full">
            <p className="title-item">{t("detail-information")}</p>
            <Form.Item label={t("accurate-bid")} name="description">
              <TextArea placeholder="placeholder.detail" />
            </Form.Item>
            <div>{t("attachment")}</div>

            <Form.Item name={"skill"} label={t("skill")}>
              <Select
                tabIndex={3}
                placeholder={t("placeholder.skill")}
                showSearch
                onSearch={(e: any) => {
                  handleChangeFilter(e);
                }}
                filterOption={false}
                onChange={(item) => setServiceChoosen(item)}
              >
                {dataSkills?.map((item: any) => (
                  <Select.Option value={item?.id} key={item?.id}>
                    {t(item?.attributes?.name)}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item label={t("deadline")} name="placeholder.deadline">
              <DatePicker />
            </Form.Item>

            <Form.Item name={"pattern"} label={t("pattern")}>
              <Select
                tabIndex={3}
                placeholder={t("placeholder.skill")}
                showSearch
                onSearch={(e: any) => {
                  handleChangeFilter(e);
                }}
                filterOption={false}
                onChange={(item) => setServiceChoosen(item)}
              >
                {patternOptions?.map((item: any) => (
                  <Select.Option value={item?.id} key={item?.id}>
                    {t(item?.attributes?.name)}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item>
              <ChooseItem
                label={t("pattern")}
                defaultValue="project"
                options={patternOptions}
              />
            </Form.Item>

            <Form.Item name={"workplace"} label={t("workplace")}>
              <Select
                tabIndex={3}
                showSearch
                onSearch={(e: any) => {
                  handleChangeFilter(e);
                }}
                filterOption={false}
                onChange={(item) => setServiceChoosen(item)}
              >
                {workplaceOptions?.map((item: any) => (
                  <Select.Option value={item?.id} key={item?.id}>
                    {t(item?.attributes?.name)}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="icon">
            <Icon name="account" />
          </div>
          <div className="w-full">
            <p className="title-item">{t("requirements")}</p>
            <Form.Item name={"location"} label={t("hire-freelancer")}>
              <Select
                tabIndex={3}
                placeholder={t("placeholder.location")}
                showSearch
                onSearch={(e: any) => {
                  handleChangeFilter(e);
                }}
                filterOption={false}
                onChange={(item) => setServiceChoosen(item)}
              >
                {workplaceOptions?.map((item: any) => (
                  <Select.Option value={item?.id} key={item?.id}>
                    {t(item?.attributes?.name)}
                  </Select.Option>
                ))}
              </Select>
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
