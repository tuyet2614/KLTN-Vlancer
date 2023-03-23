import { Tabs } from "antd";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { getMyUser } from "../../auth/service/api";
import FreelancerJobManager from "./components/freelancerJobManager";
import ServicePackage from "./components/servicePackage";

const FreelancerManager = () => {
  const { t } = useTranslation("manager");
  const { id } = useParams();
  const items = [
    {
      label: t("worked"),
      key: "worked",
      children: <FreelancerJobManager id={id} />,
    },
    {
      label: t("service"),
      key: "service_freelancer",
      children: <ServicePackage id={id} />,
    },
  ];
  return (
    <div className="pt-[70px] pl-5">
      <Tabs defaultActiveKey="self-information" items={items} />
    </div>
  );
};

export default FreelancerManager;
