import "./login.scss"

export default function Login() {
  return (
    <div className="login">
        <div className="top">
            <div className="wrapper">
            <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" alt="netfilx"/>
            </div>
        </div>
        <div className="container">
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder="Email or Phone number"/>
                <input type="password" placeholder="Password"/>
                <button className="loginButton">Sign In</button>
                <spam>New to Netflix? <b>Sign Up Now.</b></spam>
                <small>
                    This page is protected by Google reCAPICHA to ensure you're not a bot.<b>Learn more</b>
                </small>
            </form>
        </div>
    </div>
  )
}
