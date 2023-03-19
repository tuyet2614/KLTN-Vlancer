import { Tabs } from "antd";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { getMyUser } from "../../auth/service/api";
import Recruiment from "./components/recruiment";

const CustomerManager = () => {
  const { t } = useTranslation("manager");
  const user: any = getMyUser();
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
      //   children: <UpdateProfileWork id={id} />,
    },
  ];
  return (
    <div className="pt-[70px]">
      <Tabs defaultActiveKey="self-information" items={items} />
    </div>
  );
};

export default CustomerManager;
