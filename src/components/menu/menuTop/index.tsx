import logo from "@assets/images/icon/logo_vlancer.svg";
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
import { useUserStore } from "../../../store/user";

export default function DesktopMenu() {
  const { t } = useTranslation("menu");
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { user, setUser } = useUserStore();
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
      label: t("hired"),
      key: "hired",
      children: [
        {
          label: t("find-post"),
          key: "post",
          children: [
            {
              label: t("post-project"),
              key: "post-project",
              onClick: () => navigate(systemRoutes.POSTJOB_ROUTE),
            },

            {
              label: t("create-design-exam"),
              key: "create-design-exam",
              onClick: () => navigate(systemRoutes.CONTEST_ROUTE),
            },
          ],
        },
        {
          label: t("find-freelancer"),
          key: "find-freelancer",
          onClick: () => navigate(systemRoutes.FREELANCERS_ROUTE),
        },
        {
          label: t("find-project"),
          key: "find-project",
          onClick: () => navigate(systemRoutes.TOP_PROFILE_ROUTE),
        },
      ],
    },
    {
      label: t("find-job"),
      key: "find-job",
      children: [
        {
          label: t("find-job"),
          key: "find-job-children",
          children: [
            {
              label: t("online"),
              key: "online",
              onClick: () =>
                navigate(systemRoutes.Jobs_Online_ROUTE, {
                  state: { page: "all-jobs" },
                }),
            },
            {
              label: t("design-exam"),
              key: "design-exam",
              onClick: () => navigate(systemRoutes.LIST_CONTEST_ROUTE),
            },
            {
              label: t("full-time"),
              key: "full-time",
              onClick: () =>
                navigate(systemRoutes.Jobs_Online_ROUTE, {
                  state: { page: "fulltime" },
                }),
            },
          ],
        },
        {
          label: t("cv"),
          key: "cv",
          children: [
            {
              label: t("vlancer-cv"),
              key: "vlancer-cv",
              onClick: () =>
                navigate(systemRoutes.CREATE_PROFILE_WORK(user.id, "cv-work")),
            },
            {
              label: t("product"),
              key: "product",
              onClick: () => navigate(systemRoutes.TOP_PROFILE_ROUTE),
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="menuTop">
      <div className="menu-left">
        <div className="logo cursor-pointer" onClick={() => navigate("/")}>
          <Image src={logo} alt="logo" preview={false} />
        </div>
        <Menu
          mode="horizontal"
          items={items}
          className="min-w-[380px]"
          subMenuOpenDelay={0.2}
          defaultSelectedKeys={defaultSelectedKeys}
          selectedKeys={defaultSelectedKeys}
        />
      </div>

      <div className="menu-right">
        <div className="">
          <ChangeLanguageComponent />
        </div>
        {!isLogin ? (
          <div className="flex gap-4">
            <Button
              onClick={() => {
                navigate(systemRoutes.SIGN_UP_ROUTE);
              }}
            >
              Register
            </Button>
            <Button
              onClick={() => {
                navigate(systemRoutes.LOGIN_ROUTE);
              }}
            >
              Login
            </Button>
            <div>
              <Button
                type="primary"
                onClick={() => navigate(systemRoutes.POSTJOB_ROUTE)}
              >
                Post a job
              </Button>
            </div>
          </div>
        ) : (
          <MenuAuth />
        )}
      </div>
    </div>
  );
}
