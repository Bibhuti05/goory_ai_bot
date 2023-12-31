import React from "react";
import ReactAudioPlayer from "react-audio-player";

const CustomMessage = ({ payload }) => {
  console.log(payload[1]);
  if (payload[1] == true) {
    return (
      <div>
        <ReactAudioPlayer className={"audiobox"} src={payload[0]} autoPlay controls />
      </div>
    );
  }
  return (
    <div>
      <iframe
        width="200"
        height=""
        src={payload[0]}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; 
  autoplay; 
  clipboard-write; 
  encrypted-media; 
  gyroscope; 
  picture-in-picture; 
  web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default CustomMessage;
