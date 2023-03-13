import { Col, Form, Layout, Menu, MenuProps, Tabs } from "antd";
import { Content } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { systemRoutes } from "../../../routes";
import ConfirmInformation from "./ConfirmInformation";
import InformationUpdate from "./InformmationUpdate";
import UpdateProfileExperience from "./UpdateProfileExperience";
import UpdateProfileWork from "./UpdateProfileWork";

const UpdateUser = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("update");
  const { id } = useParams();

  const items = [
    {
      label: t("self-information"),
      key: "self-information",
      children: <InformationUpdate id={id} />,
    },
    {
      label: t("cv"),
      key: "cv",
      children: <UpdateProfileWork id={id} />,
    },
    {
      label: t("cv-work"),
      key: "cv-work",
      children: <UpdateProfileExperience id={id} />,
    },
    {
      label: t("confirm"),
      key: "confirm",
      children: <ConfirmInformation id={id} />,
    },
  ];
  return (
    <Fragment>
      <Tabs defaultActiveKey="1" items={items} tabPosition={"left"} />
    </Fragment>
  );
};

export default UpdateUser;
