import {
  Button,
  DatePicker,
  Form,
  Image,
  Input,
  Select,
  Table,
  Upload,
} from "antd";
import avatarDefault from "@assets/images/icon/avatar.jpg";
import { useTranslation } from "react-i18next";
import { createProfile, updateUser } from "../services/api";
import { getMyUser } from "../../auth/service/api";
import { api_url } from "../../../untils/string";
import { useEffect, useState } from "react";
import { DateFormat } from "../../../configs/common";
import dayjs from "dayjs";
import moment from "moment";
import TextArea from "antd/lib/input/TextArea";
import { getService } from "../../../components/filters/api";
import axios from "axios";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import Loading from "../../../components/base/components/loading";

interface Props {
  id?: string;
}

const UpdateProfileExperience = ({ id }: Props) => {
  const { t } = useTranslation("update");
  const [form] = Form.useForm();
  const { data: dataUser, isLoading } = getMyUser();
  const [searchService, setSearchService] = useState<any>("");
  const dataServices = getService(searchService);
  const [files, setFiles] = useState<any>();
  const dataProfile = dataUser?.profile;

  const token =
    localStorage.getItem("auth-token") &&
    localStorage.getItem("auth-token")!.replace(/['"]+/g, "");
  //REQUEST
  useEffect(() => form.resetFields(), [dataUser]);

  const handleAddNewPost = (value: any) => {
    const formData = new FormData();

    formData.append("files", files[0]);

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
          files: imageId,
        };
        JSON.stringify(createProfile(id, inputValue, dataProfile));
      })
      .catch((error) => {
        console.log("check errr: ", error);
      });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(event.target.files);
  };

  const columns = [
    {
      title: t("stt"),
      dataIndex: "stt",
      width: 60,
      render: (_: any, __: any, index: number) => {
        return <div className="flex justify-center">{index + 1}</div>;
      },
    },
    {
      title: t("profile"),
      dataIndex: "profile",
      width: 350,
      render: (_: any, item: any) => {
        const avatar: string = api_url + item?.files?.formats?.thumbnail.url;

        return (
          <div>
            <Image src={item?.files ? avatar : avatarDefault} preview={false} />
            <div className="actions">
              <div className="btn">
                <EditFilled />
              </div>
              <div className="btn">
                <DeleteFilled />
              </div>
            </div>
          </div>
        );
      },
    },
    {
      title: t("profile-info"),
      dataIndex: "profile-info",
      render: (_: any, record: any) => {
        return (
          <div>
            <p className="title">{record?.title}</p>
            <p>{record?.description}</p>
            {record?.services?.map((item: any) => (
              <p className="text-[#08c]">{item.name}</p>
            ))}
          </div>
        );
      },
    },
  ];

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Form form={form} onFinish={handleAddNewPost} className="update-form">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="number">1</span>
              <p className="title">{t("cv-capacity")}</p>
            </div>
            {dataUser?.profile?.length === 0 ? (
              <div>
                <p>{t("describe")}</p>
                <span>
                  <b>{t("no-cv")}</b>
                </span>
                <span>{t("has-cv")}</span>
              </div>
            ) : (
              <div>
                <Table
                  columns={columns}
                  dataSource={dataUser?.profile}
                  pagination={false}
                />
              </div>
            )}
          </div>

          <div>
            <div className="flex items-center gap-3 m-5">
              <span className="number">2</span>
              <p className="title">{t("more-profile")}</p>
            </div>

            <Form.Item
              label={t("title")}
              name="title"
              rules={[
                {
                  required: true,
                  message: t("error_messes.require"),
                },
              ]}
            >
              <Input placeholder={t("title")} />
            </Form.Item>

            <Form.Item
              name="files"
              label={t("file")}
              rules={[
                {
                  required: true,
                  message: t("error_messes.require"),
                },
              ]}
              className="!m-0"
            >
              <input type="file" onChange={handleFileChange} />
            </Form.Item>
            <div className="subtitle text-[#bbb]">
              <ol>
                <li>1. {t("size-file")}</li>
                <li>
                  <ul>
                    2. {t("type-file")}
                    <li>- {t("doc-type")}</li>
                    <li>- {t("image-type")}</li>
                  </ul>
                </li>
                <li>
                  <ul>
                    3. {t("image")}
                    <li>- {t("min-size")}</li>
                    <li>- {t("max-size")}</li>
                  </ul>
                </li>
              </ol>
            </div>
            <div>
              <Form.Item
                label={t("detail-des")}
                name="description"
                rules={[
                  {
                    required: true,
                    message: t("error_messes.require"),
                  },
                ]}
              >
                <TextArea rows={4} placeholder={t("detail-des")} tabIndex={5} />
              </Form.Item>
            </div>

            <div>
              <Form.Item label={t("service")} name="services">
                <Select
                  mode="multiple"
                  tabIndex={3}
                  placeholder={t("placeholder.service")}
                  showSearch
                  filterOption={false}
                >
                  {dataServices?.map((item: any) => (
                    <Select.Option value={item?.attributes?.id} key={item?.id}>
                      {t(item?.attributes?.name)}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </div>

            <Form.Item label={t("link-project")} name="website">
              <Input placeholder={t("placeholder-web")} />
            </Form.Item>
          </div>

          <div className="confirm-post">
            <div>
              <Button htmlType="submit" type="primary">
                {t("save-profile")}
              </Button>
            </div>
          </div>
        </Form>
      )}
    </>
  );
};

export default UpdateProfileExperience;
