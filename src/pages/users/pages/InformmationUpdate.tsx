import { Button, DatePicker, Form, Image, Input, Select } from "antd";
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
import { getCities } from "../../../components/filters/api";
import Loading from "../../../components/base/components/loading";
import { useNavigate } from "react-router-dom";
import { systemRoutes } from "../../../routes";

interface Props {
  id?: string;
}

const InformationUpdate = ({ id }: Props) => {
  const { t } = useTranslation("update");
  const [form] = Form.useForm();
  const { data: dataUser, isLoading } = getMyUser();
  const avatar: string = api_url + dataUser?.avatar?.formats?.thumbnail.url;
  const [searchAdd, setSearchAdd] = useState<any>("");
  const navigate = useNavigate();
  useEffect(() => form.resetFields(), [dataUser]);
  const token =
    localStorage?.getItem("auth-token") &&
    localStorage?.getItem("auth-token")?.replace(/['"]+/g, "");

  const [files, setFiles] = useState<any>();
  const listAddress = getCities(searchAdd);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(event.target.files);
  };

  const handleDetailUser = () => {
    navigate(`${systemRoutes.USERS_ROUTE}/me`);
  };

  const handleAddNewPost = (value: any) => {
    const formData = new FormData();

    formData.append("files", files[0], files[0].name);

    axios({
      method: "post",
      url: "http://localhost:1337/api/upload",
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        const imageId = response.data[0].id;
        const inputValue = {
          ...value,
          avatar: imageId,
          addresses: {
            description: value.address,
          },
        };
        JSON.stringify(updateUser(id, inputValue, handleDetailUser));
      })
      .catch((error) => {
        console.log("check errr: ", error);
      });
  };

  const handleUploadNoFile = (value: any) => {
    const inputValue = {
      ...value,
    };
    JSON.stringify(updateUser(id, inputValue, handleDetailUser));
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Form
          form={form}
          onFinish={files ? handleAddNewPost : handleUploadNoFile}
          className="update-form"
        >
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
            <Form.Item name="files" className="upload-file">
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
                          t(
                            "error_messes.password_confirm_must_be_equal_password"
                          )
                        )
                      );
                    }
                    if (value && value !== getFieldValue("password")) {
                      return Promise.reject(
                        new Error(
                          t(
                            "error_messes.password_confirm_must_be_equal_password"
                          )
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
              initialValue={dataUser?.city}
              rules={[
                {
                  required: true,
                  message: t("error_messes.require"),
                },
              ]}
            >
              <Select
                tabIndex={3}
                placeholder={t("placeholder.location")}
                showSearch
                onSearch={(e: any) => {
                  setSearchAdd(e.toLowerCase());
                }}
                filterOption={false}
              >
                {listAddress?.map((item: any) => (
                  <Select.Option
                    value={item?.attributes?.city}
                    key={item?.attributes?.city}
                  >
                    {t(item.attributes?.city)}
                  </Select.Option>
                ))}
              </Select>
              {/* <Input /> */}
            </Form.Item>
            <Form.Item
              label={t("address")}
              name="location"
              initialValue={dataUser?.location}
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
      )}
    </>
  );
};

export default InformationUpdate;
