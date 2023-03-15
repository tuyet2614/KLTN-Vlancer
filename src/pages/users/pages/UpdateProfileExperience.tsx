import { Button, DatePicker, Form, Image, Input, Select, Upload } from "antd";
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

interface Props {
  id?: string;
}

const UpdateProfileExperience = ({ id }: Props) => {
  const { t } = useTranslation("update");
  const [form] = Form.useForm();
  const dataUser: any = getMyUser();
  const [searchService, setSearchService] = useState<any>("");
  const dataServices = getService(searchService);
  useEffect(() => form.resetFields(), [dataUser]);

  const handleAddNewPost = (value: any) => {
    const data = {
      ...value,
    };
    JSON.stringify(createProfile(data));
  };

  return (
    <Form form={form} onFinish={handleAddNewPost} className="update-form">
      <div>
        <div className="flex items-center gap-3 mb-5">
          <span className="number">1</span>
          <p className="title">{t("cv-capacity")}</p>
        </div>
        {!dataUser?.profile ? (
          <div>
            <p>{t("describe")}</p>
            <span>
              <b>{t("no-cv")}</b>
            </span>
            <span>{t("has-cv")}</span>
          </div>
        ) : (
          <div></div>
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
        <Form.Item label={t("file")} name="file">
          <Button />
          <div className="text-[#bbb]">
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
        </Form.Item>
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
          <p className="text-[#bbb]">{t("explain-des")}</p>
        </Form.Item>
        <Form.Item label={t("service")} name="service">
          <Select
            mode="multiple"
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
          <p className="text-[#bbb]">{t("find-service")}</p>
        </Form.Item>
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
  );
};

export default UpdateProfileExperience;
