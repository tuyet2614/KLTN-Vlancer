import { Button, DatePicker, Form, Image, Input } from "antd";
import avatarDefault from "@assets/images/icon/avatar.jpg";
import { useTranslation } from "react-i18next";
import { updateUser } from "../services/api";
import { getMyUser } from "../../auth/service/api";
import { api_url } from "../../../untils/string";
import { useEffect, useState } from "react";
import { DateFormat } from "../../../configs/common";
import dayjs from "dayjs";
import moment from "moment";
import InputFile from "./inputFile";
import axios from "axios";
import authApi from "../../../constant/http-auth-common";

interface Props {
  id?: string;
}

const InformationUpdate = ({ id }: Props) => {
  const { t } = useTranslation("update");
  const [form] = Form.useForm();
  const dataUser: any = getMyUser();
  const avatar: string = api_url + dataUser?.avatar?.formats?.thumbnail.url;
  useEffect(() => form.resetFields(), [dataUser]);
  const token =
    localStorage?.getItem("auth-token") &&
    localStorage?.getItem("auth-token")?.replace(/['"]+/g, "");

  const [files, setFiles] = useState<any>();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(event.target.files);
  };

  const handleAddNewPost = (value: any) => {
    const formData = new FormData();

    formData.append("files", files[0], files[0].name);

    console.log("value: ", formData.get("files"));
    console.log("value: ", files[0]);

    axios({
      method: "post",
      url: "http://localhost:1337/api/upload",
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        //after success
        const imageId = response.data[0].id;

        authApi
          .put(`http://localhost:1337/users/${id}`, { avatar: imageId })
          .then((response) => {
            //handle success
            console.log("respos: ", response);
          })
          .catch((error) => {
            //handle error
            console.log("errr: ", error);
          });
      })
      .catch((error) => {
        console.log("check errr: ", error);
      });
    // JSON.stringify(updateUser(id, value));
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
        <Form.Item name="files">
          <input type="file" onChange={handleFileChange} />
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
