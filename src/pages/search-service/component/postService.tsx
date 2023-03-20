import { Form, Input, Select, Upload } from "antd";
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
      </Form>
    </div>
  );
};

export default PostService;
