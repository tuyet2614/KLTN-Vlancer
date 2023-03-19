import { Tabs } from "antd";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { getMyUser } from "../../auth/service/api";
import FreelancerJobManager from "./components/freelancerJobManager";

const FreelancerManager = () => {
  const { t } = useTranslation("manager");
  const user: any = getMyUser();
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
      //   children: <UpdateProfileWork id={id} />,
    },
  ];
  return (
    <div className="pt-[70px]">
      <Tabs defaultActiveKey="self-information" items={items} />
    </div>
  );
};

export default FreelancerManager;
