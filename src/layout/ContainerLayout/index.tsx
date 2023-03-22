import { Layout } from "antd";
import { Fragment, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ManageMenu from "../../components/menu/manageMenu";
import MenuTop from "../../components/menu/menuTop";
import { useUserStore } from "../../store/user";
import { getAuthToken } from "../../untils/token";
import Footer from "../component/Footer";
import "./containerLayout.scss";
import ChatBot from "react-simple-chatbot";
import { useTranslation } from "react-i18next";
import { stepChatbot } from "../../constant/step_chatbot";
import { api_url } from "../../untils/string";
import { ThemeProvider } from "styled-components";
import { UserInput } from "react-simple-chatbot";
import checkAvatar from "@assets/images/icon/avatar.jpg";
import CustomSearch from "../component/customSearch";
import Chatbot from "../component/customSearch";

const { Content } = Layout;

const config = {
  width: "400px",
  height: "600px",
  floating: true,
};
const theme = {
  background: "white",
  fontFamily: "Arial, Helvetica, sans-serif",
  headerBgColor: "#00B2B2",
  headerFontColor: "#fff",
  headerFontSize: "25px",
  botBubbleColor: "#00B2B2",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4c4c4c",
};

const ContainerLayout = () => {
  const isLogin = getAuthToken();
  const { user, setUser } = useUserStore();
  const { t } = useTranslation("chatbot");
  const [avatar, setAvatar] = useState(
    api_url + user?.avatar?.formats?.thumbnail.url
  );
  // const avatar: string = api_url + user?.avatar?.formats?.thumbnail.url;
  console.log("avatar: ", avatar);
  useEffect(() => {
    setAvatar(api_url + user?.avatar?.formats?.thumbnail.url);
  }, [user]);

  return (
    <Fragment>
      <Layout className="layout-menu">
        <div className="menu">
          <MenuTop />
        </div>
        {isLogin && <ManageMenu user={user} />}

        <Layout className={`container-layout-content`}>
          <Content>
            <Outlet />
          </Content>
        </Layout>
        <ThemeProvider theme={theme}>
          {/* <ChatBot
            // floating={true}
            headerTitle={t("help")}
            recognitionEnable={true}
            userAvatar={avatar}
            steps={stepChatbot}
            {...config}
            inputComponent={CustomSearch}
          /> */}
          <Chatbot />
        </ThemeProvider>
        <div className="footer">
          <Footer />
        </div>
      </Layout>
    </Fragment>
  );
};

export default ContainerLayout;
