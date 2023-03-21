import { Button, Image, InputNumber, Row } from "antd";
import { useTranslation } from "react-i18next";
import avatar from "@assets/images/icon/avatar.jpg";

const DetailContact = () => {
  const { t } = useTranslation("service");
  return (
    <div>
      <Row>
        <p>{t("prize-service")}</p>
        <p>5000000d</p>
      </Row>
      <Row>
        <p>{t("min-quanty")}</p>
        <InputNumber />
      </Row>
      <Row>
        <p>{t("unit")}</p>
        <p>San pham</p>
      </Row>
      <Row>
        <p>{t("deadline")}</p>
        <p>7 ngay</p>
      </Row>

      <div>
        <p>{t("attach")}</p>
      </div>
      <Button>{t("contact")}</Button>
      <div className="information-account">
        <div className="avatar">
          <Image src={avatar} className="avatar-img" preview={false} />
        </div>
        <div className="profile">
          <p>Ha Trinh</p>
        </div>
      </div>
    </div>
  );
};

export default DetailContact;
