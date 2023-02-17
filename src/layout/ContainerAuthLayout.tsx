import loginImg from "@assets/images/login_img.png";
import logoImg from "@assets/images/logo_img.png";
import authHOC from "../components/base/hoc/authHOC";
import ChangeLanguageComponent from "../components/menu/menuComponent/ChangeLanguage";
import "@modules/auth/styles/index.scss";
import { Card, Col, Image, Layout, Row } from "antd";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const ContainerAuthLayout = (props: any) => {
  return (
    <Fragment>
      <Layout className="h-full">
        <div className="h-full auth_container">
          <div className="flex justify-end items-center h-[12vh]">
            <div className="sm:mr-[60px] pr-[18px]">
              <ChangeLanguageComponent isDisplayCurrentText={true} />
            </div>
          </div>
          <div className="auth_content">
            <div className="sm:mx-[52px] mx-[16px] w-full">
              <Row gutter={48} className="container_content">
                <Col className="image_section" span={0} lg={12}>
                  <div className="img_container">
                    <Image src={loginImg} preview={false} />
                  </div>
                </Col>
                <Col span={24} lg={12}>
                  <Card className="form_card">
                    <div className="form">
                      <div className="logo_img_container">
                        <Image
                          src={logoImg}
                          className="logo_img"
                          preview={false}
                        />
                      </div>
                      <Outlet />
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default ContainerAuthLayout;
