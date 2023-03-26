import { Select } from "antd";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ChatBot from "react-simple-chatbot";
import { useUserStore } from "../../store/user";
import { api_url } from "../../untils/string";
import { stepChatbot } from "../../constant/step_chatbot";

const Chatbot = () => {
  const { t } = useTranslation("chatbot");
  const { user, setUser } = useUserStore();
  const [avatar, setAvatar] = useState(
    api_url + user?.avatar?.formats?.thumbnail.url
  );
  const config = {
    width: "400px",
    height: "600px",
    floating: true,
  };
  useEffect(() => {
    setAvatar(api_url + user?.avatar?.formats?.thumbnail.url);
  }, [user]);

  return (
    <ChatBot
      steps={stepChatbot}
      headerTitle={t("help")}
      recognitionEnable={true}
      userAvatar={avatar}
      {...config}
    />
  );
};

export default Chatbot;
