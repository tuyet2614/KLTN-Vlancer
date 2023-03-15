import { Tabs } from "antd";
import { useTranslation } from "react-i18next";

const CustomerManager = () => {
  const { t } = useTranslation("manager");
  const items = [
    {
      label: t("recruitment"),
      key: "recruitment",
      //   children: <InformationUpdate id={id} />,
    },
    {
      label: t("service-order"),
      key: "service-order",
      //   children: <UpdateProfileWork id={id} />,
    },
  ];
  return (
    <div>
      <Tabs defaultActiveKey="self-information" items={items} />
    </div>
  );
};

export default CustomerManager;
