import "../style.scss";
import { useNavigate } from "react-router-dom";
import Message from "./message";

import ScrollToBottom from "react-scroll-to-bottom";

interface Props {
  messages: any;
  lastMessageRef: any;
  typingStatus: any;
  username: any;
}

export const ChatBody = ({
  messages,
  lastMessageRef,
  typingStatus,
  username,
}: Props) => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    navigate("/");
    window.location.reload();
  };
  const scrollToBottom = () => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <header className="chat__mainHeader">
        <p>Hangout with Colleagues</p>
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          LEAVE CHAT
        </button>
      </header>

      {/*This shows messages sent from you*/}
      <div className="message__container">
        {messages.map((message: any, i: any) => (
          <ScrollToBottom key={i}>
            <div key={i} ref={lastMessageRef}>
              <Message message={message} username={username} />
            </div>
          </ScrollToBottom>
        ))}

        {/*This is triggered when a user is typing*/}
        <div className="message__status">
          <p>{typingStatus}</p>
        </div>
      </div>
    </>
  );
};
