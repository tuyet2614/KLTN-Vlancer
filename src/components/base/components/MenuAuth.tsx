import { Dropdown, Image, MenuProps } from "antd";
import BELL_IMG from "@assets/images/icon/bell.svg";
import CHAT_IMG from "@assets/images/icon/chat.svg";
import DEFAULT_IMG from "@assets/images/icon/avatar.jpg";
import "./styles.scss";
import { useTranslation } from "react-i18next";
import { getMyUser } from "../../../pages/auth/service/api";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { systemRoutes } from "../../../routes";
import { useLogout } from "../../service/api";
import { api_url } from "../../../untils/string";
import { useUserStore } from "../../../store/user";

const MenuAuth = () => {
  const { t } = useTranslation("auth");
  const { user, setUser } = useUserStore();

  const { onLogout } = useLogout();

  const userData: any = getMyUser();

  const avatar: string = api_url + userData?.avatar?.formats?.thumbnail.url;

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link to={`${systemRoutes.USERS_ROUTE}/me`}>
          {<p className="my-2">{t("profile")}</p>}
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link to={`${systemRoutes.UPDATE_USER_ROUTE(user.id)}`}>
          {<p className="my-2">{t("edit-profile")}</p>}
        </Link>
      ),
    },
    {
      key: "3",
      label: <p className="my-2">{t("setting-notification")}</p>,
    },
    {
      key: "4",
      label: (
        <p onClick={onLogout} className="my-2">
          {t("logout")}
        </p>
      ),
    },
  ];
  return (
    <div className="menu-auth">
      <Image
        src={BELL_IMG}
        alt="bell_img"
        preview={false}
        className="cursor-pointer"
      />
      <Image
        src={CHAT_IMG}
        alt="chat_img"
        preview={false}
        className="cursor-pointer"
      />
      <Dropdown menu={{ items }} placement="bottom" trigger={["click"]}>
        <div className="account-menu">
          <Image
            src={userData?.avatar ? avatar : DEFAULT_IMG}
            alt="avatar_img"
            preview={false}
            className="cursor-pointer avatar-img"
          />

          <div>
            <div className="flex gap-2">
              <h1>{userData?.username}</h1>
              <span>id. {userData?.id}</span>
            </div>

            <div className="flex gap-2">
              <span>{t("gift")}</span>
              <span>credit</span>
            </div>
          </div>
        </div>
      </Dropdown>
    </div>
  );
};

export default MenuAuth;
