import React from "react";

const ChatInput = ({ send, handleInput, inputMsg }) => {
  console.log('444 - ChatInput')
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "16px",
      }}
    >
      <input
        style={{
          flex: 1,
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          marginRight: "8px",
          marginLeft: "8px",
        }}
        onKeyDown={(event) => {
          if (event.keyCode === 13) send();
        }}
        onChange={handleInput}
        value={inputMsg}
      />

      <button
        style={{
          padding: "8px 16px",
          backgroundColor: inputMsg === "" ? "#ccc" : "#4caf50",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginRight: "8px",
        }}
        onClick={send}
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
