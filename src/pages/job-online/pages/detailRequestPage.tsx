import { Button, Form, Image, Modal } from "antd";
import axios from "axios";
import dayjs from "dayjs";
import moment from "moment";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Loading from "../../../components/base/components/loading";
import { systemRoutes } from "../../../routes";
import { useUserStore } from "../../../store/user";
import { api_url, formatNumber } from "../../../untils/string";
import { getBasicTimeFromTimeStamp } from "../../../untils/time";
import { FormPost } from "../widgets";
import avatarDefault from "@assets/images/icon/avatar.jpg";
import TextArea from "antd/lib/input/TextArea";
import "../style/index.scss";
import authApi from "../../../constant/http-auth-common";
import Notification from "../../../components/base/components/Notification";

function DetailRequestPage() {
  const [dataJob, setDataJobs] = useState<any>();
  const [dataRecmt, setDataRecmt] = useState<any>();
  const { user } = useUserStore();
  const { t } = useTranslation(["jobs-online", "contest"]);
  const { id, type } = useParams();
  const token = localStorage.getItem("auth-token");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const avatar: string = dataJob?.data?.attributes?.users_permissions_user?.data
    ?.attributes?.avatar?.data?.attributes?.formats?.thumbnail.url
    ? api_url +
      dataJob?.data?.attributes?.users_permissions_user?.data?.attributes
        ?.avatar?.data?.attributes?.formats?.thumbnail.url
    : api_url +
      dataJob?.data?.attributes?.user?.data?.attributes?.avatar?.data
        ?.attributes?.formats?.thumbnail.url;

  useEffect(() => {
    type === "post"
      ? axios.get(`/posts/${id}?populate=deep`).then((res) => {
          setDataRecmt(res.data);
          setDataJobs(res.data);
        })
      : axios.get(`/tests/${id}?populate=deep`).then((res) => {
          setDataRecmt(res.data);
          setDataJobs(res.data);
        });
  }, [loading]);

  const handleOpenModalConfirm = () => {
    setIsOpenModal(true);
  };
  const handlecloseModalComfirm = () => {
    setIsOpenModal(false);
  };

  const handleConfirmPost = () => {
    setLoading(true);
    const data = {
      status: "requested",
    };
    type === "post"
      ? authApi
          .put(`/posts/${id}`, { data })
          .then((respon: any) => {
            handlecloseModalComfirm();
            setLoading(false);
            Notification.Success({ message: t("success-confirm") });
          })
          .catch((error: any) =>
            Notification.Error({ message: t("error-confirm") })
          )
      : authApi
          .put(`/tests/${id}`, { data })
          .then((respon: any) => {
            handlecloseModalComfirm();
            setLoading(false);
            Notification.Success({ message: t("success-confirm") });
          })
          .catch((error: any) =>
            Notification.Error({ message: t("error-confirm") })
          );
  };

  const handleRejectPost = () => {
    const data = {
      status: "reject",
    };
    authApi
      .put(`/posts/${id}`, { data })
      .then((respon: any) => {
        handlecloseModalComfirm();
        Notification.Success({ message: t("success-reject") });
      })
      .catch((error: any) =>
        Notification.Error({ message: t("error-reject") })
      );
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

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="detail-request-job-contest">
          <div className="py-16 items-center flex flex-col bg-white  justify-center space-y-8">
            <div className="flex flex-wrap space-x-14 ">
              <div className="w-[510px] flex flex-col">
                <h1 className="text-4xl font-bold uppercase">
                  {dataJob?.data?.attributes?.title}
                </h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: dataJob?.data?.attributes?.description?.replaceAll(
                      /\n/g,
                      "<br>"
                    ),
                  }}
                />

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
                    <span>{t("detail.need-service", { ns: "contest" })}: </span>
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
                {dataJob?.data?.attributes?.status === "draft" && (
                  <div className="pt-[30px] align-center w-[100%]">
                    <Button
                      className="w-[100%]"
                      type="primary"
                      onClick={handleOpenModalConfirm}
                    >
                      {t("confirm")}
                    </Button>
                  </div>
                )}
              </div>
            </div>

            <Modal
              open={isOpenModal}
              onCancel={handlecloseModalComfirm}
              className="modal-confirm-request"
              title={t("modal-confirm")}
              footer={[
                <Button
                  onClick={handlecloseModalComfirm}
                  className="btn btn-cancel"
                >
                  {t("cancel")}
                </Button>,
                <Button onClick={handleRejectPost} className="btn btn-reject">
                  {t("reject")}
                </Button>,
                <Button onClick={handleConfirmPost} className="btn btn-ok">
                  {t("ok")}
                </Button>,
              ]}
            >
              <div>{t("sure")}</div>
            </Modal>
          </div>
        </div>
      )}
    </>
  );
}

export default DetailRequestPage;
