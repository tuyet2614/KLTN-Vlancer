import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";

const CustomStep = (props: any) => {
  const [textSearch, setTextSearch] = useState("");
  console.log("text: ", textSearch);

  return (
    <div>
      <h3>{props.question}</h3>
      <input type="text" onChange={(e: any) => setTextSearch(e.target.value)} />
      <button onClick={() => props.triggerNextStep({ trigger: textSearch })}>
        Submit
      </button>
    </div>
  );
};

const steps = [
  {
    id: "1",
    message: "Welcome to our chatbot! What can I help you with today?",
    trigger: "2",
  },
  {
    id: "2",
    user: true,
    trigger: "3",
  },
  {
    id: "ngoc minh",
    message: "welcom ngoc minh",
    trigger: "5",
  },
  {
    id: "anh linh",
    message: "hello anh linh?",
    trigger: "5",
  },
  {
    id: "ha nhi",
    message: "xin chao ha nhi?",
    trigger: "5",
  },
  {
    id: "3",
    component: <CustomStep question="What is your name?" />,
    trigger: "4",
  },
  {
    id: "4",
    message: "Nice to meet you! I'm a chatbot. How can I assist you further?",
    trigger: "5",
  },
  {
    id: "5",
    user: true,
    trigger: "6",
  },
  {
    id: "6",
    message:
      "I'm sorry, I don't understand. Can you please rephrase your question?",
    trigger: "5",
  },
];

const Chatbot = () => <ChatBot steps={steps} />;

export default Chatbot;
