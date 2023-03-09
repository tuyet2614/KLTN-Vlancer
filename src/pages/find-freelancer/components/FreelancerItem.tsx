import { systemRoutes } from "../../../routes";
import { Button, Col, Image, Row } from "antd";
import "./index.scss";
import imageDefault from "@assets/images/logo_img.png";
import { useNavigate } from "react-router";

interface ListFreelancerProps {
  data: any;
}

export const FreelancerItem: React.FC<ListFreelancerProps> = ({ data }) => {
  const navigate = useNavigate();
  const handleRouteToDetail = () => {
    navigate(systemRoutes.DETAIL_FREELANCERS_ROUTE(data.id));
  };
  const api_url: string =
    "http://localhost:1337" + data?.avatar?.formats?.thumbnail.url;
  return (
    <div className="freelancer-item">
      <Row gutter={24} className="flex">
        <Col className="!flex items-center" span={5}>
          <Image
            src={data?.avatar ? api_url : imageDefault}
            preview={false}
            className="max-w-[180px] max-h-[180px] rounded-lg"
          />
        </Col>
        <Col span={19}>
          <Row className="flex justify-between items-center">
            <p
              className="name m-0 cursor-pointer"
              onClick={handleRouteToDetail}
            >
              {data?.username}
            </p>
            <Button className="contact-btn">Contact directly</Button>
          </Row>

          <p>{data?.workTitle}</p>
          <div className="address">
            <p className="m-0">
              {data?.addresses && data.addresses[0]?.city} | {}
            </p>
          </div>

          <div className="flex gap-2">
            {data.skills.map((item: any) => (
              <div className="skills" key={item.id}>
                {item.name}
              </div>
            ))}
          </div>
        </Col>
        {/* <Col>
          <Button>Contact directly</Button>
        </Col> */}
      </Row>
    </div>
  );
};
