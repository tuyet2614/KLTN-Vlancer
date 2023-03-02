import { Col, Image, Row } from "antd";
import avatarDefault from "@assets/images/icon/avatar.jpg";
import "../styles/index.scss";
import { getDetailUser } from "../services/api";
import { useParams } from "react-router-dom";

const DetailUser = () => {
  const { id } = useParams();
  const dataUser: any = getDetailUser(id);
  console.log("data user: ", dataUser);

  return (
    <div className="detail-user">
      <Row>
        <Col>
          <div className="flex">
            <div>
              <Image src={avatarDefault} preview={false} className="avatar" />
              <p>id. {dataUser?.id}</p>
            </div>
            <div>
              <p>{dataUser?.username}</p>
              <p>service</p>
              <p>Location</p>
              <p>Skill</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DetailUser;
