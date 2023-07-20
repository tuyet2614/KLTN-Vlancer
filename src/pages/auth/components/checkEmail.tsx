import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import sendEmailIcon from "@assets/images/icon/send-email.svg";
import { Image } from "antd";
import "../styles/login.scss";

export const CheckEmail = () => {
  const { t } = useTranslation("login");
  const location = useLocation();
  const { email } = location?.state;

  return (
    <div className="form-send-email">
      <div className="jumbotext">
        <h1 className="lead">{t("send-success")}</h1>
        <div className="info-send">
          <span>{t("send-email")}</span>
          <span>{email}</span>
        </div>
      </div>
      <div className="confirm-image">
        <Image src={sendEmailIcon} preview={false} />
      </div>
    </div>
  );
};
