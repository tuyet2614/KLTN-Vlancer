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
import { Fragment, useCallback, useEffect } from "react";
import authApi from "../../../constant/http-common";

import "../styles/login.scss";
import { useTranslation } from "react-i18next";
import LoginRouteComponent from "../components/loginRouteComponent";
import { Link, useNavigate } from "react-router-dom";
import { systemRoutes } from "../../../routes";
import { useLoginApi } from "../service/api";
import axios from "axios";
import { LocalStorageKey } from "../../../configs/common";
import { setAuthData } from "../../../untils/token";
import Notification from "../../../components/base/components/Notification";

const Login = () => {
  const { t } = useTranslation(["login", "notify"]);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  // const {loginUser} = useLoginApi;

  const onSubmit = (value: any) => {
    authApi
      .post("/auth/local", value)
      .then((response) => {
        setAuthData(response.data.jwt);
        Notification.Success({ message: t("login.success", { ns: "notify" }) });
        navigate(systemRoutes.ONBOARD_ROUTE);
      })
      .catch((error) => {
        console.log(error);

        if (
          error.response.data.error.message === "Invalid identifier or password"
        ) {
          Notification.Error({
            message: t("login.false", { ns: "notify" }),
          });
        } else {
          Notification.Error({
            message: t("login.error", { ns: "notify" }),
          });
        }
      });
  };

  const checkRememberValue = useCallback(() => {
    const isRemember = JSON.parse(
      localStorage.getItem(LocalStorageKey.IS_REMEMBER_ME) ?? "false"
    );
    if (isRemember) {
      form.setFieldValue("remember", true);
    } else {
      form.setFieldValue("remember", false);
    }
  }, [form]);

  useEffect(() => {
    checkRememberValue();
  }, [checkRememberValue]);

  return (
    <Fragment>
      <div className="login">
        <Form labelCol={{ span: 24 }} form={form} onFinish={onSubmit}>
          <LoginRouteComponent />
          <Form.Item
            name="identifier"
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
            <Input.Password placeholder={t("placeholder.password")} />
          </Form.Item>
          <Space className="more">
            <Form.Item
              name="remember"
              valuePropName="checked"
              className="!mb-0"
            >
              <Checkbox className="remember_me">{t("remember")}</Checkbox>
            </Form.Item>
            <Link
              to={systemRoutes.FORGOT_PASS_ROUTE}
              className="forgot_password"
            >
              {t("forgot")}
            </Link>
          </Space>
          {/* <div className="flex justify-between">
            <Checkbox>{t("remember")}</Checkbox>
            <div>{t("forgot")}</div>
          </div> */}

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
