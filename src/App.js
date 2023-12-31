import "./styles.css";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import config from "./config.js";
import MessageParser from "./MessageParser.jsx";
import ActionProvider from "./ActionProvider.jsx";

import React, { useState } from "react";
import { ReactComponent as Logo } from "./logo.svg";
import { ReactComponent as ButtonIcon } from "./robot.svg";

const saveMessages = (messages, HTMLString) => {
  localStorage.setItem("chat_messages", JSON.stringify(messages));
};

const loadMessages = () => {
  const messages = JSON.parse(localStorage.getItem("chat_messages"));
  return messages;
};

const MyComponent = () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        messageHistory={loadMessages()}
        saveMessages={saveMessages}
      />
    </div>
  );
};
export default function App() {
  const [showChatbot, toggleChatbot] = useState(true);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button
        className="app-chatbot-button"
        onClick={() => toggleChatbot((prev) => !prev)}
      >
        <ButtonIcon className="app-chatbot-button-icon" />
      </button>
      <div className="widgetone">{showChatbot && <MyComponent />}</div>
    </div>
  );
}
