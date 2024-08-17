import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./register.css";

function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (confirmPassword.current.value !== password.current.value) {
      password.current.setCustomValidity("Password doesn't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        // confirmPassword:confirmPassword.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/login")
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social</h3>
          <span className="loginDesc">Connect with friends</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
            <input
              placeholder="Username"
              type="text"
              className="loginInput"
              ref={username}
              required
            />
            <input
              placeholder="Email"
              type="email"
              className="loginInput"
              ref={email}
              required
            />
            <input
              placeholder="Password"
              type="password"
              className="loginInput"
              ref={password}
              minLength="6"
              required
            />
            <input
              placeholder="Confirm Password"
              type="password"
              className="loginInput"
              ref={confirmPassword}
              required
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <span className="loginForgot">Already have Account?</span>
            <button className="registerButton">Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
