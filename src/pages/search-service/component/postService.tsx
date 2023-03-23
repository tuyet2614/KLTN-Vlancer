import { Button, Form, Input, InputNumber, Select, Upload } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getCategories, getService } from "../../../components/filters/api";
import { systemRoutes } from "../../../routes";
import { getMyUser } from "../../auth/service/api";
import { addNewService } from "../service/api";

const PostService = () => {
  const { t } = useTranslation("service");
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { data, isLoading } = getMyUser();
  const [searchService, setSearchService] = useState<any>("");
  const [searchCategory, setSearchCategory] = useState<any>("");
  const [useUpload, setUseUpload] = useState(false);
  const [serviceChoosen, setServiceChoosen] = useState("");
  const [files, setFiles] = useState<any>();

  const dataCategory = getCategories(searchCategory);
  const dataServices = getService(searchService);
  const routeListService = () => {
    navigate(systemRoutes.SEARCH_SERVICE_ROUTE);
  };
  const handleAddNewPost = (value: any) => {
    const filter = {
      ...value,

      users_permissions_user: data?.id,
      status: "sell",
    };

    JSON.stringify(addNewService(filter, routeListService));
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(event.target.files);
  };
  return (
    <div className="post-service">
      <div>
        <p className="title">{t("post")}</p>
        <Form layout="vertical" form={form} onFinish={handleAddNewPost}>
          <div className="post-item">
            <div className="header">
              <div className="index">1</div>
              <div className="title-item">{t("info")}</div>
            </div>
            <div>
              <Form.Item
                name="name"
                label={t("name-service")}
                rules={[
                  { required: true, message: t("error_messes.required") },
                ]}
              >
                <Input placeholder={t("placeholder.name")} />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                name="category"
                label={t("cate")}
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
            </div>
            <div>
              <Form.Item
                name={"services"}
                label={t("type-service")}
                rules={[
                  { required: true, message: t("error_messes.required") },
                ]}
              >
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
            </div>
          </div>

          <div className="post-item">
            <div className="header">
              <div className="index">2</div>
              <div className="title-item">{t("post-avatar")}</div>
            </div>
            <div>
              <Form.Item
                label={t("avatar")}
                rules={[
                  { required: true, message: t("error_messes.required") },
                ]}
                name="avatar"
              >
                <input type="file" onChange={handleFileChange} />
              </Form.Item>
            </div>
          </div>

          <div className="post-item">
            <div className="header">
              <div className="index">3</div>
              <div className="title-item">{t("post-img")}</div>
            </div>
            <p>{t("explain-post-img")}</p>
            <div>
              <Form.Item
                label={t("image")}
                rules={[
                  { required: true, message: t("error_messes.required") },
                ]}
                name="image"
              >
                <input type="file" onChange={handleFileChange} />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                label={t("post-video")}
                rules={[
                  { required: true, message: t("error_messes.required") },
                ]}
                name="video"
              >
                <Input />
              </Form.Item>
            </div>
          </div>

          <div className="post-item">
            <div className="header">
              <div className="index">4</div>
              <div className="title-item">{t("detail-service")}</div>
            </div>
            <div>
              <Form.Item
                label={t("benefit")}
                rules={[
                  { required: true, message: t("error_messes.required") },
                ]}
                name="benefit"
              >
                <Input placeholder={t("placeholder.benefit")} />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                label={t("detail")}
                rules={[
                  { required: true, message: t("error_messes.required") },
                ]}
                name="description"
              >
                <TextArea placeholder={t("placeholder.detail")} />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                label={t("process")}
                rules={[
                  { required: true, message: t("error_messes.required") },
                ]}
                name="process"
              >
                <Input placeholder={t("placeholder.step")} />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                label={t("customer")}
                rules={[
                  { required: true, message: t("error_messes.required") },
                ]}
                name="customer"
              >
                <Input placeholder={t("placeholder.customer")} />
              </Form.Item>
            </div>
          </div>

          <div className="post-item">
            <div className="header">
              <div className="index">5</div>
              <div className="title-item">{t("price-service")}</div>
            </div>

            <div>
              <Form.Item
                label={t("price")}
                rules={[
                  { required: true, message: t("error_messes.required") },
                ]}
                name="price"
              >
                <InputNumber />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                label={t("unit")}
                // rules={[
                //   { required: true, message: t("error_messes.required") },
                // ]}
                name="unit"
              >
                <Select />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                label={t("min_quanty")}
                rules={[
                  { required: true, message: t("error_messes.required") },
                ]}
                name="qty"
              >
                <InputNumber />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                label={t("deadline_finish")}
                rules={[
                  { required: true, message: t("error_messes.required") },
                ]}
                name="deadline"
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                // rules={[
                //   { required: true, message: t("error_messes.required") },
                // ]}
                name="type-deadline"
              >
                <Select />
              </Form.Item>
            </div>
          </div>
          <div className="post-item">
            <div className="header">
              <div className="index">6</div>
              <div className="title-item">{t("add_service")}</div>
            </div>

            <div>
              <Button>{t("add_service_btn")}</Button>
            </div>
          </div>

          <div className="form-cread-job-btn post-item">
            <div className="row-fluid">
              <Button htmlType="submit" type="primary">
                {t("post")}
              </Button>
            </div>
            <div className="row-fluid">{t("draft")}</div>
            <div className="row-fluid">{t("accept")}</div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default PostService;
