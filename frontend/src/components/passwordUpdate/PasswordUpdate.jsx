import { useContext, useRef } from "react";
import "./passwordUpdate.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function PasswordUpdate() {
  const { user } = useContext(AuthContext);
  const oldPassword = useRef();
  const newPassword = useRef();
  const confirmNewPassword = useRef();

  console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPassword = {
      password: newPassword.current.value,
      userId: user._id,
    };
    try {
      if (newPassword.current.value === confirmNewPassword.current.value) {
        await axios.put(`/users/${user._id}`, updatedPassword);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="updatePassword">
      <h1>Change Profile Password</h1>

      <form className="updatePasswordForm" onSubmit={handleSubmit}>
        {/* <input
          placeholder="Old Password"
          type="password"
          className ="updatePasswordInput"
          ref={oldPassword}
        /> */}
        <input
          placeholder="New Password"
          type="password"
          className="updatePasswordInput"
          ref={newPassword}
        />
        <input
          placeholder="Confirm New Password"
          type="password"
          className="updatePasswordInput"
          ref={confirmNewPassword}
        />

        <div className="Submit">
          <button type="submit" className="submitBtn">
            Update Password
          </button>
        </div>
      </form>
    </div>
  );
}

export default PasswordUpdate;
