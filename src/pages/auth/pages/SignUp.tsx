import { Button, Divider, Form, Input, Radio } from "antd";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import LoginRouteComponent from "../components/loginRouteComponent";

const SignUp = () => {
  const { t } = useTranslation("login");

  return (
    <Fragment>
      <div className="login">
        <Form labelCol={{ span: 24 }}>
          <LoginRouteComponent />
          <Form.Item label={t("full-name")}>
            <Input placeholder={t("full-name")} />
          </Form.Item>
          <Form.Item label="Email">
            <Input placeholder={t("placeholder.email")} />
          </Form.Item>
          <Form.Item label="Password">
            <Input placeholder={t("placeholder.password")} />
          </Form.Item>
          <Form.Item label="confirm">
            <Input placeholder={t("placeholder.password")} />
          </Form.Item>
          <Form.Item label={t("register-as")}>
            <Radio.Group className="flex-wrap gap-12 flex">
              <Radio value="recruiter">{t("recruiter")}</Radio>
              <Radio value="freelacer">Freelancer</Radio>
            </Radio.Group>
          </Form.Item>
          <Button type="primary" className="btn-login mt-6 mb-2">
            {t("sign-up")}
          </Button>
          <Divider />
          <div className="flex flex-wrap">
            <span>{t("agree")} <a>{t("terms")}</a></span>
            
          </div>
        </Form>
      </div>
    </Fragment>
  );
};

export default SignUp;
