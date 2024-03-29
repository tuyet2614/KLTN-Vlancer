import { CheckCircleFilled, EyeFilled, StarOutlined } from "@ant-design/icons";
import avatar from "@assets/images/icon/avatar.jpg";
import img_test from "@assets/images/bg_1.jpg";
import img_test1 from "@assets/images/bg_2.jpg";
import img_test2 from "@assets/images/bg_3.jpg";
import banner from "@assets/images/icon/Banner-Bottom.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Image } from "antd";
import { useTranslation } from "react-i18next";

const InformationService = () => {
  const { t } = useTranslation("service");
  return (
    <div className="information-detail-service">
      <div className="information">
        <div className="information-view">
          <EyeFilled />
          <p>320</p>
        </div>
        <div className="information-rating">
          <StarOutlined />
          <p>2</p>
        </div>
        <div className="information-author">
          <div className="author-avatar">
            <Image src={avatar} className="avatar-img" preview={false} />
          </div>
          <div className="profile">
            <p>Ha Trinh</p>
          </div>
        </div>
      </div>

      <div className="slide-img-section">
        <div>
          {/* <Image src="img_test" preview={false} className="slick" /> */}
          <Carousel autoPlay>
            <div>
              <img src={img_test} />
            </div>
            <div>
              <img src={img_test1} />
            </div>
            <div>
              <img src={img_test2} />
            </div>
            <div>
              <img src={banner} />
            </div>
          </Carousel>
        </div>
      </div>

      <div className="block-you-receive">
        <p className="heading">{t("get-benefit")}</p>
        <div className="wrapper-list-title">
          <div className="title-item">
            <CheckCircleFilled style={{ color: "#2db964" }} />
            <p>Giải phóng thời gian</p>
          </div>
          <div className="title-item">
            <CheckCircleFilled style={{ color: "#2db964" }} />
            <p>Cam kết bảo mật</p>
          </div>
          <div className="title-item">
            <CheckCircleFilled style={{ color: "#2db964" }} />
            <p>Uy tín, bảo hành ít nhất 1 tháng sử dụng</p>
          </div>
        </div>
      </div>

      <div className="service-pack-information">
        <p className="heading-one">{t("info-service")}</p>
        <div className="service-description">
          <ul>
            <li>Tool game</li>
            <li>Auto quy trình, thao tác trên PC</li>
            <li>Auto app trên giả lập</li>
            <li>Thu thập dữ liệu</li>
          </ul>
        </div>

        <p className="heading-two">{t("work-process")}</p>
        <div>
          <div className="process-list">
            <p className="num">1</p>
            <p className="process-item">Tool game</p>
          </div>
          <div className="process-list">
            <p className="num">2</p>
            <p className="process-item">Tool game</p>
          </div>
          <div className="process-list">
            <p className="num">3</p>
            <p className="process-item">Tool game</p>
          </div>
          <div className="process-list">
            <p className="num">4</p>
            <p className="process-item">Tool game</p>
          </div>
        </div>

        <p className="heading-two">{t("who-hired")}</p>
        <div className="service-description">
          <ul>
            <li>Tool game</li>
            <li>Auto quy trình, thao tác trên PC</li>
            <li>Auto app trên giả lập</li>
            <li>Thu thập dữ liệu</li>
          </ul>
        </div>

        <div className="block-rating">
          <div className="count-feedback">
            <p>0</p>
            <p>{t("count-review")}</p>
          </div>
          <p className="count-start-fb">{t("no-review")}</p>
        </div>
      </div>
    </div>
  );
};

export default InformationService;
