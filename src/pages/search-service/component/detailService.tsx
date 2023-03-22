import { Col, Row } from "antd";
import DetailContact from "./detailContact";
import InformationAuthor from "./informationAuthor";
import InformationService from "./informationService";
import "../style/index.scss";

const DetailService = () => {
  return (
    <div className="detail-service">
      <p className="title">Tool tự động các loại</p>
      <Row>
        <Col className="section-service-content">
          <div>
            <InformationService />
          </div>

          <div>
            <InformationAuthor />
          </div>
        </Col>
        <Col className="block-order-detail">
          <DetailContact />
        </Col>
      </Row>
    </div>
  );
};

export default DetailService;
