import { Table } from "antd";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { systemRoutes } from "../../../../routes";
import { formatNumberStr, stringToNumber } from "../../../../untils/string";
import { getMyUser } from "../../../auth/service/api";
import { getListPosts } from "../../../postJob/service/api";

interface Props {
  id: any;
}
const PostJobManager = ({ id }: Props) => {
  const { t } = useTranslation("manager");
  const navigate = useNavigate();
  const query = {
    filters: {
      users_permissions_user: {
        id: { $eq: id },
      },
      status: {
        $in: ["draft"],
      },
    },
  };

  const handleDetailPost = (id: any) => {
    navigate(systemRoutes.Detail_Job_ROUTE, {
      state: {
        id: id,
        type: "post",
      },
    });
  };

  const { data, isLoading } = getListPosts(query);

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
            className="cursor-pointer"
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
  ];
  return (
    <div>
      <Table
        scroll={{
          x: 1100,
          y: 600,
        }}
        className="table-payment-history-content"
        columns={columns}
        dataSource={data?.data}
        pagination={false}
        loading={isLoading}
        showSorterTooltip={false}
      />
    </div>
  );
};

export default PostJobManager;
