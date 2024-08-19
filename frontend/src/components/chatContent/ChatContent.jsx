import { useRef, useState } from "react";
import "./chatContent.css";

function ChatContent() {
  return (
    <>
      <div className="chatViewCenter">
        <div className="ChatViewMsgSend">
          <div className="chatViewMsgSendContent">
            <p>hi</p>
          </div>
        </div>

        <div className="ChatViewMsgReceive">
          <div className="chatViewMsgReceiveContent">
            <p>dfghndij</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatContent;
