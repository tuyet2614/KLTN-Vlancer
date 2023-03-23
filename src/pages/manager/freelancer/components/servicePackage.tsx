import { Tabs } from "antd";
import { useTranslation } from "react-i18next";
import "../../style/index.scss";
import OrderService from "./orderService";
import FinishOrderService from "./finishOrderService";
import ReviewService from "./reviewService";
import PostService from "./postService";
import TransactionPackage from "./transactionPackage";

interface Props {
  id: any;
}

const ServicePackage = ({ id }: Props) => {
  const { t } = useTranslation("manager");

  const items = [
    {
      label: t("post-service"),
      key: "post-service",
      children: <PostService id={id} />,
    },
    {
      label: t("package"),
      key: "package",
      children: <TransactionPackage id={id} />,
    },
    {
      label: t("receive"),
      key: "receive",
      children: <OrderService id={id} />,
    },
    {
      label: t("finish"),
      key: "finish",
      children: <FinishOrderService id={id} />,
    },
    {
      label: t("review"),
      key: "review",
      children: <ReviewService id={id} />,
    },
  ];
  return (
    <div>
      <Tabs items={items} />
    </div>
  );
};

export default ServicePackage;
