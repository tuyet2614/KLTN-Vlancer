import { Select, Table } from "antd";
import { useTranslation } from "react-i18next";
import { formatNumberStr, stringToNumber } from "../../../../untils/string";
import { getMyUser } from "../../../auth/service/api";
import { getListPosts } from "../../../postJob/service/api";

interface Props {
  id: any;
}
const ReviewService = ({ id }: Props) => {
  const { t } = useTranslation("manager");
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

  const data: any = getListPosts(query);

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
      title: t("service-name"),
      key: "service-name",
      dataIndex: "service-name",
      render: (_: any, record: any) => {
        return (
          <p className="cursor-pointer text-sky-500">
            {record?.attributes?.title}
          </p>
        );
      },
    },

    {
      title: t("job-status"),
      dataIndex: "job-status",
      key: "job-status",
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
      title: t("review"),
      key: "review",
      dataIndex: "review",
      render: (_: any, record: any) => {
        return <p>{record?.attributes?.workType}</p>;
      },
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

export default ReviewService;
