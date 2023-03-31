import { Tabs } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { getMyUser } from "../../auth/service/api";
import Recruiment from "./components/recruiment";
import ServicePackage from "./components/servicePackage";

const CustomerManager = () => {
  const { t } = useTranslation("manager");
  const { id } = useParams();
  const items = [
    {
      label: t("recruitment"),
      key: "recruitment",
      children: <Recruiment id={id} />,
    },
    {
      label: t("service-order"),
      key: "service-order",
      children: <ServicePackage id={id} />,
    },
  ];
  return (
    <div className="pt-[70px] customer-manager pl-5">
      <Tabs defaultActiveKey="self-information" items={items} />
    </div>
  );
};

export default CustomerManager;
