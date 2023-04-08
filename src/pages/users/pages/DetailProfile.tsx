import { Button, Col, Image, Row } from "antd";
import avatarDefault from "@assets/images/icon/avatar.jpg";
import "../styles/index.scss";
import { EnvironmentOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDetailProfile } from "../services/api";
import Loading from "../../../components/base/components/loading";
import { api_url } from "../../../untils/string";
import { systemRoutes } from "../../../routes";

const DetailProfile = () => {
  const { t } = useTranslation("user");
  const { id } = useParams();
  const { data, isLoading } = getDetailProfile(id);
  const navigate = useNavigate();
  const handleDetailUser = () => {
    navigate(
      systemRoutes.DETAIL_FREELANCERS_ROUTE(
        data?.attributes?.users_permissions_users?.data[0]?.id
      )
    );
  };
  const avatar: string =
    api_url +
    data?.attributes?.users_permissions_users?.data[0]?.attributes?.avatar?.data
      ?.attributes?.formats?.thumbnail.url;
  const avatar_profile: string =
    api_url + data?.attributes?.files?.data?.attributes?.formats?.thumbnail.url;
  console.log("datttt: ", data);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Row className="detail-profile-container">
          <Col className="layered-navigation col">
            <div className="avatar">
              <Image
                src={
                  data?.attributes?.users_permissions_users?.data[0]?.attributes
                    ?.avatar?.formats?.thumbnail.url
                    ? avatarDefault
                    : avatar
                }
                preview={false}
              />
            </div>
            <div className="freelancer-name">
              <p>
                {
                  data?.attributes?.users_permissions_users?.data[0]?.attributes
                    ?.username
                }
              </p>
            </div>
            <div className="freelancer-title">
              {
                data?.attributes?.users_permissions_users?.data[0]?.attributes
                  ?.workTitle
              }
            </div>
            <div className="city">
              <EnvironmentOutlined />
              <span>
                {
                  data?.attributes?.users_permissions_users?.data[0]?.attributes
                    ?.city
                }
              </span>
            </div>
            <div className="freelancer-skill">
              {data?.attributes?.users_permissions_users?.data[0]?.attributes?.skills?.data?.map(
                (item: any) => (
                  <span className="skill-item">{item?.attributes?.name}</span>
                )
              )}
            </div>
            <div className="contact-btn">
              <Button onClick={handleDetailUser}>{t("show-profile")}</Button>
            </div>
          </Col>
          <Col className="layer-right">
            <div className="portfolio-title">
              <p className="title">{data?.attributes?.title}</p>
            </div>
            <div className="portfolio-file">
              <Image
                src={
                  data?.attributes?.files?.data?.attributes?.formats?.thumbnail
                    .url && avatar_profile
                }
                preview={false}
              />
            </div>
            <div className="portfolio-description">
              {data?.attributes?.description}
            </div>
            <div className="portfolio-url">
              <Link to={"link"}>{data?.attributes?.website}</Link>
            </div>
            <div className="portfolio-service">
              <span>
                {data?.attributes?.services?.data[0]?.attributes?.name}
              </span>
            </div>
          </Col>
        </Row>
      )}
    </>
  );
};

export default DetailProfile;
