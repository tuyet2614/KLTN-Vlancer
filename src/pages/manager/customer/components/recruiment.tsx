import { Tabs } from "antd";
import { useTranslation } from "react-i18next";
import { getMyUser } from "../../../auth/service/api";
import AssignManager from "./assignManager";
import GetProfileManager from "./getProfileManager";
import PostJobManager from "./postJobManager";
import ReviewManager from "./reviewManager";

interface Props {
  id: any;
}

const Recruiment = ({ id }: Props) => {
  const { t } = useTranslation("manager");

  const items = [
    {
      label: t("post"),
      key: "post",
      children: <PostJobManager id={id} />,
    },
    {
      label: t("get-profile"),
      key: "get-profile",
      children: <GetProfileManager id={id} />,
    },
    {
      label: t("assign"),
      key: "assign",
      children: <AssignManager id={id} />,
    },
    {
      label: t("review"),
      key: "review",
      children: <ReviewManager id={id} />,
    },
  ];
  return (
    <div>
      <Tabs items={items} />
    </div>
  );
};

export default Recruiment;
