import { DownOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps, Space } from "antd";
import { useTranslation } from "react-i18next";
import ExperienceItem from "./components/experienceItem";
import "./style/index.scss";
import authApi from "../../constant/http-common";
import { useEffect, useState } from "react";
import { getListProfiles } from "./services/api";

const TopProfile = () => {
  const { t } = useTranslation("service");
  const { data, isLoading } = getListProfiles();
  console.log("data profile: ", data);

  return (
    <div className="top-profile">
      <div className="menu-title">
        <p className="title">{t("top-cv")}</p>
      </div>

      <div className="container">
        {data?.map((item: any) => (
          <ExperienceItem items={item} />
        ))}
      </div>
    </div>
  );
};

export default TopProfile;
