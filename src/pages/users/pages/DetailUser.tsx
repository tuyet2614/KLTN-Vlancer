import { Col, Image, Row } from "antd";
import avatarDefault from "@assets/images/icon/avatar.jpg";
import "../styles/index.scss";
import { getDetailUser } from "../services/api";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const DetailUser = () => {
  const { t } = useTranslation("user");
  const { id } = useParams();
  const dataUser: any = getDetailUser(id);

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
              <p>{dataUser?.workTitle}</p>
              <p>{dataUser?.addresses[0].city}</p>
              <div className="flex">
                {dataUser?.skills.map((item: any) => (
                  <div>{item.name}</div>
                ))}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DetailUser;
