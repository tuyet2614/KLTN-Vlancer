import React from "react";
import "../style.scss";

interface Props {
  username: any;
  message: any;
}

const Message = ({ username, message }: Props) => {
  let sentByCurrentUser = false;
  console.log("useeee: ", username);
  console.log("messss: ", message);

  if (message.user_id_create?.data?.id === username.id) {
    console.log("true");
    sentByCurrentUser = true;
  }

  const background = sentByCurrentUser ? "blue" : "dark";
  const textPosition = sentByCurrentUser ? "end" : "start";
  const textColor = sentByCurrentUser ? "white" : "dark";
  const sentBy = sentByCurrentUser ? "right" : "left";
  return (
    <div
      className={`MessagesContainer ${
        textPosition === "end" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`MessageBox ${
          background === "blue" ? "bg-blue-400" : "bg-slate-200"
        }`}
      >
        <p
          className={`MessageText ${
            textColor === "white" ? "text-white" : "text-dark"
          }`}
        >
          {message.message}
        </p>
      </div>
      <p className={` SentBy ${sentBy === "right" ? "pr-3" : "pl-3"}`}>
        {message.user}
      </p>
    </div>
  );
};

export default Message;
