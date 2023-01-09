import { Button, Col, Image, Row } from "antd";
import { useTranslation } from "react-i18next";
import contestImg from "@assets/images/cuoc-thi-thiet-ke.png";
import "../styles/index.scss";
const Banner = () => {
  const { t } = useTranslation(["contest", "onBoard"]);

  return (
    <Row className="banner-container">
      <Col className="content-left" span={7}>
        <p className="title">{t("contest", { ns: "onBoard" })}</p>
        <p>{t("pay-once")}</p>
        <ul>
          <li>{t("loads")}</li>
          <li>{t("easily")}</li>
          <li>{t("unlimited")}</li>
          <li>{t("fully")}</li>
        </ul>
        <Button>{t("create")}</Button>
      </Col>

      <Col className="content-right">
        <Image src={contestImg} preview={false} />
      </Col>
    </Row>
  );
};
export default Banner;
