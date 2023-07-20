import { Button, Select, Table } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { systemRoutes } from "../../../../routes";
import { formatNumberStr, stringToNumber } from "../../../../untils/string";
import { getMyUser } from "../../../auth/service/api";
import { getListPosts } from "../../../postJob/service/api";
import { getListAnswers } from "../../services/api";

interface Props {
  id: any;
}
const PostService = ({ id }: Props) => {
  const { t } = useTranslation("manager");
  const navigate = useNavigate();
  const query = {
    filters: {
      users_permissions_users: {
        id: { $eq: id },
      },
    },
  };
  const handleDetaiContest = (contestId: any) => {
    navigate(systemRoutes.CONTEST_DETAIL_ROUTE(contestId));
  };

  const data: any = getListAnswers(query);

  const columns = [
    {
      title: t("stt"),
      dataIndex: "stt",
      width: 60,
      render: (_: any, __: any, index: number) => {
        return <p className="flex justify-center">{index + 1}</p>;
      },
    },
    {
      title: t("service-name"),
      key: "service-name",
      dataIndex: "service-name",
      render: (_: any, record: any) => {
        return (
          <p
            className="cursor-pointer text-sky-500"
            onClick={() =>
              handleDetaiContest(record?.attributes?.test?.data?.id)
            }
          >
            {record?.attributes?.test?.data?.attributes?.title}
          </p>
        );
      },
    },
    {
      title: t("Provider"),
      key: "Provider",
      dataIndex: "Provider",
      render: (_: any, record: any) => {
        return <p>{t("contest")}</p>;
      },
    },

    {
      title: t("service-prize"),
      dataIndex: "service-prize",
      key: "service-prize",
      render: (_: any, record: any) => {
        return (
          <p className="w-content-300 m-0">
            {formatNumberStr(record?.attributes?.test?.data?.attributes?.prize)}
          </p>
        );
      },
    },

    {
      title: t("package-status"),
      dataIndex: "package-status",
      key: "package-status",
      render: (_: any, record: any) => {
        return (
          <p className="w-content-200 m-0">
            {record?.attributes?.choosen ? t("send-test") : t("win")}
          </p>
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
        dataSource={data?.data}
        pagination={false}
        showSorterTooltip={false}
      />
    </div>
  );
};

export default PostService;
