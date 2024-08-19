import { EmojiEmotions, MoreVert, Send } from "@mui/icons-material";
import { useRef, useState } from "react";
import "./chatRightbar.css";
import ChatContent from "../chatContent/ChatContent";
function ChatRightbar() {
 
  

  return (
    <div className="chatRightbar">
      <div className="chatRightbarWrapper">
        <div className="chatViewTop">
          <img src="/assets/person/1.jpeg" alt="" className="chatTopUserImg" />
          <div className="chatViewTopText">
            <span className="chatViewTopName">Indira</span>
            <span className="chatViewLastSeen">last seen 12 pm.</span>
          </div>
          <MoreVert />
        </div>
        <ChatContent/>
        <div className="chatViewBottom">
          <form className="chatViewInputContainer" >
            <div className="emoji">
              <EmojiEmotions />
            </div>
            <input
              type="text"
              placeholder="Type Something..."
              className="chatViewInput"
              
            />
            <button className="chatViewShareBtn" type="submit">
              <Send />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChatRightbar;
