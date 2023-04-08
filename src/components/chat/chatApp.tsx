import React, { useEffect, useRef, useState } from "react";
import { Button, Input } from "antd";
import socketIO from "socket.io-client";
import { List } from "./List";
import { ChatBar } from "./component/chatBar";
import { ChatBody } from "./component/chatBody";
import { ChatFooter } from "./component/chatFooter";
import "./style.scss";
import { getAuthToken } from "../../untils/token";
import { useLocation } from "react-router-dom";

const ChatApp = () => {
  const locationState = useLocation();
  const { id, userData } = locationState.state;
  const [messages, setMessages] = useState<any>([]);
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState<any>([]);
  const socket = socketIO("http://localhost:1337");
  const [typingStatus, setTypingStatus] = useState("");
  const lastMessageRef: any = useRef(null);

  let welcome: any;
  useEffect(() => {
    socket.on("disconnect", () => {
      socket.off();
      location.replace("http://localhost:3000/");
      console.log("disconnected");
    });
    socket.emit("join", { userData }, (error: any) => {
      if (error) return alert(error);
    });
    socket.on("welcome", async (data: any, error: any) => {
      let welcomeMessage = {
        user: data.user,
        message: data.text,
      };
      welcome = welcomeMessage;
      setMessages([welcomeMessage]);

      await fetch("http://localhost:1337/api/messages?populate=*", {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
          "Content-Type": "application/json",
        },
      })
        .then(async (res) => {
          const response = await res.json();
          let arr = [welcome];
          response.data.map((one: any, i: any) => {
            arr = [...arr, one.attributes];
            setMessages((msgs: any) => arr);
          });
        })
        .catch((e) => console.log(e.message));
    });
    socket.on("roomData", async (data) => {
      await fetch("http://localhost:1337/api/active-users").then(async (e) => {
        setUsers(await e.json());
      });
    });

    socket.on("message", async (data: any, error: any) => {
      await fetch("http://localhost:1337/api/messages?populate=*")
        .then(async (res) => {
          const response = await res.json();
          let arr = [welcome];
          response.data.map((one: any, i: any) => {
            arr = [...arr, one.attributes];
            setMessages((msgs: any) => arr);
          });
        })
        .catch((e) => console.log(e.message));
    });
  }, [userData]);

  const sendMessage = (message: any) => {
    if (message) {
      socket.emit(
        "sendMessage",
        { message, user_id: 13, user_id_create: userData?.id },
        (error: any) => {
          if (error) {
            alert(error);
          }
        }
      );
      setMessage("");
    } else {
      alert("Message can't be empty");
    }
  };

  const handleChange = (e: any) => {
    setMessage(e.target.value);
  };
  useEffect(() => {
    socket.on("typingResponse", (data: any) => setTypingStatus(data));
  }, [socket]);

  const handleClick = () => {
    sendMessage(message);
  };
  return (
    <div className="chat">
      <ChatBar socket={socket} users={users} />
      <div className="chat__main">
        <ChatBody
          messages={messages}
          lastMessageRef={lastMessageRef}
          typingStatus={typingStatus}
          username={userData}
        />
        {/* <ChatFooter socket={socket} /> */}
        {/* <Messages messages={messages} userdata={userdata} /> */}
        <Input
          type="text"
          placeholder="Type your message"
          value={message}
          onChange={handleChange}
        />
        <Button onClick={handleClick}>
          {/* <SendIcon>
            <i className="fa fa-paper-plane" />
          </SendIcon> */}
          send
        </Button>
      </div>
    </div>
  );
};

export default ChatApp;
