import { Image } from "antd";
import avatarDefault from "@assets/images/icon/avatar.jpg";
import { EyeOutlined, HeartFilled } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { systemRoutes } from "../../../routes";

const ExperienceItem = () => {
  const { t } = useTranslation("service");
  const navigate = useNavigate();
  return (
    <div className="portfolio">
      <div
        className="p-img"
        onClick={() => navigate(systemRoutes.TOP_PROFILE_DETAIL_ROUTE)}
      >
        <Image className="lazyloaded" src={avatarDefault} preview={false} />
      </div>
      <div className="p-about-m">
        <p
          className="title"
          onClick={() => navigate(systemRoutes.TOP_PROFILE_DETAIL_ROUTE)}
        >
          Ngược Photography logo
        </p>
        <p className="author">Ngược Photography logo</p>
        <div className="review">
          <div className="review-eye">
            <EyeOutlined />
            <p>7.8k</p>
          </div>
          <div className="review-like">
            <HeartFilled />
            <p>18</p>
            <p>thich boi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
