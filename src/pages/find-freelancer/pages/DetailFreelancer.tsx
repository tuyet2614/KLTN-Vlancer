import { Col, Image, Row } from "antd";
import defaultAvatar from "@assets/images/bg_2.jpg";

const DetailFreelancer = () => {
  return (
    <div>
      <Row>
        <Col>
          <Row>
            <div>
              <Image src={defaultAvatar} preview={false} />
              <span>id: 40940</span>
              <span>Online cuối: 08/02/2023</span>
            </div>
            <div>
              <h1>P. T. T. Nhung</h1>
              <p>Trợ lý từ xa/quản lý fanpage/viết bài chuẩn SEO</p>
              <p> TP. Hồ Chí Minh</p>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default DetailFreelancer;
