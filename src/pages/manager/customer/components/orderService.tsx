import { Select, Table } from "antd";
import { useTranslation } from "react-i18next";
import { formatNumberStr, stringToNumber } from "../../../../untils/string";
import { getMyUser } from "../../../auth/service/api";
import { getListContest, getListPosts } from "../../../postJob/service/api";

interface Props {
  id: any;
}
const OrderService = ({ id }: Props) => {
  const { t } = useTranslation("manager");
  const query = {
    filters: {
      user: {
        id: { $eq: id },
      },
      status: {
        $in: ["requested"],
      },
    },
  };

  const { data, isLoading } = getListContest(query);

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
        return <p>{record?.attributes?.title}</p>;
      },
    },
    {
      title: t("service-prize"),
      key: "service-prize",
      dataIndex: "service-prize",
      render: (_: any, record: any) => {
        return <p>{formatNumberStr(record?.attributes?.prize)}</p>;
      },
    },

    {
      title: t("job-status"),
      dataIndex: "job-status",
      key: "job-status",
      render: (_: any, record: any) => {
        return (
          <p className="w-content-300 m-0">{t(record?.attributes?.status)}</p>
        );
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
        loading={isLoading}
        showSorterTooltip={false}
      />
    </div>
  );
};

export default OrderService;
