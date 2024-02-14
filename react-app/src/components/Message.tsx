import React, { useState } from "react";
// import { Avatar } from "@mui/material";

interface MessageProps {
    message: string;
    user: string;
  }

const Message: React.FC<MessageProps> = ({ message, user }) => {
  console.log('333-Message')
  const [msg] = useState(JSON.parse(message));
  const username = msg.user_id;
  // const firstLetter = username?.charAt(0).toUpperCase();
  const isCurrentUser = username !== undefined && username === user;

  return (
    <div
      style={{
        padding: "4px 16px",
        borderRadius: "5px",
        // marginBottom: "8px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "16px",
        }}
      >
        {/* {msg.type !== 2 && !isCurrentUser && <Avatar>{firstLetter}</Avatar>} */}
        {msg.type !== 2 && !isCurrentUser && (
          <span
            style={{ marginLeft: "auto", color: "#7a7777", marginRight: "6px" }}
          >
            {username}:
          </span>
        )}
        <span>{msg.body}</span>
      </div>
    </div>
  );
};

export default Message;
