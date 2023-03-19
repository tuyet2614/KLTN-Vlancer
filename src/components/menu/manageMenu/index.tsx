import logo from "@assets/images/icon/Logo-vlance.svg";
import { Button, Image, Menu, MenuProps } from "antd";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { systemRoutes } from "../../../routes/index";
import { useLocation, useNavigate } from "react-router-dom";
import "./index.scss";

interface Props {
  user: any;
}

export default function ManageMenu({ user }: Props) {
  const { t } = useTranslation("menu");
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState([pathname]);

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
      onClick: () => navigate(systemRoutes.CUSTOMER_MANAGER_ROUTE(user.id)),
    },
    {
      label: t("freelancer-manager"),
      key: "freelancer-manager",
      onClick: () => navigate(systemRoutes.FREELANCER_MANAGER_ROUTE(user.id)),
    },
  ];

  return (
    <div className="MenuManager">
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
