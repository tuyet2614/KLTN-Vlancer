import { Button, Divider, Form, Input, Radio } from "antd";
import { log } from "console";
import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { systemRoutes } from "../../../routes";
import LoginRouteComponent from "../components/loginRouteComponent";
import { CreateUserApi } from "../service/api";

const SignUp: React.FC = () => {
  const { t } = useTranslation("login");
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const handleGotoLogin = () => {
    navigate(systemRoutes.LOGIN_ROUTE);
  };

  const handleSubmit = (value: any) => {
    JSON.stringify(CreateUserApi(value, handleGotoLogin));
  };

  return (
    <Fragment>
      <div className="login">
        <Form labelCol={{ span: 24 }} form={form} onFinish={handleSubmit}>
          <LoginRouteComponent />
          <Form.Item label={t("full-name")} name="username">
            <Input placeholder={t("full-name")} />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input placeholder={t("placeholder.email")} />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input placeholder={t("placeholder.password")} />
          </Form.Item>
          <Form.Item label="confirm">
            <Input placeholder={t("placeholder.password")} />
          </Form.Item>
          <Form.Item label={t("register-as")} name="role">
            <Radio.Group className="flex-wrap gap-12 flex">
              <Radio value="Client">{t("recruiter")}</Radio>
              <Radio value="Freelancer">Freelancer</Radio>
            </Radio.Group>
          </Form.Item>
          <Button
            type="primary"
            className="btn-login mt-6 mb-2"
            onClick={() => form.submit()}
          >
            {t("sign-up")}
          </Button>
          <Divider />
          <div className="flex flex-wrap">
            <span>
              {t("agree")} <a>{t("terms")}</a>
            </span>
          </div>
        </Form>
      </div>
    </Fragment>
  );
};

export default SignUp;
