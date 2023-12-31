import DogPicture from "./dogpic.jsx";
import { createChatBotMessage, createCustomMessage } from "react-chatbot-kit";
import CustomMessage from "./customMessage.jsx";
let botName = "gooey";
const config = {
  botName: botName,
  lang: "no",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#000000",
    },
    chatButton: {
      backgroundColor: "#000000",
    },
  },
  initialMessages: [
    createChatBotMessage(
      `Hi I'm ${botName}. ’m here to help you explain how I work. You can include word "video" in messaage to get video reponse or "audio" for audio with your normal message`,
    ),
  ],
  state: {
    gist: "",
    infoBox: "",
  },
  customComponents: {},
  customMessages: {
    custom: (props) => <CustomMessage {...props} />,
    mapStateToProps: ["link"],
  },
  widgets: [],
};

export default config;
