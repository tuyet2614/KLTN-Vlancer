import { useTranslation } from "react-i18next";
import emailIcon from "@assets/images/icon/email.png";
import phoneIcon from "@assets/images/icon/phone_number.png";
import { Image } from "antd";

const ContactForm = () => {
  const { t } = useTranslation("user");
  return (
    <div>
      <p>{t("information")}</p>
      <div>
        <Image src={emailIcon} />
      </div>
      <div>
        <Image src={phoneIcon} />
      </div>
    </div>
  );
};

export default ContactForm;
