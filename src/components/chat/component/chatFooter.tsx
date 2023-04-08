import { Button, Form, Input } from "antd";
import { useState } from "react";
import "../style.scss";

interface Props {
  socket: any;
}

export const ChatFooter = ({ socket }: Props) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = (e: any) => {
    if (message.trim() && localStorage.getItem("userName")) {
      socket.emit("message", {
        text: message,
        name: localStorage.getItem("userName"),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }

    console.log({ userName: localStorage.getItem("userName"), message });
    setMessage("");
  };

  const handleTyping = () =>
    socket.emit("typing", `${localStorage.getItem("userName")} is typing`);
  return (
    <div className="chat__footer">
      <Form className="form" onFinish={handleSendMessage}>
        <Input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleTyping}
        />
        <Button className="sendBtn" htmlType="submit">
          SEND
        </Button>
      </Form>
    </div>
  );
};
