import "./register.css"

function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social</h3>
          <span className="loginDesc">Connect with friends</span>

        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Confirm Password" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <span className="loginForgot">Already have Account?</span>
            <button className="registerButton">Log In</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register

