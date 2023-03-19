import { Table } from "antd";
import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { formatNumberStr, stringToNumber } from "../../../../untils/string";
import { getMyUser } from "../../../auth/service/api";
import { getListPosts } from "../../../postJob/service/api";
import { getListComments } from "../../services/api";

interface Props {
  id: any;
}

const ChosenManager = ({ id }: Props) => {
  const { t } = useTranslation("manager");
  console.log("id: ", id);

  const query = {
    filters: {
      users_permissions_user: {
        id: { $eq: id },
      },
      status: {
        $eq: "chosen",
      },
    },
  };

  const data: any = getListComments(query);

  console.log("comment: ", data);

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
        return <p>{record?.attributes?.post?.data?.attributes?.title}</p>;
      },
    },
    {
      title: t("type-job"),
      key: "type-job",
      dataIndex: "type-job",
      render: (_: any, record: any) => {
        return <p>{record?.attributes?.post?.data?.attributes?.workType}</p>;
      },
    },

    {
      title: t("salary"),
      dataIndex: "salary",
      key: "salary",
      render: (_: any, record: any) => {
        return (
          <p className="w-content-300 m-0">
            {formatNumberStr(record?.attributes?.price)}
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

export default ChosenManager;
