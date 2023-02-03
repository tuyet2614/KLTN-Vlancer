import { Button, Col, Image, Row } from "antd";
import "./index.scss";
import imageDefault from "@assets/images/logo_img.png";

interface Props {
  data?: any;
}

const FreelancerItem = ({ data }: Props) => {
  return (
    <div className="freelancer-item">
      <Row gutter={24} className="flex">
        <Col className="!flex items-center" span={5}>
          <Image
            src={imageDefault}
            preview={false}
            className="max-w-[180px] max-h-[180px] rounded-lg"
          />
        </Col>
        <Col span={19}>
          <Row className="flex justify-between items-center">
            <p className="name m-0">check</p>
            <Button className="contact-btn">Contact directly</Button>
          </Row>

          <p>quản lý nhân sự</p>
          <div className="address">
            <p className="m-0">Nghe An | Other Administrative Tasks</p>
          </div>

          <div className="flex">
            <div className="skills">WRITE ARTICLES</div>
            <div className="skills">PERSONNEL</div>
          </div>
        </Col>
        {/* <Col>
          <Button>Contact directly</Button>
        </Col> */}
      </Row>
    </div>
  );
};

export default FreelancerItem;
