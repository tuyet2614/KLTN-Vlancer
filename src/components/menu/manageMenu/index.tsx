import logo from "@assets/images/icon/Logo-vlance.svg";
import { Button, Image, Menu, MenuProps } from "antd";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { systemRoutes } from "../../../routes/index";
import { useLocation, useNavigate } from "react-router-dom";
import HireFreelancer from "../menuComponent/HireFreelancer";
import "./menuTop.scss";
import ChangeLanguageComponent from "../menuComponent/ChangeLanguage";
import { getAuthToken } from "../../../untils/token";
import MenuAuth from "../../base/components/MenuAuth";

export default function ManageMenu() {
  const { t } = useTranslation("menu");
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState([pathname]);
  const isLogin = getAuthToken();

  useEffect(() => {
    setDefaultSelectedKeys([
      pathname.split("/").length < 2 || pathname.split("/")[1] === ""
        ? "/"
        : "/" + pathname.split("/")[1],
    ]);
  }, [pathname]);

  const items: MenuProps["items"] = [
    {
      label: t("customer-manager"),
      key: "customer-manager",
      children: [
        {
          label: t("hired-manager"),
          key: "hired-manager",
        },
        {
          label: t("oder-manager"),
          key: "oder-manager",
        },
      ],
    },
    {
      label: t("freelancer-manager"),
      key: "freelancer-manager",
      children: [
        {
          label: t("job-manager"),
          key: "job-manager",
        },
        {
          label: t("service-manager"),
          key: "service-manager",
        },
      ],
    },
  ];

  return (
    <div className="menuTop">
      <div className="menu-left">
        <Menu
          mode="horizontal"
          items={items}
          className="min-w-[300px]"
          subMenuOpenDelay={0.2}
          defaultSelectedKeys={defaultSelectedKeys}
          selectedKeys={defaultSelectedKeys}
        />
      </div>

      <div className="menu-right">
        <div>
          <Button
            type="primary"
            onClick={() => navigate(systemRoutes.POSTJOB_ROUTE)}
          >
            {t("post")}
          </Button>
        </div>
      </div>
    </div>
  );
}
