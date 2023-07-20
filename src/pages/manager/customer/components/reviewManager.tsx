import { Button, Form, Input, Modal, Table } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { systemRoutes } from "../../../../routes";
import { formatNumberStr, stringToNumber } from "../../../../untils/string";
import { getMyUser } from "../../../auth/service/api";
import { getListPosts } from "../../../postJob/service/api";
import { useState } from "react";
import { Rate } from "antd";
import authApi from "../../../../constant/http-auth-common";
import "../../style/index.scss";
import TextArea from "antd/lib/input/TextArea";

interface Props {
  id: any;
}
const ReviewManager = ({ id }: Props) => {
  const { t } = useTranslation("manager");
  const navigate = useNavigate();
  const [showDetail, setShowDetail] = useState(false);
  const [openReview, setOpenReview] = useState(false);
  const [current, setCurrent] = useState<any>();
  const [review, setReview] = useState<any>();
  const [value, setValue] = useState(0);
  const [form] = Form.useForm();
  const query = {
    filters: {
      users_permissions_user: {
        id: { $eq: id },
      },
      status: {
        $in: ["viewed"],
      },
    },
  };

  const handleOpenShowDetail = (item: any) => {
    setShowDetail(true);
    setCurrent(item);
  };
  const handleOpenReview = (item: any) => {
    setOpenReview(true);
    setReview(item);
  };
  const handleCloseShowDetail = () => {
    setShowDetail(false);
  };
  const handleCloseReview = () => {
    setOpenReview(false);
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

  const submitReview = (value: any) => {
    const data = { ...value };
    authApi
      .put(`/posts/${review?.id}`, { data })
      .then((ress: any) => handleCloseReview())
      .catch((errrr: any) => console.log("errrr: ", errrr));
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
      title: t("review"),
      dataIndex: "review",
      key: "review",
      render: (_: any, record: any) => {
        console.log("record review: ", record);
        return record?.attributes?.star ? (
          // <p className="w-content-200 m-0">{t(record?.attributes?.star)}</p>
          <Button
            className="!bg-[#F5C330]"
            onClick={() => handleOpenShowDetail(record)}
          >
            {t("show-more")}
          </Button>
        ) : (
          <Button
            className="!bg-[#50c77b] !text-white"
            onClick={() => handleOpenReview(record)}
          >
            {t("review")}
          </Button>
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
        loading={isLoading}
        showSorterTooltip={false}
      />
      <Modal
        open={showDetail}
        onCancel={handleCloseShowDetail}
        title={t("show-comment")}
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

      <Modal
        open={openReview}
        onCancel={handleCloseReview}
        title={t("review")}
        footer={false}
        className="modal-confirm-request"
      >
        <Form
          className="flex flex-col gap-5"
          form={form}
          onFinish={submitReview}
          layout="horizontal"
        >
          <Form.Item name={"star"} label={t("star")}>
            <Rate allowHalf value={value} onChange={setValue} />
          </Form.Item>
          <Form.Item name={"content"} label={t("content")}>
            <TextArea placeholder={t("enter-review")} rows={4} />
          </Form.Item>
          <div className="flex flex-end gap-5">
            <Button htmlType="submit" className="btn btn-ok" type="primary">
              {t("ok")}
            </Button>
            <Button onClick={handleCloseReview} className="btn btn-cancel">
              {t("canc")}
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default ReviewManager;
