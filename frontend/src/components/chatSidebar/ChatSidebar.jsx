import { useContext, useEffect, useState } from "react";
import "./chatSidebar.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function ChatSidebar() {
  const [friends, setFriends] = useState([]);
  const { user: currentUser } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // console.log(currentUser)

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + currentUser._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [currentUser]);
  // console.log(friends)

  const handleChatView=()=>{
    console.log("")
  }

  return (
    <div className="chatSidebar">
      <div className="chatSidebarWrapper">
        <ul className="chatSidebarList">
          {friends.map((friend) => (
            <>
              <li key={friend._id} className="chatSidebarListItem" >
                <img
                  src={friend.profilePicture? PF+friend.profilePicture:PF+"person/noAvatar.png"}
                  alt=""
                  className="chatSidebarListItemImg"
                />
                <span className="chatSidebarListItemText">
                  {friend.username}
                </span>
              </li>
              <hr className="ChatSidebarHr" />
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ChatSidebar;
