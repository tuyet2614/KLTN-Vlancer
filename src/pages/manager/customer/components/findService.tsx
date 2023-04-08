import { Select, Table } from "antd";
import { useTranslation } from "react-i18next";
import { formatNumberStr, stringToNumber } from "../../../../untils/string";
import { getMyUser } from "../../../auth/service/api";
import { getListContest, getListPosts } from "../../../postJob/service/api";

interface Props {
  id: any;
}
const FindService = ({ id }: Props) => {
  const { t } = useTranslation("manager");
  const query = {
    filters: {
      user: {
        id: { $eq: id },
      },
    },
  };

  const data: any = getListContest(query);

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
      title: t("test-name"),
      key: "test-name",
      dataIndex: "test-name",
      render: (_: any, record: any) => {
        console.log("recorrdd: ", record);
        return <p>{record?.attributes?.title}</p>;
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
            {formatNumberStr(record?.attributes?.prize)}
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
        dataSource={data?.data?.data}
        pagination={false}
        showSorterTooltip={false}
      />
    </div>
  );
};

export default FindService;
