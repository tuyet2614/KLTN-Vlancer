import { Button, DatePicker, Form, Image, Input } from "antd";
import avatarDefault from "@assets/images/icon/avatar.jpg";
import { useTranslation } from "react-i18next";
import { updateUser } from "../services/api";
import { getMyUser } from "../../auth/service/api";
import { api_url } from "../../../untils/string";
import { useEffect } from "react";
import { DateFormat } from "../../../configs/common";
import dayjs from "dayjs";
import moment from "moment";

interface Props {
  id?: string;
}

const InformationUpdate = ({ id }: Props) => {
  const { t } = useTranslation("update");
  const [form] = Form.useForm();
  const dataUser: any = getMyUser();
  const avatar: string = api_url + dataUser?.avatar?.formats?.thumbnail.url;
  useEffect(() => form.resetFields(), [dataUser]);

  const handleAddNewPost = (value: any) => {
    // const data = {
    //   username: value.username,
    //   email: value.email,
    //   skype: value.skype,
    // };
    JSON.stringify(updateUser(id, value));
  };

  return (
    <Form form={form} onFinish={handleAddNewPost} className="update-form">
      <div className="flex items-center gap-3 mb-5">
        <span className="number">1</span>
        <p className="title">{t("information")}</p>
      </div>
      <div>
        <Form.Item label={t("avatar")}>
          <Image
            src={dataUser?.avatar ? avatar : avatarDefault}
            preview={false}
            className="avatar"
          />
        </Form.Item>
        <Form.Item
          label={t("full-name")}
          name="username"
          initialValue={dataUser?.username}
          rules={[
            {
              required: true,
              message: t("error_messes.require"),
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t("email")}
          name="email"
          initialValue={dataUser?.email}
          rules={[
            {
              required: true,
              message: t("error_messes.require"),
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t("skype")}
          name="skype"
          initialValue={dataUser?.skype}
        >
          <Input />
        </Form.Item>
        <Form.Item label={t("change-pass")} name="password">
          <Input.Password />
        </Form.Item>
        <Form.Item
          label={t("re-change-pass")}
          name="confirm-pass"
          rules={[
            ({ getFieldValue }) => ({
              validator: async (_, value) => {
                if (!value && getFieldValue("password")) {
                  return Promise.reject(
                    new Error(
                      t("error_messes.password_confirm_must_be_equal_password")
                    )
                  );
                }
                if (value && value !== getFieldValue("password")) {
                  return Promise.reject(
                    new Error(
                      t("error_messes.password_confirm_must_be_equal_password")
                    )
                  );
                }
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label={t("phone-number")}
          name="phoneNumber"
          initialValue={dataUser?.phoneNumber}
          rules={[
            {
              required: true,
              message: t("error_messes.require"),
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t("city ")}
          name="city"
          initialValue={dataUser?.addresses?.city}
          rules={[
            {
              required: true,
              message: t("error_messes.require"),
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t("address")}
          name="address"
          rules={[
            {
              required: true,
              message: t("error_messes.require"),
            },
          ]}
        >
          <Input />
        </Form.Item>
      </div>
      <div>
        <div className="flex items-center gap-3 m-5">
          <span className="number">2</span>
          <p className="title">{t("verified")}</p>
        </div>

        <Form.Item
          label={t("identifier-name")}
          name="identification"
          initialValue={dataUser?.identification?.fullName}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t("identifier-id")}
          name="identifierID"
          initialValue={dataUser?.identifierID}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t("date-of-birth")}
          name="birthDate"
          initialValue={dataUser?.birthDate && moment(dataUser.birthDate)}
          rules={[
            {
              required: true,
              message: t("error_messes.require"),
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
      </div>

      <div className="confirm-post">
        <div>
          <Button htmlType="submit" type="primary">
            {t("save")}
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default InformationUpdate;
