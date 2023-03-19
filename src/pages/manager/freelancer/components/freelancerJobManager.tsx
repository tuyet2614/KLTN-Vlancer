import { Tabs } from "antd";
import { useTranslation } from "react-i18next";
import ChosenManager from "./chosenManager";
import ReviewJobManager from "./reviewJobManager";
import SaveJobFreelancer from "./saveJobFreelancer";
import SendProfileManager from "./sendProfileManager";

interface Props {
  id: any;
}

const FreelancerJobManager = ({ id }: Props) => {
  const { t } = useTranslation("manager");
  console.log("id: ", id);

  const items = [
    {
      label: t("save-work"),
      key: "save-work",
      children: <SaveJobFreelancer id={id} />,
    },
    {
      label: t("send-profile"),
      key: "send-profile",
      children: <SendProfileManager id={id} />,
    },
    {
      label: t("job-order"),
      key: "job-order",
      children: <ChosenManager id={id} />,
    },
    {
      label: t("review"),
      key: "review",
      children: <ReviewJobManager id={id} />,
    },
  ];
  return (
    <div>
      <Tabs items={items} />
    </div>
  );
};

export default FreelancerJobManager;
