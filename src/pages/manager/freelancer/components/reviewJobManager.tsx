import { Button, Modal, Rate, Table } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { systemRoutes } from "../../../../routes";
import { formatNumberStr, stringToNumber } from "../../../../untils/string";
import { getMyUser } from "../../../auth/service/api";
import { getListPosts } from "../../../postJob/service/api";
import { getListComments } from "../../services/api";
import { useState } from "react";

interface Props {
  id: any;
}
const ReviewJobManager = ({ id }: Props) => {
  const { t } = useTranslation("manager");
  const navigate = useNavigate();
  const [showDetail, setShowDetail] = useState(false);
  const [current, setCurrent] = useState<any>();
  const query = {
    filters: {
      users_permissions_user: {
        id: { $eq: id },
      },
      status: {
        $in: ["viewed-job"],
      },
    },
  };

  const { data, isLoading } = getListComments(query);
  const handleDetailPost = (id: any) => {
    navigate(systemRoutes.Detail_Job_ROUTE, {
      state: {
        id: id,
        type: "post",
      },
    });
  };

  const handleOpenShowDetail = (item: any) => {
    setShowDetail(true);
    setCurrent(item);
  };
  const handleCloseShowDetail = () => {
    setShowDetail(false);
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
      title: t("job-name"),
      key: "job-name",
      dataIndex: "job-name",
      render: (_: any, record: any) => {
        return (
          <p
            onClick={() => handleDetailPost(record?.attributes?.post?.data?.id)}
            className="cursor-pointer"
          >
            {record?.attributes?.post?.data?.attributes?.title}
          </p>
        );
      },
    },
    {
      title: t("type-job"),
      key: "type-job",
      dataIndex: "type-job",
      render: (_: any, record: any) => {
        return <p>{t(record?.attributes?.post?.data?.attributes?.workType)}</p>;
      },
    },

    {
      title: t("prize"),
      dataIndex: "prize",
      key: "prize",
      render: (_: any, record: any) => {
        return (
          <p className="w-content-300 m-0">
            {formatNumberStr(
              record?.attributes?.post?.data?.attributes?.budgetMin
            )}{" "}
            -{" "}
            {formatNumberStr(
              record?.attributes?.post?.data?.attributes?.budgetMax
            )}
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
      title: t("review"),
      dataIndex: "review",
      key: "review",
      render: (_: any, record: any) => {
        console.log("check review: ", record);
        return record?.attributes?.post?.data?.attributes?.star ? (
          <p
            className="w-content-200 m-0 cursor-pointer !text-[#1A0DAB]"
            onClick={() => handleOpenShowDetail(record?.attributes?.post?.data)}
          >
            {t(record?.attributes?.status)}
          </p>
        ) : (
          <p>{t("wait-review")}</p>
        );
      },
      width: 250,
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
        dataSource={data}
        pagination={false}
        loading={isLoading}
        showSorterTooltip={false}
      />
      <Modal
        open={showDetail}
        onCancel={handleCloseShowDetail}
        title={t("show-comment")}
        onOk={handleCloseShowDetail}
      >
        <div className="flex gap-3">
          <span>{t("star")}: </span>
          <Rate allowHalf disabled defaultValue={current?.attributes?.star} />
        </div>
        <div className="flex gap-3">
          <span>{t("content")}: </span>
          <span>{current?.attributes?.content}</span>
        </div>
      </Modal>
    </div>
  );
};

export default ReviewJobManager;
