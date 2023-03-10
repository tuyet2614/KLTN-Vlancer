import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  InputNumber,
  message,
  Select,
  Upload,
  UploadFile,
  UploadProps,
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import axios from "axios";
import { t } from "i18next";
import { cloneDeep, debounce } from "lodash";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ChooseItem from "../../../components/base/chooseItem";
import FormInput from "../../../components/base/formInput";
import { getCities } from "../../../components/filters/api";
import authApi from "../../../constant/http-auth-common";

import {
  getCategories,
  getService,
  getSkills,
} from "../../../components/filters/api";
import Icon from "../../../components/Icon";
import { addNewPost } from "../service/api";
import "../styles/index.scss";
import { useNavigate } from "react-router-dom";
import Notification from "../../../components/base/components/Notification";
import { systemRoutes } from "../../../routes";

const { Dragger } = Upload;
export const deriveMediaToFileList = (media: any): UploadFile => {
  return {
    uid: media.id,
    name: media?.fileName || "unknown",
    status: "done",
    url: media?.url,
    thumbUrl: media?.url,
    preview: media?.url,
  };
};

const PostJob = () => {
  const { t } = useTranslation("postJob");
  const props: UploadProps = {
    name: "file",
    multiple: true,
    listType: "text",
    accept: ".doc, .docx, .xlsx, .xls",
  };
  const [searchService, setSearchService] = useState<any>("");
  const [searchCategory, setSearchCategory] = useState<any>("");
  const [searchSkill, setSearchSkill] = useState<any>("");
  const [searchAdd, setSearchAdd] = useState<any>("");
  const [useUpload, setUseUpload] = useState(false);
  const [serviceChoosen, setServiceChoosen] = useState("");
  const navigate = useNavigate();

  const dataCategory = getCategories(searchCategory);
  const dataServices = getService(searchService);
  const dataSkills = getSkills(searchSkill);
  const listAddress = getCities(searchAdd);

  // let newValue = cloneDeep(dataCategory);
  const [newValue, setNewValue] = useState([]);
  const [filters, setFilter] = useState();

  const routeListJob = () => {
    navigate(systemRoutes.Jobs_Online_ROUTE);
  };

  const patternOptions = [
    { id: "B??n th???i gian", label: t("part-time"), value: "part-time" },
    { id: "To??n th???i gian", label: t("full-time"), value: "full-time" },
  ];

  const expectedOption = [
    { id: "Tr??? theo d??? d??n", label: t("pay-project"), value: "pay-project" },
    { id: "Tr??? theo gi???", label: t("hour-pay"), value: "hour-pay" },
    { id: "Tr??? theo th??ng", label: t("month-pay"), value: "month-pay" },
  ];

  const handleAddNewPost = (value: any) => {
    // JSON.stringify(addNewPost(value));
    const data = {
      deadline: value.deadline,
      place: value.location,
      budgetMin: value.budgetMin,
      budgetMax: value.budgetMax,
      workType: value.workType,
      payType: value.payType,
    };

    JSON.stringify(
      authApi
        .post("/projects", { data })
        .then((res) => {
          const filter = {
            ...value,
            project: res.data?.data.id,
          };

          addNewPost(filter, routeListJob);
          Notification.Success({ message: t("success") });
        })
        .catch((error) => {
          console.log(error);
        })
    );
  };

  const handleChangeFilter = (text: any) => {
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
                  setSearchCategory(e.toLowerCase());
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

            <Form.Item name={"services"} label={t("service-fitting")}>
              <Select
                tabIndex={3}
                placeholder={t("placeholder.enter_service")}
                showSearch
                filterOption={false}
                onChange={(item) => setServiceChoosen(item)}
                onSearch={(e: any) => {
                  setSearchService(e.toLowerCase());
                }}
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
              <TextArea placeholder={t("placeholder.detail")} />
            </Form.Item>
            <div className="attach">
              <div
                className="attach_title"
                onClick={() => setUseUpload(!useUpload)}
              >
                {t("attachment")}
              </div>

              {useUpload && (
                <div>
                  <p>{t("type")}</p>
                  <p>{t("size")}</p>
                  <div>
                    <Upload beforeUpload={() => false} {...props}>
                      <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                  </div>
                </div>
              )}
            </div>

            <Form.Item name={"skills"} label={t("skill")}>
              <Select
                mode="multiple"
                tabIndex={3}
                placeholder={t("placeholder.skill")}
                showSearch
                onSearch={(e: any) => {
                  setSearchSkill(e.toLowerCase());
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

            <Form.Item label={t("deadline")} name="deadline">
              <DatePicker />
            </Form.Item>

            <Form.Item
              name={"workType"}
              label={t("pattern")}
              initialValue={"B??n th???i gian"}
            >
              <Select
                tabIndex={3}
                showSearch
                onSearch={(e: any) => {
                  handleChangeFilter(e);
                }}
                filterOption={false}
                onChange={(item) => setServiceChoosen(item)}
              >
                {patternOptions?.map((item: any) => (
                  <Select.Option value={item?.id} key={item?.id}>
                    {item?.label}
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
                {listAddress?.map((item: any) => (
                  <Select.Option
                    value={item?.attributes?.city}
                    key={item?.attributes?.city}
                  >
                    {t(item.attributes?.city)}
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
            <Form.Item
              name={"payType"}
              label={t("payment")}
              initialValue={"Tr??? theo d??? d??n"}
            >
              <Select
                tabIndex={3}
                showSearch
                onSearch={(e: any) => {
                  handleChangeFilter(e);
                }}
                filterOption={false}
                onChange={(item) => setServiceChoosen(item)}
              >
                {expectedOption?.map((item: any) => (
                  <Select.Option value={item?.id} key={item?.id}>
                    {item?.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              label={t("minimum")}
              className="number_salary"
              name="budgetMin"
            >
              <InputNumber
                placeholder={t("from")}
                className="input-calender"
                controls={false}
              />
            </Form.Item>
            <Form.Item
              label={t("maximum")}
              className="number_salary"
              name="budgetMax"
            >
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
