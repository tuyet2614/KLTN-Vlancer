import { systemRoutes } from "../../../routes";
import { Button, Col, Image, Row } from "antd";
import "./index.scss";
import imageDefault from "@assets/images/logo_img.png";
import { useNavigate } from "react-router";
import { api_url } from "../../../untils/string";
import { useTranslation } from "react-i18next";

interface ListFreelancerProps {
  data: any;
}

export const FreelancerItem: React.FC<ListFreelancerProps> = ({ data }) => {
  const { t } = useTranslation("service");
  const navigate = useNavigate();
  const handleRouteToDetail = () => {
    navigate(systemRoutes.DETAIL_FREELANCERS_ROUTE(data.id));
  };
  const avatar: string = api_url + data?.avatar?.formats?.thumbnail.url;
  return (
    <div className="freelancer-item">
      <Row gutter={24} className="flex">
        <Col className="!flex items-center" span={5}>
          <Image
            src={data?.avatar ? avatar : imageDefault}
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
          <div className="address flex gap-2">
            <span>{data?.city}</span>
            {data?.city && <span>|</span>}
            <span>{t(data?.category?.name)}</span>
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
