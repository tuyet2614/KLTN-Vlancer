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
import { Fragment, useEffect } from "react";

import "../styles/login.scss";
import { useTranslation } from "react-i18next";
import LoginRouteComponent from "../components/loginRouteComponent";
import { Link } from "react-router-dom";
import { systemRoutes } from "../../../routes";
import { useLoginApi } from "../service/api";
import axios from "axios";

const Login = () => {
  const { t } = useTranslation("login");
  const [form] = Form.useForm();
  // const  [loginUser]  = useLoginApi();

  const onSubmit = (value: any) => {
    // useEffect(useLoginApi(value.user, value.password), [])
    // loginUser(value.user, value.password)
    useLoginApi(value.user, value.password)
    // axios
    //   .post("http://localhost:1337/api/auth/local", {
    //     identifier: value.user,
    //     password: value.password,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // localStorage.setItem(
    //   LocalStorageKey.IS_REMEMBER_ME,
    //   JSON.stringify(value?.remember)
    // );
  };

  return (
    <Fragment>
      <div className="login">
        <Form labelCol={{ span: 24 }} form={form} onFinish={onSubmit}>
          <LoginRouteComponent />
          <Form.Item
            name="user"
            label="Email"
            rules={[{ required: true, message: t("not_empty") }]}
          >
            <Input placeholder={t("placeholder.email")} />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: t("not_empty") }]}
          >
            <Input placeholder={t("placeholder.password")} />
          </Form.Item>
          <div className="flex justify-between">
            <Checkbox>{t("remember")}</Checkbox>
            <div>{t("forgot")}</div>
          </div>

          <Button
            type="primary"
            className="btn-login mt-6 mb-2"
            htmlType="submit"
          >
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
