import { Button, Form, Input } from "antd";
import { useTranslation } from "react-i18next";

export const ResetPassword = () => {
  const { t } = useTranslation("login");
  return (
    <div className="form-reset">
      <h1 className="title-create">{t("create-new")}</h1>
      <p className="label-pass">{t("enter-pass")}</p>
      <Form>
        <Form.Item name="password">
          <Input placeholder={t("new-pass")} />
        </Form.Item>
        <Form.Item name={"confirm-password"}>
          <Input placeholder={t("re-pass")} />
        </Form.Item>
        <Button>{t("request")}</Button>
      </Form>
    </div>
  );
};
