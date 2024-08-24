import {
  Avatar,
  Button,
  Divider,
  MenuItem,
  TextField,
  useRadioGroup,
} from "@mui/material";
import "./personalInfo.css";
import { Camera, Person, PhotoCameraOutlined } from "@mui/icons-material";
import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
const rel = [
  { id: 1, value: "Single" },
  {
    id: 2,
    value: "Married",
  },
  {
    id: 3,
    value: "Prefer Not to Say",
  },
];
function PersonalInfo() {
  const { user } = useContext(AuthContext);
  console.log(user._id);
  const username = useRef();
  const desc = useRef();
  const city = useRef();
  const from = useRef();
  const relationship = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/users/${user._id}`, {
        userId: user._id,
        username: username.current.value,
        desc: desc.current.value,
        city: city.current.value,
        from: from.current.value,
        relationship: relationship.current.value,
      });
    } catch (err) {
      console.log(err);
    }
    // const user = {
    //   username: username.current.value,
    //   desc: desc.current.value,
    //   city: city.current.value,
    //   from: from.current.value,
    //   relationship: relationship.current.value,
    // };
  };
  return (
    <div className="personalInfo">
      <h1>Personal Info</h1>
      <div className="profilePicture">
        <Avatar sx={{ width: 120, height: 120, marginBottom: 1 }} />
        <PhotoCameraOutlined />
      </div>
      <div className="coverPicture">
        <img src="" alt="" />
        <PhotoCameraOutlined />
      </div>
      <form className="personalInfoInput" onSubmit={handleSubmit}>
        <Divider />
        <input
          placeholder="Username"
          type="text"
          className="loginInput"
          ref={username}
          required
        />
        <input
          placeholder="Description"
          type="text"
          className="loginInput"
          ref={desc}
          required
        />
        <input
          placeholder="From"
          type="text"
          className="loginInput"
          ref={from}
          required
        />
        <input
          placeholder="City"
          type="text"
          className="loginInput"
          ref={city}
          required
        />
        <input
          placeholder="Relationship"
          type="text"
          className="loginInput"
          ref={relationship}
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default PersonalInfo;
