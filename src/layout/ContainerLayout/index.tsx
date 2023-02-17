import { Layout } from "antd";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import authHOC from "../../components/base/hoc/authHOC";
import MenuTop from "../../components/menu/menuTop";
import Footer from "../component/Footer";
import "./containerLayout.scss";

const { Header, Content } = Layout;

const ContainerLayout = (props: any) => {
  return (
    <Fragment>
      <Layout className="layout-menu">
        <div className="menu">
          <MenuTop />
        </div>

        <Layout className={`container-layout-content`}>
          <Content>
            <Outlet />
          </Content>
        </Layout>
        <div className="footer">
          <Footer />
        </div>
      </Layout>
    </Fragment>
  );
};

export default ContainerLayout;
