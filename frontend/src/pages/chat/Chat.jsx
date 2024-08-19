import ChatRightbar from "../../components/chatRightbar/ChatRightbar";
import ChatSidebar from "../../components/chatSidebar/ChatSidebar";
import Topbar from "../../components/topbar/Topbar";
import "./chat.css";

function Chat() {
  return (
    <>
      <Topbar />
      <div className="chatContainer">
        <ChatSidebar />
        <ChatRightbar />
      </div>
    </>
  );
}

export default Chat;
