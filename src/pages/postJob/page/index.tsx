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
import { getMyUser } from "../../auth/service/api";
import { formatNumberStr, numberParser } from "../../../untils/string";
import Loading from "../../../components/base/components/loading";
import emailjs from "emailjs-com";
import { getAuthToken } from "../../../untils/token";

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
  const { t } = useTranslation(["postJob", "service"]);
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
  const isLogin = getAuthToken();

  const dataCategory = getCategories(searchCategory);
  const dataServices = getService(searchService);
  const dataSkills = getSkills(searchSkill);
  const listAddress = getCities(searchAdd);

  // let newValue = cloneDeep(dataCategory);
  const [newValue, setNewValue] = useState([]);
  const [filters, setFilter] = useState();
  const { data: dataUser, isLoading } = getMyUser();

  const serviceId = "service_0tk8c3m";
  const templateId = "template_z4ks1lu";
  const userId = "wjIzS7aYtLZY1jAJ-";

  const routeListJob = () => {
    navigate(systemRoutes.Jobs_Online_ROUTE);
  };

  const patternOptions = [
    { id: "partTime", label: t("part-time"), value: "partTime" },
    { id: "fullTime", label: t("full-time"), value: "fullTime" },
  ];

  const expectedOption = [
    { id: "byProject", label: t("pay-project"), value: "byProject" },
    { id: "byHour", label: t("hour-pay"), value: "byHour" },
    { id: "byMonth", label: t("month-pay"), value: "byMonth" },
  ];

  const handleAddNewPost = (value: any) => {
    const data = {
      ...value,

      users_permissions_user: dataUser?.id,
      status: "draft",
    };

    authApi
      .post("/posts", { data })
      .then((response) => {
        emailjs.send(
          serviceId,
          templateId,
          {
            name: dataUser?.username,
            email: dataUser?.email,
            message: `Tôi muốn đăng công việc này lên để tìm những ứng viên phù hợp cho dự
          án của tôi \n Thông tin chi tiết của dự án có thể xem tại đây:`,
            link: `
          <a href="http://localhost:3000/request-detail-job/${response?.data?.data?.id}/post">xem chi tiết</a>
        `,
          },
          userId
        );
        routeListJob();
      })
      .catch((error) => {
        console.log(error.response);
      });
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
    <>
      {isLogin ? (
        <div className="w-full flex justify-center bg-[#fafafa]">
          {isLoading ? (
            <Loading />
          ) : (
            <Form
              className="post-job"
              layout="vertical"
              onFinish={handleAddNewPost}
            >
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
                    rules={[
                      { required: true, message: t("error_messes.required") },
                    ]}
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
                          {t(item?.attributes?.name, { ns: "service" })}
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
                            <Button icon={<UploadOutlined />}>
                              Click to Upload
                            </Button>
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
                    initialValue={"partTime"}
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
                  <Form.Item name={"addresses"} label={t("hire-freelancer")}>
                    <Select
                      tabIndex={3}
                      placeholder={t("placeholder.location")}
                      showSearch
                      onSearch={(e: any) => {
                        setSearchAdd(e.toLowerCase());
                      }}
                      filterOption={false}
                      onChange={(item) => setServiceChoosen(item)}
                    >
                      {listAddress?.map((item: any) => (
                        <Select.Option
                          value={item?.id}
                          key={item?.attributes?.id}
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
                    initialValue={"byProject"}
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
                      parser={(value: any) => numberParser(value)}
                      formatter={(value: any) => formatNumberStr(value)}
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
                      parser={(value: any) => numberParser(value)}
                      formatter={(value: any) => formatNumberStr(value)}
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
          )}
        </div>
      ) : (
        <div>
          <p>You need to login</p>
        </div>
      )}
    </>
  );
};

export default PostJob;
