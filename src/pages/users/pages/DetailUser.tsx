import { Button, Col, Image, Progress, Rate, Row } from "antd";
import avatarDefault from "@assets/images/icon/avatar.jpg";
import "../styles/index.scss";
import { getDetailUser } from "../services/api";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  CheckOutlined,
  MailOutlined,
  PhoneOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { api_url } from "../../../untils/string";
import { getMyUser } from "../../auth/service/api";
import { systemRoutes } from "../../../routes";
import { useState } from "react";
import Loading from "../../../components/base/components/loading";

const DetailUser = () => {
  const { t } = useTranslation("user");
  const { id } = useParams();
  const { data: dataUser, isLoading } =
    id === "me" ? getMyUser() : getDetailUser(id);
  const avatar: string = api_url + dataUser?.avatar?.formats?.thumbnail.url;
  const navigate = useNavigate();

  const handleRouteToUpdate = () => {
    navigate(systemRoutes.UPDATE_USER_ROUTE(dataUser.id));
  };

  const handleRoteDetailProfile = (profileId: string) => {
    navigate(systemRoutes.DETAIL_PROFILE_ROUTE(profileId));
  };

  console.log("data user: ", dataUser);
  return (
    <div className="detail-user">
      {isLoading ? (
        <Loading />
      ) : (
        <Row className="justify-between">
          <Col className="w-[50%]">
            <div className="flex gap-4">
              <div>
                <Image
                  src={dataUser?.avatar ? avatar : avatarDefault}
                  preview={false}
                  className="avatar"
                />
                <p className="text-center">id. {dataUser?.id}</p>
              </div>
              <div>
                <div className="flex gap-4 items-center">
                  <p className="user-name">{dataUser?.username}</p>
                  {id === "me" && (
                    <Button type="primary" onClick={handleRouteToUpdate}>
                      {t("update")}
                    </Button>
                  )}
                </div>

                <div className="simple">
                  <p>{dataUser?.workTitle}</p>
                  <p>{dataUser?.city}</p>
                </div>

                <div className="flex gap-2">
                  {dataUser?.skills?.map((item: any) => (
                    <div className="skill-item">{item?.name}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className="intro-item">
              <p className="title">{t("introduce")}</p>
              <div>{dataUser?.summary?.introduction}</div>
            </div>
            <div className="intro-item">
              <p className="title">{t("service")}</p>
              <ul className="">
                {t("list-service")}
                {dataUser?.services?.map((item: any) => (
                  <li key={item.id} className="list-service pt-2">
                    <CheckOutlined />
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="intro-item">
              <p className="title">{t("profile")}</p>
              <div className="grid grid-cols-4 gap-4">
                {dataUser?.profile?.map((item: any) => (
                  <div
                    className="cursor-pointer"
                    onClick={() => handleRoteDetailProfile(item?.id)}
                  >
                    <Image
                      src={api_url + item?.files?.formats?.thumbnail?.url}
                      preview={false}
                    />
                    <p>{item?.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          <Col>
            <div className="contact">
              <p className="user-name">{t("information")}</p>
              <div className="info-item">
                <MailOutlined />
                <p>
                  {dataUser?.blocked || id !== "me"
                    ? t("hired")
                    : dataUser?.email}
                </p>
              </div>
              <div className="info-item">
                <PhoneOutlined />
                <p>
                  {dataUser?.blocked || id !== "me"
                    ? t("hired")
                    : dataUser?.phoneNumber}
                </p>
              </div>
              {id !== "me" && (
                <>
                  <Button>{t("contact")}</Button>
                  <div className="direct">
                    <span>{t("press")}</span>
                    <span>
                      <b>{t("direct")}</b>
                    </span>
                    <span>{t("contact-btn")}</span>
                  </div>
                </>
              )}
            </div>
            <div className="intro-item pt-10">
              <p className="title">{t("summary")}</p>
              <p>
                {dataUser?.answers?.length > 0 ? (
                  <div>
                    {dataUser?.answers?.map((item: any) => (
                      <div>
                        <Rate
                          allowHalf
                          disabled
                          defaultValue={item?.post?.star}
                        />
                        <p>{item?.post?.content}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  t("no-comment")
                )}
              </p>
            </div>
            <div className="intro-item">
              <p className="title">{t("work")}</p>
              <p>
                {dataUser?.answers?.length > 0 ? (
                  <div>
                    {dataUser?.answers?.map((item: any) => (
                      <div className="flex items-center gap-2">
                        <SendOutlined />
                        <span>{item?.post?.title}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  t("no-comment")
                )}
              </p>
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default DetailUser;
