import "./login.css";



function Login() {
    return (
      <div className="login">
        <div className="imgBox">
        </div>
        <div className="loginBox">
            <span className="textLogin">Login to continue</span>
            <div className="emailBox">
                <input type="email" name="name" className="inputEmail" />
            </div>
        </div>
      </div>
    );
  }
  
  export default Login;
  