import { Col, Row } from "antd";
import DetailContact from "./detailContact";
import InformationAuthor from "./informationAuthor";
import InformationService from "./informationService";

const DetailService = () => {
  return (
    <div>
      <p>Tool tự động các loại</p>
      <Row>
        <Col>
          <div>
            <InformationService />
          </div>

          <div>
            <InformationAuthor />
          </div>
        </Col>
        <Col>
          <DetailContact />
        </Col>
      </Row>
    </div>
  );
};

export default DetailService;
