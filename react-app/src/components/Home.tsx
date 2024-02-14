import React, { useState, useEffect } from "react";
import ChatInput from "./ChatInput";
import ChatHistory from "./ChatHistory";

import { connect, sendMsg } from "../services/web-socket";

import { HomeProps } from "../types/home";

const HomeComponent: React.FC<HomeProps> = ({nameProp}) => {
  const [chatHistory, setChatHistory] = useState([] as any);
  const [inputMsg, setInputMsg] = useState("");
  const [name, setName] = useState(nameProp);

  const handleChatHistory = (msg: string) => {
    console.log("APP---->handleChatHistory msg1111", msg);
    const newChatHistory = [...chatHistory, msg];
    setChatHistory(newChatHistory);
  };

  useEffect(() => {
    console.log("useEffect", name);
    if (name) {
      connect(handleChatHistory, name)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, chatHistory]);

  const handleInput = (event: any) => {
    setInputMsg(event.target.value);
  };

  const send = () => {
    if (inputMsg === "") return;
    sendMsg(inputMsg, nameProp, 1);
    setInputMsg("");
  };
  

  console.log('chatHistory---->', chatHistory)
  return (
    <div className="container">
      <ChatHistory chatHistory={chatHistory} userName={nameProp} />
      <div style={{ width: "50%", marginLeft: "auto", position: "absolute", bottom: "50px" }}>
        <ChatInput send={send} handleInput={handleInput} inputMsg={inputMsg} />
      </div>
    </div>
  );
};

export default HomeComponent;

