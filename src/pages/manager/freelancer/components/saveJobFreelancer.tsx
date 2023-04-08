import { Table } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { systemRoutes } from "../../../../routes";
import { formatNumberStr, stringToNumber } from "../../../../untils/string";
import { getMyUser } from "../../../auth/service/api";
import { getListPosts } from "../../../postJob/service/api";
import { getListComments } from "../../services/api";

interface Props {
  id: any;
}
const SaveJobFreelancer = ({ id }: Props) => {
  const { t } = useTranslation("manager");
  const navigate = useNavigate();
  const query = {
    filters: {
      users_permissions_user: {
        id: { $eq: id },
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
        console.log("recoooo: ", record);

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
      title: t("total-profile"),
      dataIndex: "total-profile",
      key: "total-profile",
      render: (_: any, record: any) => {
        return (
          <p className="w-content-300 m-0">
            {
              Array(
                record?.attributes?.post?.data?.attributes?.recommends?.data
              ).length
            }
          </p>
        );
      },
    },
    {
      title: t("deadline-profile"),
      dataIndex: "deadline-profile",
      key: "deadline-profile",
      render: (_: any, record: any) => {
        return (
          <p className="w-content-300 m-0">
            {record?.attributes?.post?.data?.attributes?.deadline}
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
          y: 210,
        }}
        className="table-payment-history-content"
        columns={columns}
        dataSource={data}
        pagination={false}
        showSorterTooltip={false}
      />
    </div>
  );
};

export default SaveJobFreelancer;
