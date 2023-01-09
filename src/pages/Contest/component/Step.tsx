import { Col, Row } from "antd";
import { useTranslation } from "react-i18next";
const Step = () => {
  const { t } = useTranslation("contest");
  return (
    <div className="step-container">
      <Row className="list-step">
        <Col span={4}>
          <div>
            <p className="step">{t("step1")}</p>
            <p>{t("create")}</p>
          </div>
        </Col>
        <Col span={4}>
          <div>
            <p className="step">{t("step2")}</p>
            <p>{t("design-exam")}</p>
          </div>
        </Col>
        <Col span={4}>
          <div>
            <p className="step">{t("step3")}</p>
            <p>{t("best-design")}</p>
          </div>
        </Col>
        <Col span={4}>
          <div>
            <p className="step">{t("last")}</p>
            <p>{t("winner")}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Step;
