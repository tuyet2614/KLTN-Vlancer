import { Col, Divider, Row } from "antd";
import { t } from "i18next";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("onBoard");
  return (
    <Fragment>
      <Row className="flex flex-wrap gap-8">
        <Col className="popular">
          <p className="popular-title">{t("popular")}</p>
          <p className="most-popular">{t("website")}</p>
          <p className="most-popular">{t("mobile")}</p>
          <p className="most-popular">{t("search-engine")}</p>
          <p className="most-popular">{t("marketing")}</p>
          <p className="most-popular">{t("translation")}</p>
          <p className="most-popular">{t("copy-writing")}</p>
          <p className="most-popular">{t("design")}</p>
          <p className="most-popular">{t("fanpage")}</p>
          <p className="most-popular">{t("contest")}</p>
        </Col>
        <Col className="popular">
          <p className="popular-title">{t("hired")}</p>
          <p className="most-popular">{t("freelancer-marketing")}</p>
          <p className="most-popular">{t("website")}</p>
          <p className="most-popular">{t("mobile")}</p>
          <p className="most-popular">{t("search-engine")}</p>
          <p className="most-popular">{t("design")}</p>
          <p className="most-popular">{t("banner")}</p>
          <p className="most-popular">{t("writing")}</p>
          <p className="most-popular">{t("translation")}</p>
          <p className="most-popular">{t("database")}</p>
        </Col>
        <Col className="freelancer">
          <p className="popular-title">{t("freelancer")}</p>
          <p className="most-popular">{t("make-money")}</p>
          <p className="most-popular">{t("profile")}</p>
          <p className="most-popular">{t("bids")}</p>
          <p className="most-popular">{t("payment")}</p>
          <p className="most-popular">{t("account")}</p>
          <p className="most-popular">{t("client-contact")}</p>
          <p className="most-popular">{t("credit")}</p>
          <p className="most-popular">{t("upgrade")}</p>
          <p className="most-popular">{t("service")}</p>
        </Col>
        <Col className="freelancer">
          <p className="popular-title">{t("client")}</p>
          <p className="most-popular">{t("hire-freelancer")}</p>
          <p className="most-popular">{t("posting")}</p>
          <p className="most-popular">{t("mail-verification")}</p>
          <p className="most-popular">{t("choose")}</p>
          <p className="most-popular">{t("freelancer")}</p>
          <p className="most-popular">{t("manage")}</p>
          <p className="most-popular">{t("contact-freelancer")}</p>
          <p className="most-popular">{t("upgrade-client")}</p>
          <p className="most-popular">{t("buy-service")}</p>
        </Col>
        <Col className="freelancer">
          <p className="popular-title">{t("introduction")}</p>
          <p className="most-popular">{t("about")}</p>
          <p className="most-popular">{t("sponsors")}</p>
          <p className="most-popular">{t("knowledge")}</p>
          <p className="most-popular">{t("vLance-blog")}</p>
        </Col>
        <Col className="freelancer">
          <p className="popular-title">{t("contact")}</p>
          <p className="most-popular">{t("help")}</p>
          <p className="most-popular">{t("faq")}</p>
          <p className="most-popular">{t("error")}</p>
          <p className="most-popular">{t("contact")}</p>

          <div className="connect">
            <p className="most-popular">{t("connect")}</p>
          </div>
        </Col>
      </Row>
      <Divider style={{ color: "white" }} />
    </Fragment>
  );
};

export default Footer;
