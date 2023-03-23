import { Select, Table } from "antd";
import { useTranslation } from "react-i18next";
import { formatNumberStr, stringToNumber } from "../../../../untils/string";
import { getMyUser } from "../../../auth/service/api";
import { getListPosts } from "../../../postJob/service/api";

interface Props {
  id: any;
}
const FindService = ({ id }: Props) => {
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
  console.log("data: ", data);

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
      title: t("Provider"),
      key: "Provider",
      dataIndex: "Provider",
      render: (_: any, record: any) => {
        return <p>{record?.attributes?.workType}</p>;
      },
    },

    {
      title: t("service-prize"),
      dataIndex: "service-prize",
      key: "service-prize",
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
      <div className="block-service">
        <Select>
          <Select.Option value="all" key="all">
            {t("all")}
          </Select.Option>
          <Select.Option value="show" key="show">
            {t("show")}
          </Select.Option>
          <Select.Option value="pause" key="pause">
            {t("pause")}
          </Select.Option>
        </Select>
      </div>
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

export default FindService;
