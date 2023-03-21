import { Button, Col, Image, Row } from "antd";
import { useTranslation } from "react-i18next";
import avatar from "@assets/images/icon/avatar.jpg";
import { StarFilled } from "@ant-design/icons";

const InformationAuthor = () => {
  const { t } = useTranslation("service");
  return (
    <div className="information-author">
      <p>{t("author")}</p>
      <div className="information-account">
        <div className="avatar">
          <Image src={avatar} className="avatar-img" preview={false} />
        </div>
        <div className="profile">
          <p>Ha Trinh</p>
        </div>
        <div className="like">
          <Button>{t("contact")}</Button>
        </div>
      </div>

      <div>
        <Row>
          <Col>
            <div>
              <p>0</p>
              <StarFilled />
            </div>
            <div>
              <p>0</p>
              <p>{t("count-review")}</p>
            </div>
            <div>
              <p>{t("money")}</p>
              <p>0d</p>
            </div>
          </Col>

          <Col>
            <div>
              <p>{t("done")}</p>
              <p>{t("count-order", { count: 0 })}</p>
            </div>
            <div>
              <p>{t("complete-rate")}</p>
              <p>0%</p>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        Tôi là 1 fulllstack developer hơn 10 năm kinh nghiệm, trong đó 5 năm làm
        việc tại Nhật. Tôi yêu thích công việc lập trình, đặc biệt là các Tool
        tư động và ứng dụng Web. Hiện tại tôi đang đảm đương vai trò Manager cho
        1 công ty IT Nhật Bản có chi nhánh tại Việt Nam, nên có khá nhiều thời
        gian rảnh rỗi để làm freelancer. Ngoài ra tôi có 1 team tập hợp các anh
        em đam mê thực hiện các phần mềm tự động hóa (website:
        https://www.f12key.xyz)
      </div>
    </div>
  );
};

export default InformationAuthor;
