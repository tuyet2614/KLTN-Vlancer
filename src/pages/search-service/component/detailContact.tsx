import { Button, Image, InputNumber, Row } from "antd";
import { useTranslation } from "react-i18next";
import avatar from "@assets/images/icon/avatar.jpg";

const DetailContact = () => {
  const { t } = useTranslation("service");
  return (
    <div className="detail-contact">
      <div className="service-buy-detail">
        <Row>
          <p className="title">{t("prize-service")}</p>
          <p className="num">5000000d</p>
        </Row>
        <Row>
          <p className="title">{t("min-quanty")}</p>
          <InputNumber />
        </Row>
        <Row>
          <p className="title">{t("unit")}</p>
          <p className="num-day">San pham</p>
        </Row>
        <Row>
          <p className="title">{t("deadline")}</p>
          <p className="num-day">7 ngay</p>
        </Row>
      </div>

      <div className="service-buy-addon">
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
