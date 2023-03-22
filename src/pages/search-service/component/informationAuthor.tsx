import { Button, Col, Image, Row } from "antd";
import { useTranslation } from "react-i18next";
import avatar from "@assets/images/icon/avatar.jpg";
import { StarFilled } from "@ant-design/icons";
import { useState } from "react";

const InformationAuthor = () => {
  const { t } = useTranslation("service");
  const [isExpanded, setIsExpanded] = useState(false);
  const fullText =
    "Tôi là 1 fulllstack developer hơn 10 năm kinh nghiệm, trong đó 5 năm làm việc tại Nhật. Tôi yêu thích công việc lập trình, đặc biệt là các Tool tư động và ứng dụng Web. Hiện tại tôi đang đảm đương vai trò Manager cho 1 công ty IT Nhật Bản có chi nhánh tại Việt Nam, nên có khá nhiều thời gian rảnh rỗi để làm freelancer. Ngoài ra tôi có 1 team tập hợp các anh em đam mê thực hiện các phần mềm tự động hóa website: https://www.f12key.xyz";
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="information-detail-author">
      <p className="contact-heading">{t("author")}</p>
      <div className="profile-and-btn">
        <div className="information-account">
          <div className="warpper-avr-profile">
            <div className="avatar">
              <Image src={avatar} className="avatar-img" preview={false} />
            </div>
            <div className="profile">
              <p>Ha Trinh</p>
            </div>
          </div>
          <div className="btn-contact">
            <Button>{t("contact")}</Button>
          </div>
        </div>

        <div className="information-rating">
          <Row>
            <Col className="left-col">
              <div className="col-item item">
                <p>0</p>
                <div className="flex items-center">
                  <StarFilled style={{ color: "#999999" }} />
                  <StarFilled style={{ color: "#999999" }} />
                  <StarFilled style={{ color: "#999999" }} />
                  <StarFilled style={{ color: "#999999" }} />
                  <StarFilled style={{ color: "#999999" }} />
                </div>
              </div>
              <div className="col-item item important-value">
                <p>0</p>
                <p>{t("count-review")}</p>
              </div>
              <div>
                <p className="item">{t("money")}</p>
                <p className="item important-value">0d</p>
              </div>
            </Col>

            <Col>
              <div>
                <p className="item">{t("done")}</p>
                <p className="item important-value">
                  {t("count-order", { count: 0 })}
                </p>
              </div>
              <div>
                <p className="item">{t("complete-rate")}</p>
                <p className="item important-value">0%</p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="information-self-introduce">
          <p className="title hidden-read-more">
            {isExpanded ? fullText : `${fullText.slice(0, 250)}`}
          </p>
          <div
            className={isExpanded ? "linear" : "linear linear-gradient"}
            onClick={toggleText}
          >
            <p>{!isExpanded ? t("read-more") : t("read-less")} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationAuthor;
