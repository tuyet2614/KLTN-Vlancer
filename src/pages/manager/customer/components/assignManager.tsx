import { Table, Progress, Button, Modal } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { systemRoutes } from "../../../../routes";
import { formatNumberStr, stringToNumber } from "../../../../untils/string";
import { getMyUser } from "../../../auth/service/api";
import { getListPosts } from "../../../postJob/service/api";
import { useState } from "react";
import authApi from "../../../../constant/http-auth-common";
import Notification from "../../../../components/base/components/Notification";
import axios from "axios";
import { getDetailUser, updateUser } from "../../../users/services/api";
import { error } from "console";

interface Props {
  id: any;
}
const AssignManager = ({ id }: Props) => {
  const { t } = useTranslation("manager");
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [currentPost, setCurrentPost] = useState<any>();
  const [currentConfirm, setCurrenConfirm] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [confirmStatus, setconfirmStatus] = useState("");
  const query = {
    filters: {
      users_permissions_user: {
        id: { $eq: id },
      },
      status: {
        $in: ["pendind"],
      },
    },
  };
  const { data: dataUser } = getDetailUser(id);

  const handleDetailPost = (id: any) => {
    navigate(systemRoutes.Detail_Job_ROUTE, {
      state: {
        id: id,
        type: "post",
      },
    });
  };

  const handleOpenShowMore = (post: any) => {
    setCurrentPost(post);
    setShowMore(true);
  };
  const handleOpenconfirm = (post: any) => {
    setCurrenConfirm(post);
    setConfirm(true);
  };
  const handleCloseShowMore = () => {
    setShowMore(false);
  };
  const handleCloseConfirm = () => {
    setConfirm(false);
  };

  const handleConfirmPost = () => {
    setLoading(true);
    const data = {
      status: "viewed",
    };
    authApi
      .put(`/posts/${currentConfirm.id}`, { data })
      .then((respon: any) => {
        let answers: any = [];
        const updateComment = {
          status: "viewed-job",
        };

        dataUser?.answers?.map((item: any) => {
          answers.push(item.id);
        });
        answers.push(respon?.data?.data?.attributes?.idRecommendRecieved);
        const dataProfile = { answers };
        updateUser(respon?.data?.data?.attributes, dataProfile);
        axios.put(
          `/recommends/${respon?.data?.data?.attributes?.idRecommendRecieved}`,
          {
            data: updateComment,
          }
        );
        handleCloseConfirm();
        setLoading(false);
        Notification.Success({ message: t("success-confirm") });
      })
      .catch((error: any) => {
        Notification.Error({ message: t("error-confirm") });
        console.log("eererere: ", error);
      });
  };

  const handleRejectPost = () => {
    const data = {
      confirmStatus: confirmStatus,
    };
    authApi
      .put(`/posts/${id}`, { data })
      .then((respon: any) => {
        handleCloseConfirm();
        Notification.Success({ message: t("success-reject") });
      })
      .catch((error: any) =>
        Notification.Error({ message: t("error-reject") })
      );
  };

  const { data, isLoading } = getListPosts(query, loading);

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
      title: t("job-name"),
      key: "job-name",
      dataIndex: "job-name",
      render: (_: any, record: any) => {
        return (
          <p
            onClick={() => handleDetailPost(record?.id)}
            className="cursor-pointer text-sky-500"
          >
            {record?.attributes?.title}
          </p>
        );
      },
    },
    {
      title: t("type-job"),
      key: "type-job",
      dataIndex: "type-job",
      render: (_: any, record: any) => {
        return <p>{record?.attributes?.workType}</p>;
      },
    },

    {
      title: t("prize"),
      dataIndex: "prize",
      key: "prize",
      render: (_: any, record: any) => {
        return (
          <p className="w-content-300 m-0">
            {formatNumberStr(record?.attributes?.budgetMin)} -{" "}
            {formatNumberStr(record?.attributes?.budgetMax)}
          </p>
        );
      },
    },

    {
      title: t("status"),
      dataIndex: "status",
      key: "status",
      render: (_: any, record: any) => {
        return (
          <p className="w-content-200 m-0">{t(record?.attributes?.status)}</p>
        );
      },
      width: 250,
    },
    {
      title: t("process"),
      dataIndex: "process",
      key: "process",
      render: (_: any, record: any) => {
        return (
          <div className="flex gap-3">
            <div className="w-[250px] flex items-center">
              <Progress
                percent={
                  record?.attributes?.progess ? record?.attributes?.progess : 0
                }
                size="small"
              />
            </div>
            {record?.attributes?.progess === 100 ? (
              <Button
                className="!bg-[#2db964] !text-white"
                onClick={() => handleOpenconfirm(record)}
              >
                {t("confirm")}
              </Button>
            ) : (
              <Button
                className="!bg-[#F5C330]"
                onClick={() => handleOpenShowMore(record)}
              >
                {t("show-more")}
              </Button>
            )}
          </div>
        );
      },
      width: 350,
    },
  ];
  return (
    <div>
      <Table
        scroll={{
          x: 1100,
          y: 210,
        }}
        className="table-payment-history-content"
        columns={columns}
        dataSource={data?.data}
        pagination={false}
        loading={isLoading}
        showSorterTooltip={false}
      />
      {showMore && (
        <Modal
          open={showMore}
          onCancel={handleCloseShowMore}
          title={t("show-detail")}
        >
          <div>
            <span>{t("status")}: </span>
            <Progress
              percent={
                currentPost?.attributes?.progess
                  ? currentPost?.attributes?.progess
                  : 0
              }
              size="small"
            />
          </div>
          <div>
            <span className="font-semibold">Công việc hoàn thành: </span>
            <span>{currentPost?.attributes?.descriptionStatus}</span>
          </div>
        </Modal>
      )}

      {confirm && (
        <Modal
          className="modal-confirm-request"
          open={confirm}
          onCancel={handleCloseConfirm}
          title={t("show-detail")}
          footer={[
            <Button onClick={handleCloseConfirm} className="btn btn-cancel">
              {t("Cancel")}
            </Button>,
            <Button onClick={handleRejectPost} className="btn btn-reject">
              {t("reject")}
            </Button>,
            <Button onClick={handleConfirmPost} className="btn btn-ok">
              {t("ok")}
            </Button>,
          ]}
        >
          <div>
            <span>{t("status")}: </span>
            <Progress
              percent={
                currentConfirm?.attributes?.progess
                  ? currentConfirm?.attributes?.progess
                  : 0
              }
              size="small"
            />
          </div>
          <div>
            <span>Công việc hoàn thành: </span>
            <b>{currentConfirm?.attributes?.descriptionStatus}</b>
          </div>
          <div>
            <span>{t("link")}:</span>
            <a href={currentConfirm?.attributes?.websites}>
              {currentConfirm?.attributes?.websites}
            </a>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default AssignManager;
