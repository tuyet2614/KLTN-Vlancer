import { Button, Image } from "antd";
import avatarDefault from "@assets/images/icon/avatar.jpg";
import { useTranslation } from "react-i18next";
import "../style/index.scss";
import img_test from "@assets/images/bg_1.jpg";
import img_test1 from "@assets/images/bg_2.jpg";
import img_test2 from "@assets/images/bg_3.jpg";
import banner from "@assets/images/icon/Banner-Bottom.png";
import { Carousel } from "react-responsive-carousel";
import { EyeOutlined, HeartOutlined } from "@ant-design/icons";

const DetailExperienceProfile = () => {
  const { t } = useTranslation("service");
  return (
    <div className="profile-container">
      <div className="portfolio-left-desktop">
        <div className="avata-right">
          <Image src={avatarDefault} preview={false} />
        </div>
        <div className="freelancer-name">
          <p>Dotranle Baochau</p>
        </div>
        <div className="freelancer-title">Graphic Designer </div>
        <div className="pf-city">
          <span>TP. Hồ Chí Minh</span>
        </div>
        <div className="freelancer-skill">
          <span>Css3</span>
          <span>Htnl5</span>
          <span>Adobe Photoshop</span>
          <span>Adobe Dreamweaver</span>
          <span>Adobe Illustrator</span>
        </div>
        <div className="show-freelancer">
          <Button>{t("show-freelancer")}</Button>
        </div>
      </div>
      <div className="right-portfolio">
        <div className="main_content">
          <div>
            <div className="portfolio-title">
              <p>Ngược Photography logo</p>
              <div className="view">
                <div className="p-view">
                  <EyeOutlined />
                  <span>7.8k</span>
                </div>
                <div className="p-like">
                  <HeartOutlined />
                  <span>12</span>
                </div>
              </div>
            </div>
            <div className="portfolio-file">
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
            <div className="portfolio-description">Ngược Photography logo</div>
            <div className="p-react">
              <Button>Like</Button>
              <Button>Share</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailExperienceProfile;
