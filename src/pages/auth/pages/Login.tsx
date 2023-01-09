import {
  Button,
  Checkbox,
  Col,
  Divider,
  Form,
  Image,
  Input,
  Row,
  Select,
  Space,
} from "antd";
import { Fragment } from "react";

import "../styles/login.scss";
import { useTranslation } from "react-i18next";
import LoginRouteComponent from "../components/loginRouteComponent";
import { Link } from "react-router-dom";
import { systemRoutes } from "../../../routes";

const Login = () => {
  const { t } = useTranslation("login");

  return (
    <Fragment>
      <div className="login">
        <Form labelCol={{ span: 24 }}>
          <LoginRouteComponent />
          <Form.Item label="Email">
            <Input placeholder={t("placeholder.email")} />
          </Form.Item>
          <Form.Item label="Password">
            <Input placeholder={t("placeholder.password")} />
          </Form.Item>
          <div className="flex justify-between">
            <Checkbox>{t("remember")}</Checkbox>
            <div>{t("forgot")}</div>
          </div>

          <Button type="primary" className="btn-login mt-6 mb-2">
            {t("login")}
          </Button>
          <Divider />
          <div className="flex flex-wrap gap-2 justify-center">
            <span>{t("already")}</span>
            <Link to={systemRoutes.SIGN_UP_ROUTE}>{t("sign-up")}</Link>
          </div>
        </Form>
      </div>
    </Fragment>
  );
};

export default Login;
