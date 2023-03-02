import { Button, Divider, Form, Input, Radio, Space, Tooltip } from "antd";
import { log } from "console";
import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { systemRoutes } from "../../../routes";
import { validatePassword } from "../../../untils/validate";
import LoginRouteComponent from "../components/loginRouteComponent";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { CreateUserApi, getListRoles } from "../service/api";
import { capitalizeFirstLetter } from "../../../untils/string";

const SignUp: React.FC = () => {
  const { t } = useTranslation("login");
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const handleGotoLogin = () => {
    navigate(systemRoutes.LOGIN_ROUTE);
  };
  const listRole: any = getListRoles();

  const handleSubmit = (values: any) => {
    // const newValues = {
    //   ...values,
    //   role: {
    //     name: values.role,
    //   },
    // };
    JSON.stringify(CreateUserApi(values, handleGotoLogin));
  };

  const options = [
    { id: 1, name: "Authenticated", type: "authenticated" },
    { id: 2, name: "Client", type: "client" },
    { id: 3, name: "Freelancer", type: "freelancer" },
  ];

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
          <Form.Item
            name="password"
            label={
              <Space>
                {t("password")}
                <Tooltip title={t("password_note")}>
                  <AiOutlineInfoCircle />
                </Tooltip>
              </Space>
            }
            rules={[
              { required: true, message: t("error.required") },
              {
                validator: async (_, value) => {
                  if (value && !validatePassword(value)) {
                    return Promise.reject(
                      new Error(t("error.invalid_password"))
                    );
                  }
                },
              },
            ]}
          >
            <Input.Password
              placeholder={t("placeholder.password")}
              autoComplete="new-password"
              tabIndex={7}
            />
          </Form.Item>
          <Form.Item
            name="passwordConfirm"
            label={t("password_confirm")}
            rules={[
              { required: true, message: t("error.required") },
              ({ getFieldValue }) => ({
                validator: async (_, value) => {
                  if (!value && getFieldValue("password")) {
                    return Promise.reject(
                      new Error(
                        t("error.password_confirm_must_be_equal_password")
                      )
                    );
                  }
                  if (value && value !== getFieldValue("password")) {
                    return Promise.reject(
                      new Error(
                        t("error.password_confirm_must_be_equal_password")
                      )
                    );
                  }
                },
              }),
            ]}
          >
            <Input.Password
              placeholder={t("enter_password_confirm")}
              tabIndex={9}
            />
          </Form.Item>

          <Form.Item label={t("register-as")} name="role">
            <Radio.Group className="flex-wrap gap-12 flex">
              {listRole?.roles?.map((role: any) => (
                <Radio key={role.id} value={role.id}>
                  <span className="line-clamp line-clamp-2">
                    {capitalizeFirstLetter(role.name)}
                  </span>
                </Radio>
              ))}
              {/* <Radio value={"Client"}>{t("recruiter")}</Radio>
              <Radio value={"Freelancer"}>Freelancer</Radio> */}
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
