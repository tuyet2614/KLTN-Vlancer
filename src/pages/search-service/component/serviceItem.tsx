import { Image } from "antd";
import img_test from "@assets/images/bg_1.jpg";
import { EyeFilled, HeartOutlined, StarOutlined } from "@ant-design/icons";
import avatar from "@assets/images/icon/avatar.jpg";
import { useNavigate } from "react-router-dom";
import { systemRoutes } from "../../../routes";

const ServiceItem = () => {
  const navigate = useNavigate();
  return (
    <div className="service-list-item">
      <div
        className="img-service"
        onClick={() => navigate(systemRoutes.DETAIL_SERVICE_ROUTE("id"))}
      >
        <Image src={img_test} preview={false} className="img-item" />
      </div>
      <div className="title-service-item">
        <p className="block-title">Tool tự động các loại</p>
        <div className="view-rating-and-price">
          <div className="view-rating">
            <div className="information-view">
              <EyeFilled />
              <p>320</p>
            </div>
            <div className="information-rating">
              <StarOutlined />
              <p>2</p>
            </div>
          </div>
          <div className="price">
            <p>5.000.000 d</p>
          </div>
        </div>
        <div className="information-account">
          <div className="avatar">
            <Image src={avatar} className="avatar-img" preview={false} />
          </div>
          <div className="profile">
            <p>Ha Trinh</p>
          </div>
          <div className="like">
            <HeartOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
