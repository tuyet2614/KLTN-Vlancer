import { Button, Form, Input, InputNumber, Select, Upload } from "antd";
import { useTranslation } from "react-i18next";

const PostService = () => {
  const { t } = useTranslation("service");
  return (
    <div className="post-service">
      <p>{t("post")}</p>
      <Form>
        <div>
          <div>{t("info")}</div>
          <div>
            <Form.Item label={t("name-service")}>
              <Input placeholder={t("placeholder.name")} />
            </Form.Item>
          </div>
          <div>
            <Form.Item label={t("cate")}>
              <Select placeholder={t("placeholder.name")} />
            </Form.Item>
          </div>
          <div>
            <Form.Item label={t("type-service")}>
              <Input placeholder={t("placeholder.name")} />
            </Form.Item>
          </div>
        </div>

        <div>
          <div>{t("post-avatar")}</div>
          <div>
            <Form.Item label={t("avatar")}>
              <Upload />
            </Form.Item>
          </div>
        </div>

        <div>
          <div>{t("post-img")}</div>
          <p>{t("explain-post-img")}</p>
          <div>
            <Form.Item label={t("image")}>
              <Upload />
            </Form.Item>
          </div>
          <div>
            <Form.Item label={t("post-video")}>
              <Upload />
            </Form.Item>
          </div>
        </div>

        <div>
          <div>{t("detail-service")}</div>
          <div>
            <Form.Item label={t("benefit")}>
              <Input placeholder={t("placeholder.benefit")} />
            </Form.Item>
          </div>
          <div>
            <Form.Item label={t("detail")}>
              <Select placeholder={t("placeholder.detail")} />
            </Form.Item>
          </div>
          <div>
            <Form.Item label={t("process")}>
              <Input placeholder={t("placeholder.step")} />
            </Form.Item>
          </div>
          <div>
            <Form.Item label={t("customer")}>
              <Input placeholder={t("placeholder.customer")} />
            </Form.Item>
          </div>
        </div>

        <div>
          <div>{t("price-service")}</div>

          <div>
            <Form.Item label={t("price")}>
              <InputNumber />
            </Form.Item>
          </div>
          <div>
            <Form.Item label={t("unit")}>
              <Select />
            </Form.Item>
          </div>
          <div>
            <Form.Item label={t("min_quanty")}>
              <InputNumber />
            </Form.Item>
          </div>
          <div>
            <Form.Item label={t("deadline_finish")}>
              <InputNumber />
            </Form.Item>
            <Form.Item>
              <Select />
            </Form.Item>
          </div>
        </div>
        <div>
          <div>{t("add_service")}</div>

          <div>
            <Button>{t("add_service_btn")}</Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default PostService;
