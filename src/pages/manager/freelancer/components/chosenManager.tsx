import { Button, Form, Input, InputNumber, Modal, Progress, Table } from "antd";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { formatNumberStr, stringToNumber } from "../../../../untils/string";
import { getMyUser } from "../../../auth/service/api";
import { getListPosts } from "../../../postJob/service/api";
import { getListComments } from "../../services/api";
import authApi from "../../../../constant/http-auth-common";
import Notification from "../../../../components/base/components/Notification";
import { useNavigate } from "react-router-dom";
import { systemRoutes } from "../../../../routes";

interface Props {
  id: any;
}

const ChosenManager = ({ id }: Props) => {
  const { t } = useTranslation("manager");
  const [isOpen, setIsOpen] = useState(false);
  const [form] = Form.useForm();
  const [idPost, setIdPost] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = (value: any) => {
    setIsOpen(true);
    setIdPost(value);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleConfirmPost = (values: any) => {
    const data = {
      ...values,
    };
    authApi
      .put(`/posts/${idPost}`, { data })
      .then((respon: any) => {
        handleCloseModal();
        Notification.Success({ message: t("success-confirm") });
        setLoading(true);
      })
      .catch((error: any) => {
        Notification.Error({ message: t("error-confirm") });
        setLoading(true);
      });
  };

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

  const handleDetailPost = (id: any) => {
    navigate(systemRoutes.Detail_Job_ROUTE, {
      state: {
        id: id,
        type: "post",
      },
    });
  };

  useEffect(() => {
    setIsLoading(true);
    authApi
      .get("/recommends?populate=*", { params: query })
      .then((response) => {
        setData(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [loading]);

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
            className="w-content-300 m-0 cursor-pointer"
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
        return (
          <p className="w-content-300 m-0">
            {record?.attributes?.post?.data?.attributes?.workType}
          </p>
        );
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
          <Progress
            percent={
              record?.attributes?.post?.data?.attributes?.progess
                ? record?.attributes?.post?.data?.attributes?.progess
                : 0
            }
            size="small"
          />
        );
      },
      width: 250,
    },
    {
      dataIndex: "update",
      key: "update",
      render: (_: any, record: any) => {
        return (
          <Button
            type="primary"
            className="w-content-200 m-0"
            onClick={() => handleOpenModal(record?.attributes?.post?.data?.id)}
          >
            {t("update-btn")}
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
        dataSource={data}
        pagination={false}
        loading={isLoading}
        showSorterTooltip={false}
      />
      <Modal
        open={isOpen}
        title={t("update-progess")}
        footer={false}
        onCancel={handleCloseModal}
      >
        <Form form={form} onFinish={handleConfirmPost}>
          <Form.Item name="progess" label={t("progess")} className="w-full">
            <InputNumber placeholder={t("percent")} className="!w-[50%]" />
          </Form.Item>
          <Form.Item name="workDone" label={t("work-done")}>
            <Input placeholder={t("work-placeholder")} className="w-full" />
          </Form.Item>
          <div className="flex justify-end gap-7">
            <Button htmlType="submit" className="btn" type="primary">
              {t("confirm")}
            </Button>
            <Button onClick={handleCloseModal} className="btn btn-cancel">
              {t("Cancel")}
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default ChosenManager;
