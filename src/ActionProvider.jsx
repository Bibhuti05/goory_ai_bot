import React from "react";
import { createChatBotMessage, createCustomMessage } from "react-chatbot-kit";
import CustomMessage from "./customMessage";

let payload = {
  input_prompt: "hello",
};

async function gooeyAPI() {
  const response = await fetch(
    "https://api.gooey.ai/v2/video-bots/?example_id=ehsu8hb8",
    {
      method: "POST",
      headers: {
        Authorization:
          "Bearer " + "sk-UM5YIdfPN96Hw7gIa7gFryxIhNFkKwDiAxdpL8gll9gkEqUp",

        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    },
  );

  if (!response.ok) {
    throw new Error(response.status);
  }

  const result = await response.json();
  console.log(response.status, result);
  return result;
}

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  async function handel_response(message) {
    payload = {
      input_prompt: message,
    };
    let botMessage;
    let response_from_bot = await gooeyAPI();
    if (message.includes("audio")) {
      botMessage = createCustomMessage("Test", "custom", {
        payload: [response_from_bot.output.output_video[0], true],
      });
    } else if (message.includes("video")) {
      console.log("preparing video");
      botMessage = createCustomMessage("Test", "custom", {
        payload: [response_from_bot.output.output_video[0], false],
      });
    } else {
      console.log(response_from_bot);
      botMessage = createChatBotMessage(response_from_bot.output.output_text);
    }
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handel_response,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
