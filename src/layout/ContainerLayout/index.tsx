import { Layout } from "antd";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import authHOC from "../../components/base/hoc/authHOC";
import ManageMenu from "../../components/menu/manageMenu";
import MenuTop from "../../components/menu/menuTop";
import { getMyUser } from "../../pages/auth/service/api";
import { useUserStore } from "../../store/user";
import { getAuthToken } from "../../untils/token";
import Footer from "../component/Footer";
import "./containerLayout.scss";

const { Header, Content } = Layout;

const ContainerLayout = () => {
  const isLogin = getAuthToken();
  const { user, setUser } = useUserStore();

  return (
    <Fragment>
      <Layout className="layout-menu">
        <div className="menu">
          <MenuTop />
        </div>
        <div>{isLogin && <ManageMenu user={user} />}</div>

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
