import { Button, Form, Input } from "antd";
import { useTranslation } from "react-i18next";
import { forgotMyPasswords } from "../service/api";
import authApi from "../../../constant/http-common";
import "../styles/login.scss";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import { systemRoutes } from "../../../routes";

const ForgetPassword = () => {
  const { t } = useTranslation("login");
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const serviceId = "service_0tk8c3m";
  const templateId = "template_6jdi2hu";
  const userId = "wjIzS7aYtLZY1jAJ-";
  const handleForgot = (values: any) => {
    const email = values.email;

    authApi
      .post("/auth/forgot-password", { email })
      .then((respons: any) => {
        // form.setFields([
        //   {
        //     name: "email",
        //     errors: [t("another-email")],
        //   },
        // ]);
        console.log("resposns: ", respons);
      })
      .catch((error: any) => {
        console.log("eeeee: ", error);
        if (error?.message === "Request failed with status code 500") {
          emailjs
            .send(
              serviceId,
              templateId,
              {
                to_name: email,
                to_email: email,
                message: `
          <a href="http://localhost:3000/reset/reset-password">Reset password</a>
        `,
              },
              userId
            )
            .then((respon: any) =>
              navigate(systemRoutes.CHECK_EMAIL_ROUTE, {
                state: { email: email },
              })
            )
            .catch((error: any) => console.log("errr: ", error));
        }
      });
  };
  return (
    <div className="form-forgot">
      <Form layout="vertical" form={form} onFinish={handleForgot}>
        <p className="title">{t("forget")}</p>
        <Form.Item
          name={"email"}
          label={t("registered")}
          rules={[{ required: true, message: t("not_empty") }]}
        >
          <Input placeholder={t("your-email")} />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          {t("send-request")}
        </Button>
      </Form>
    </div>
  );
};

export default ForgetPassword;
