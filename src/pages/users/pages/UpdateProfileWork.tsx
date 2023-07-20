import { Button, Form, Input, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/base/components/loading";
import {
  getCategories,
  getService,
  getSkills,
} from "../../../components/filters/api";
import { systemRoutes } from "../../../routes";
import { getMyUser } from "../../auth/service/api";
import { updateUser } from "../services/api";

interface Props {
  id?: string;
}

const UpdateProfileWork = ({ id }: Props) => {
  const { t } = useTranslation(["update", "service"]);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [searchCategory, setSearchCategory] = useState<any>("");
  const [searchSkill, setSearchSkill] = useState<any>("");
  const [searchService, setSearchService] = useState<any>("");
  const dataCategory = getCategories(searchCategory);
  const dataSkills = getSkills(searchSkill);
  const dataServices = getService(searchService);
  const handleDetailUser = () => {
    navigate(`${systemRoutes.USERS_ROUTE}/me`);
  };
  const handleUpdateUser = (value: any) => {
    console.log("checkkk: ", value);
    const data = {
      ...value,
      summary: {
        introduction: value.summary,
        level: value.level,
        timeWork: value.canDo,
      },
    };
    JSON.stringify(updateUser(id, data, handleDetailUser));
  };
  const roleUser = [
    {
      id: 4,
      name: "Client",
    },
    {
      id: 3,
      name: "Freelancer",
    },
  ];

  const levelUser = [
    {
      id: 1,
      name: "1 - Mới đi làm",
    },
    {
      id: 2,
      name: "2 - Đã có kinh nghiệm",
    },
    {
      id: 3,
      name: "3 - Chuyên gia",
    },
  ];

  const timeWork = [
    {
      id: 1,
      name: "Bán thời gian (dưới 40h/tuần)",
    },
    {
      id: 2,
      name: "Toàn thời gian (trên 40h/tuần)",
    },
  ];

  const { data: dataUser, isLoading } = getMyUser();
  useEffect(() => form.resetFields(), [dataUser]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <Form form={form} onFinish={handleUpdateUser} className="update-form">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="number">1</span>
              <p className="title">{t("introduction")}</p>
            </div>
            <div>
              <Form.Item
                label={t("permission")}
                name="role"
                initialValue={t(dataUser?.role?.name)}
              >
                <Select tabIndex={3} filterOption={false}>
                  {roleUser?.map((item: any) => (
                    <Select.Option value={item?.id} key={item?.id}>
                      {t(item?.name)}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                label={t("work-title")}
                name="workTitle"
                initialValue={dataUser?.workTitle}
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
                label={t("self-introduction")}
                name="summary"
                initialValue={dataUser?.summary?.introduction}
              >
                <TextArea rows={4} placeholder={t("detail-des")} tabIndex={5} />
              </Form.Item>
              <Form.Item label={t("website")} name="website">
                <Input placeholder={t("placeholder-web")} />
              </Form.Item>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="number">2</span>
              <p className="title">{t("work-experience")}</p>
            </div>
            <div>
              <Form.Item
                label={t("service-self")}
                name="category"
                initialValue={dataUser?.category?.id}
                rules={[
                  {
                    required: true,
                    message: t("error_messes.require"),
                  },
                ]}
              >
                <Select
                  tabIndex={3}
                  placeholder={t("placeholder.enter_category")}
                  showSearch
                  onSearch={(e: any) => {
                    setSearchCategory(e.toLowerCase());
                  }}
                  filterOption={false}
                >
                  {dataCategory?.map((item: any) => (
                    <Select.Option value={item?.id} key={item?.id}>
                      {t(item?.attributes?.name, { ns: "service" })}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                label={t("level")}
                name="level"
                initialValue={dataUser?.summary?.level}
                rules={[
                  {
                    required: true,
                    message: t("error_messes.require"),
                  },
                ]}
              >
                <Select
                  tabIndex={3}
                  filterOption={false}
                  placeholder={t("placeholder.level")}
                >
                  {levelUser?.map((item: any) => (
                    <Select.Option value={item?.name} key={item?.id}>
                      {t(item?.name)}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                label={t("skill")}
                name="skills"
                initialValue={dataUser?.skills?.map((item: any) => item.id)}
                rules={[
                  {
                    required: true,
                    message: t("error_messes.require"),
                  },
                ]}
              >
                <Select
                  mode="multiple"
                  tabIndex={3}
                  placeholder={t("placeholder.skill")}
                  showSearch
                  onSearch={(e: any) => {
                    setSearchSkill(e.toLowerCase());
                  }}
                  filterOption={false}
                >
                  {dataSkills?.map((item: any) => (
                    <Select.Option value={item?.id} key={item?.id}>
                      {t(item?.attributes?.name)}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="number">3</span>
              <p className="title">{t("cv-service")}</p>
            </div>
            <div>
              <Form.Item
                label={t("list-service")}
                name="services"
                initialValue={dataUser?.services?.map((item: any) => item.id)}
                rules={[
                  {
                    required: true,
                    message: t("error_messes.require"),
                  },
                ]}
              >
                <Select
                  mode="multiple"
                  tabIndex={3}
                  placeholder={t("placeholder.enter_category")}
                  showSearch
                  onSearch={(e: any) => {
                    setSearchCategory(e.toLowerCase());
                  }}
                  filterOption={false}
                >
                  {dataServices?.map((item: any) => (
                    <Select.Option value={item?.id} key={item?.id}>
                      {t(item?.attributes?.name)}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                label={t("can-do")}
                name="canDo"
                initialValue={dataUser?.summary?.timeWork}
                rules={[
                  {
                    required: true,
                    message: t("error_messes.require"),
                  },
                ]}
              >
                <Select tabIndex={3} filterOption={false}>
                  {timeWork?.map((item: any) => (
                    <Select.Option value={item?.name} key={item?.id}>
                      {t(item?.name)}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
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
    </div>
  );
};

export default UpdateProfileWork;
