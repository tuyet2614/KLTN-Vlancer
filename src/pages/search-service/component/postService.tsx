import { Button, Form, Input, InputNumber, Select, Upload } from "antd";
import { useTranslation } from "react-i18next";

const PostService = () => {
  const { t } = useTranslation("service");
  const [form] = Form.useForm();
  return (
    <div className="post-service">
      <div>
        <p className="title">{t("post")}</p>
        <Form layout="vertical" form={form}>
          <div className="post-item">
            <div className="header">
              <div className="index">1</div>
              <div className="title-item">{t("info")}</div>
            </div>
            <div>
              <Form.Item
                name="name-service"
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
                name="cate"
                label={t("cate")}
                rules={[
                  { required: true, message: t("error_messes.required") },
                ]}
              >
                <Select placeholder={t("placeholder.name")} />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                name={"type-service"}
                label={t("type-service")}
                rules={[
                  { required: true, message: t("error_messes.required") },
                ]}
              >
                <Input placeholder={t("placeholder.name")} />
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
                <Upload />
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
                <Upload />
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
                <Upload />
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
                name="detail"
              >
                <Select placeholder={t("placeholder.detail")} />
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
                rules={[
                  { required: true, message: t("error_messes.required") },
                ]}
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
                name="min_quanty"
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
                rules={[
                  { required: true, message: t("error_messes.required") },
                ]}
                name="type_deadline"
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
        </Form>
      </div>
    </div>
  );
};

export default PostService;
