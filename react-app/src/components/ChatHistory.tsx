import React, { useEffect, useRef } from "react";

import Message from "./Message";

import { ChatHistoryProps } from "../types/chat-history";

const ChatHistory: React.FC<ChatHistoryProps> = ({ chatHistory, userName }) => {
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [chatHistory]);
  
  let index = 1;
  const messages = chatHistory.map((msg: any) => {
    index++;
    return (
      <div
        key={index}
        style={{
          display: "flex"
        }}
      >
        <Message key={index} message={msg.data} user={userName} />
      </div>
    );
  });

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "5px",
        overflowY: "scroll",
        scrollbarWidth: "none",
      }}
    >
      {messages}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatHistory;
