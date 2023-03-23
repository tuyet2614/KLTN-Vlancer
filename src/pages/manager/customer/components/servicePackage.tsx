import { Tabs } from "antd";
import { useTranslation } from "react-i18next";
import FindService from "./findService";
import "../../style/index.scss";
import OrderService from "./orderService";
import FinishOrderService from "./finishOrderService";
import ReviewService from "./reviewService";

interface Props {
  id: any;
}

const ServicePackage = ({ id }: Props) => {
  const { t } = useTranslation("manager");

  const items = [
    {
      label: t("find-service"),
      key: "find-service",
      children: <FindService id={id} />,
    },
    {
      label: t("package"),
      key: "package",
      children: <FindService id={id} />,
    },
    {
      label: t("order-job"),
      key: "order-job",
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
