import { Button, Form, Image, Input, Modal, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getService } from "../../../components/filters/api";
import { getDetailProfile, updateProfile } from "../services/api";
import authApi from "../../../constant/http-auth-common";
import { api_url } from "../../../untils/string";
import avatarDefault from "@assets/images/icon/avatar.jpg";
import Loading from "../../../components/base/components/loading";

interface Props {
  isOpen: boolean;
  handleCloseModal: () => void;
  setLoading: any;
  profileId: string;
}

const ModalEditProfile = ({
  isOpen,
  handleCloseModal,
  setLoading,
  profileId,
}: Props) => {
  const { t } = useTranslation("update");
  const [files, setFiles] = useState<any>();
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(event.target.files);
  };
  console.log("profileId: ", profileId);

  const [form] = Form.useForm();
  const [searchService, setSearchService] = useState<any>("");
  const dataServices = getService(searchService);
  const [dataProfile, setDataProfile] = useState<any>([]);
  const [loadingModal, setLoadingModal] = useState(true);

  const token =
    localStorage.getItem("auth-token") &&
    localStorage.getItem("auth-token")!.replace(/['"]+/g, "");
  const handleEditProfile = (value: any) => {
    const formData = new FormData();
    files && formData.append("files", files[0]);
    const input = { ...value };
    setLoading(true);
    files
      ? axios({
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
            JSON.stringify(updateProfile(inputValue, profileId, setLoading));
            handleCloseModal();
          })
          .catch((error) => {
            setLoading(false);
            console.log("check errr: ", error);
          })
      : JSON.stringify(updateProfile(input, profileId, setLoading));
    handleCloseModal();
  };

  useEffect(() => {
    authApi
      .get(`/profiles/${profileId}?populate=*`)
      .then((respon) => {
        setDataProfile(respon?.data?.data);
        setLoadingModal(false);
      })
      .catch((error) => {
        console.log(error);
        setLoadingModal(true);
      });
  }, [profileId]);

  //   console.log("dara: ", dataProfile);
  const avatar: string =
    api_url +
    dataProfile?.attributes?.files?.data?.attributes?.formats?.thumbnail.url;
  console.log("avatarrr: ", dataProfile?.files);

  return (
    <div>
      {loadingModal ? (
        <Loading />
      ) : (
        <Modal
          title={t("edit-profile")}
          onCancel={handleCloseModal}
          open={isOpen}
          footer={false}
        >
          <Form form={form} onFinish={handleEditProfile}>
            <Form.Item
              label={t("title")}
              name="title"
              rules={[
                {
                  required: true,
                  message: t("error_messes.require"),
                },
              ]}
              initialValue={
                dataProfile?.attributes?.title && dataProfile?.attributes?.title
              }
            >
              <Input placeholder={t("title")} />
            </Form.Item>

            <div>
              <Image
                src={dataProfile?.attributes?.files ? avatar : avatarDefault}
                preview={false}
              />
            </div>

            <Form.Item name="files" label={t("file")} className="!m-0">
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
                initialValue={dataProfile?.attributes?.description}
              >
                <TextArea rows={4} placeholder={t("detail-des")} tabIndex={5} />
              </Form.Item>
            </div>

            <div>
              <Form.Item
                label={t("service")}
                name="services"
                initialValue={dataProfile?.attributes?.services?.data.map(
                  (item: any) => item.id
                )}
              >
                <Select
                  tabIndex={3}
                  placeholder={t("placeholder.service")}
                  showSearch
                  filterOption={false}
                >
                  {dataServices?.map((item: any) => (
                    <Select.Option value={item?.id} key={item?.id}>
                      {t(item?.attributes?.name)}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </div>

            <Form.Item label={t("link-project")} name="website">
              <Input placeholder={t("placeholder-web")} />
            </Form.Item>

            <div className="flex justify-end gap-7">
              <Button htmlType="submit" className="btn" type="primary">
                {t("confirm")}
              </Button>
              <Button onClick={handleCloseModal} className="btn btn-cancel">
                {t("Cancel")}
              </Button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
};

export default ModalEditProfile;
