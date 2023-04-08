import { Button, Form, Image } from "antd";
import axios from "axios";
import dayjs from "dayjs";
import moment from "moment";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../../components/base/components/loading";
import { systemRoutes } from "../../../routes";
import { useUserStore } from "../../../store/user";
import { api_url, formatNumber } from "../../../untils/string";
import { getBasicTimeFromTimeStamp } from "../../../untils/time";
import { FormPost } from "../widgets";
import avatarDefault from "@assets/images/icon/avatar.jpg";
import authApi from "../../../constant/http-auth-common";
import Notification from "../../../components/base/components/Notification";
import TextArea from "antd/lib/input/TextArea";
import "../style/index.scss";
import ModalDetailAnswer from "./modalDetailAnswer";
import { log } from "console";

function DetailJobPage() {
  const [dataJob, setDataJobs] = useState<any>();
  const [dataRecmt, setDataRecmt] = useState<any>();
  const { user } = useUserStore();
  const { t } = useTranslation(["jobs-online", "contest"]);
  const location = useLocation();
  const { id, type } = location.state;
  const token = localStorage.getItem("auth-token");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [files, setFiles] = useState<any>();
  const [form] = Form.useForm();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [answerItem, setAnswerItem] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const handleFileChange = (event: any) => {
    setFiles(event.target.files);
  };

  const handleOpenModalEdit = () => {
    setIsOpenEdit(true);
  };

  const handlecloseModalEdit = () => {
    setIsOpenEdit(false);
  };

  const handleOpenModalComment = (item: any) => {
    setAnswerItem(item);
    setIsOpenModal(true);
  };
  const handlecloseModalComment = () => {
    setIsOpenModal(false);
  };

  const handleAddNewAnswer = (value: any) => {
    const formData = new FormData();
    setLoading(true);
    files && formData.append("files", files[0], files[0].name);

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
          file: imageId,
          users_permissions_users: user?.id,
          test: id,
        };
        authApi
          .post("/answers", { data: inputValue })
          .then((response: any) => {
            Notification.Success({ message: "Đăng bài dự thi thành công" });
            form.resetFields();
            setLoading(false);
          })
          .catch((error: any) => console.log("error post: ", error));
      })
      .catch((error) => {
        console.log("check errr: ", error);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    type === "post"
      ? axios.get(`/posts/${id}?populate=deep`).then((res) => {
          setDataRecmt(res?.data);
          setDataJobs(res?.data);
          setIsLoading(false);
        })
      : axios.get(`/tests/${id}?populate=deep`).then((res) => {
          setDataRecmt(res?.data);
          setDataJobs(res?.data);
          setIsLoading(false);
        });
  }, [loading]);
  const postId: any = dataJob?.data?.id;

  const avatar: string = dataJob?.data?.attributes?.users_permissions_user?.data
    ?.attributes?.avatar?.data?.attributes?.formats?.thumbnail.url
    ? api_url +
      dataJob?.data?.attributes?.users_permissions_user?.data?.attributes
        ?.avatar?.data?.attributes?.formats?.thumbnail.url
    : api_url +
      dataJob?.data?.attributes?.user?.data?.attributes?.avatar?.data
        ?.attributes?.formats?.thumbnail.url;

  const checkComment = () => {
    const check = dataJob?.data?.attributes?.recommends?.data?.findIndex(
      (item: any) =>
        item?.attributes?.users_permissions_user?.data.id === user?.id
    );
    return check;
  };

  const checkAnswer = () => {
    const check = dataJob?.data?.attributes?.answers?.data?.findIndex(
      (item: any) =>
        item?.attributes?.users_permissions_users?.data?.id === user?.id
    );
    return check;
  };

  const configsInfosProject = [
    {
      title: t("detail.Project_info"),
      detail: [
        {
          name: t("detail.Project_ID"),
          info: dataJob?.data?.id,
        },
        {
          name: t("detail.created_at"),
          info: getBasicTimeFromTimeStamp(dataJob?.data?.attributes?.createdAt),
        },
        {
          name: t("application_deadline"),
          info: getBasicTimeFromTimeStamp(dataJob?.data?.attributes?.deadline),
        },
        {
          name: t("detail.address"),
          info: dataJob?.data?.attributes?.addresses?.data[0]?.attributes?.city
            ? dataJob?.data?.attributes?.addresses?.data[0]?.attributes?.city
            : t("country"),
        },
        {
          name: t("detail.priceMax"),
          info: dataJob?.data?.attributes?.budgetMin
            ? `${formatNumber(dataJob?.data?.attributes?.budgetMin)}đ -
            ${formatNumber(dataJob?.data?.attributes?.budgetMax)}đ `
            : `${formatNumber(dataJob?.data?.attributes?.prize)}đ `,
        },

        {
          name: t("detail.workType"),
          info: t(dataJob?.data?.attributes?.workType),
        },
        {
          name: t("detail.payType"),
          info: t(dataJob?.data?.attributes?.payType),
        },
      ],
    },
  ];

  function renderBgCmt(id: string) {
    return (
      dataJob?.data?.attributes?.idRecommendRecieved == id && "bg-yellow-100"
    );
  }

  console.log("data job: ", dataJob);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="detail-job-contest">
          <div className="py-16 items-center flex flex-col bg-white  justify-center space-y-8">
            <div className="flex flex-wrap space-x-14 ">
              <div className="w-[510px] flex flex-col">
                <h1 className="text-4xl font-bold uppercase">
                  {dataJob?.data?.attributes?.title}
                </h1>
                <span>{dataJob?.data?.attributes?.description}</span>
                {type === "post" ? (
                  <div>
                    <span>{t("skill")}: </span>
                    {dataJob?.data?.attributes?.skills?.data?.map(
                      (item: any) => (
                        <span className="cursor-pointer text-xs font-semibold px-[40px] bg-[#f7f7f7] text-[#adadad] rounded-sm mr-2 uppercase leading-5">
                          {item?.attributes?.name}
                        </span>
                      )
                    )}
                  </div>
                ) : (
                  <div>
                    <span>{t("need-service", { ns: "contest" })}: </span>
                    <span className="text-[#08c] font-bold">
                      {dataJob?.data?.attributes?.field?.category}
                    </span>
                  </div>
                )}
              </div>
              <div className="bg-gray-50 shadow-lg p-6">
                <div className="space-y-6">
                  {configsInfosProject.map((i) => (
                    <div className="flex flex-col justify-start space-y-4">
                      <h2 className="font-bold">{i.title}</h2>
                      <div>
                        {i.detail.map((item) => (
                          <div>
                            <p className="inline-block w-44 text-gray-400">
                              {item.name}
                            </p>
                            <span>{item.info}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="flex flex-col justify-start space-y-4">
                    <h2 className="font-bold">{t("detail.users_info")}</h2>
                    <div className="flex gap-12 items-center">
                      <div>
                        <Image
                          src={
                            dataJob?.data?.attributes?.users_permissions_user
                              ?.data?.attributes?.avatar?.data ||
                            dataJob?.data?.attributes?.user?.data?.attributes
                              ?.avatar?.data
                              ? avatar
                              : avatarDefault
                          }
                          preview={false}
                          className="!w-[75px] !h-[75px] inline-block w-44 text-gray-400"
                        />
                      </div>
                      <span>
                        {dataJob?.data?.attributes?.users_permissions_user?.data
                          ?.attributes?.username ||
                          dataJob?.data?.attributes?.user?.data?.attributes
                            ?.username}
                      </span>
                    </div>
                    <div className="flex gap-12 items-center">
                      <span className="inline-block w-44 text-gray-400">
                        {t("from")}
                      </span>
                      <span>
                        {dataJob?.data?.attributes?.users_permissions_user?.data
                          ?.attributes?.city ||
                          dataJob?.data?.attributes?.user?.data?.attributes
                            ?.city}
                      </span>
                    </div>
                    <div className="flex gap-12 items-center">
                      <span className="inline-block w-44 text-gray-400">
                        {t("detail.invite_at")}
                      </span>
                      <span>
                        {getBasicTimeFromTimeStamp(
                          dataJob?.data?.attributes?.users_permissions_user
                            ?.data?.attributes?.createdAt
                        )}
                      </span>
                    </div>
                    <div className="flex gap-12 items-center">
                      <span className="inline-block w-44 text-gray-400">
                        {t("post")}
                      </span>
                      <span>
                        {dataJob?.data?.attributes?.users_permissions_user?.data
                          ?.attributes?.posts?.data?.length ||
                          dataJob?.data?.attributes?.user?.data?.attributes
                            ?.posts?.data?.length +
                            dataJob?.data?.attributes?.user?.data?.attributes
                              ?.tests?.data?.length}{" "}
                        {t("job")}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pt-[30px] align-center w-[100%]">
                  <Button className="w-[100%]" type="primary">
                    {t("contact")}
                  </Button>
                </div>
              </div>
            </div>
            {token &&
              user?.id !==
                dataJob?.data?.attributes?.users_permissions_user?.data?.id &&
              checkComment() === -1 && (
                <FormPost
                  postId={postId}
                  loading={loading}
                  setLoading={setLoading}
                />
              )}

            {type === "contest" &&
              token &&
              user?.id !== dataJob?.data?.attributes?.user?.data?.id &&
              checkAnswer() &&
              checkAnswer() === -1 && (
                <div className="bg-white w-[55%] border border-solid border-[#e6e6e6] shadow-[0_0_2px_1px_#e6e6e6] p-5">
                  <p className="font-bold text-xl">
                    {t("send", { ns: "contest" })}
                  </p>
                  <Form form={form} onFinish={handleAddNewAnswer}>
                    <Form.Item
                      name="files"
                      className="upload-file"
                      rules={[{ required: true, message: t("not_empty") }]}
                    >
                      <input type="file" onChange={handleFileChange} />
                    </Form.Item>

                    <Form.Item
                      name="description"
                      className="upload-file"
                      label={t("detail.des", { ns: "contest" })}
                    >
                      <TextArea
                        placeholder={t("detail.intro-contest", {
                          ns: "contest",
                        })}
                      />
                    </Form.Item>
                    <Button type="primary" htmlType="submit">
                      {t("detail.submit", { ns: "contest" })}
                    </Button>
                  </Form>
                </div>
              )}
          </div>
          <div className="py-16 items-center flex flex-col  justify-center space-y-8">
            <div className="space-y-5 w-[63%]">
              {dataRecmt?.data?.attributes?.recommends?.data?.map(
                (recmt: any) => {
                  console.log("recmt: ", recmt?.id);
                  return (
                    <div
                      key={recmt.id}
                      className={`w-[100%] bg-white shadow-lg ${renderBgCmt(
                        recmt.id
                      )} p-6 `}
                    >
                      <div className="flex justify-between">
                        <div className="w-[10%]">
                          <Image
                            src={
                              recmt?.attributes?.users_permissions_user?.data
                                ?.attributes?.avatar?.data?.attributes?.formats
                                ?.thumbnail.url
                                ? api_url +
                                  recmt?.attributes?.users_permissions_user
                                    ?.data?.attributes?.avatar?.data?.attributes
                                    ?.formats?.thumbnail.url
                                : avatarDefault
                            }
                            preview={false}
                            className="w-[100px] rounded-[50%] "
                          />
                        </div>
                        <div className="w-[40%] flex justify-between">
                          <div>
                            <h2 className="text-blue-500 ">
                              {
                                recmt?.attributes?.users_permissions_user?.data
                                  ?.attributes?.username
                              }
                            </h2>
                            <p className="leading-5 text-[#999] mb-[10px]">
                              {
                                recmt?.attributes?.users_permissions_user?.data
                                  ?.attributes?.workTitle
                              }
                            </p>
                            <div className="">
                              <span>{t("skill")}: </span>
                              {recmt?.attributes?.users_permissions_user?.data?.attributes?.skills?.data.map(
                                (skill: any) => (
                                  <div>
                                    <span className="cursor-pointer text-[#08c]">
                                      {skill?.attributes?.name}
                                    </span>
                                    <span>,</span>
                                    <span> </span>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                          <div>
                            {dataJob?.data?.attributes?.users_permissions_user
                              ?.data?.attributes?.email === user?.email && (
                              <Button
                                onClick={() =>
                                  navigate(systemRoutes.Detail_Cmt_ROUTE, {
                                    state: {
                                      id: recmt?.id,
                                    },
                                  })
                                }
                                type="primary"
                              >
                                {t("show-more")}
                              </Button>
                            )}
                            {/* {recmt.attributes?.users_permissions_user?.data
                              ?.id === user?.id && (
                              <Button
                                onClick={handleOpenModalEdit
                                }
                                type="primary"
                              >
                                {t("edit")}
                              </Button>
                            )} */}
                          </div>
                        </div>
                        <div className="">
                          <div>
                            <span className="w-32 inline-block">
                              {t("from")}
                            </span>
                            <span>
                              {
                                recmt?.attributes?.users_permissions_user?.data
                                  ?.attributes?.city
                              }
                            </span>
                          </div>
                          <div>
                            <span className="w-32 inline-block">
                              {t("detail.invite_at")}
                            </span>
                            <span>
                              {getBasicTimeFromTimeStamp(
                                recmt?.attributes?.users_permissions_user?.data
                                  ?.attributes?.updatedAt
                              )}
                            </span>
                          </div>
                          <div>
                            <span className="w-32 inline-block">
                              {t("job-work")}
                            </span>
                            <span>
                              {
                                recmt?.attributes?.users_permissions_user?.data
                                  ?.attributes?.projects?.data.length
                              }{" "}
                              {t("job")}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
              <div className="flex gap-5 list-answer">
                {type === "contest" &&
                  dataRecmt?.data?.attributes?.answers?.data.map(
                    (recmt: any) => {
                      console.log("recomment: ", recmt);

                      return (
                        <div
                          key={recmt.id}
                          className="answer-item mb-[20px] w-[25%] bg-white border border-solid border-[#e6e6e6] shadow-[0_0_2px_1px_#e6e6e6]"
                        >
                          <div
                            className={`!w-full cursor-pointer `}
                            onClick={() => handleOpenModalComment(recmt)}
                          >
                            <Image
                              src={
                                recmt?.attributes?.file?.data[0]?.attributes
                                  ?.formats?.thumbnail.url &&
                                api_url +
                                  recmt?.attributes?.file?.data[0]?.attributes
                                    ?.formats?.thumbnail.url
                              }
                              preview={false}
                              className="!w-full !h-[170px]"
                            />
                          </div>

                          <div
                            className={`w-full p-3 ${recmt?.attributes
                              ?.choosen && "bg-yellow-100"}`}
                          >
                            <h2 className="text-blue-500 ">
                              {
                                recmt?.attributes?.users_permissions_users?.data
                                  ?.attributes?.username
                              }
                            </h2>
                          </div>
                        </div>
                      );
                    }
                  )}
              </div>
              {isOpenModal && (
                <ModalDetailAnswer
                  isOpen={isOpenModal}
                  handleCancel={handlecloseModalComment}
                  data={answerItem}
                  postId={dataJob?.data?.attributes?.user?.data?.id}
                  setLoading={setLoading}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DetailJobPage;
