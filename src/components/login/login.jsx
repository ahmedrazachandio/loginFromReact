import "./login.css";



function Login() {
    return (
      <div className="login">
        <div className="imgBox">
        </div>
        <div className="loginBox">
            <span className="textLogin">Login to continue</span>
            <div className="emailBox">
                <span>Email</span>
                <input type="email" name="name" className="inputEmail"  />
            </div>
            <div className="passwordBox">
                <span>Password</span>
                <input type="password" name="name" className="inputPassword"  />
            </div>
                <button>Submit</button>  
        </div>
      </div>
    );
  }
  
  export default Login;
  