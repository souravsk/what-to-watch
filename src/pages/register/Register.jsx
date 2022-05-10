import { useRef, useState } from "react"
import "./register.scss"

export default function Register() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleStart = () =>{
        setEmail(emailRef.current.value);
    }
    const handleFinish = () => {
        setPassword(passwordRef.current.value);
    }
  return (
    <div className="register">
        <div className="top">
            <div className="wrapper">
            <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" alt="netfilx"/>
            <button className="loginButton">Sign In</button>
            </div>
        </div>
        <div className="container">
            <h1>Unlimited movies, TV Shows, and More</h1>
            <h2>Watch Anywhere</h2>
            <p>
                Ready to watch? Enter you Email to Create OR Restart Your membership.
            </p>
            { !email ? (
            <div className="input">
                <input type= "email" placeholder="email address" ref={emailRef}/>
                <button className="registerButton" onClick={handleStart}>Get Started</button>
            </div>
            ) : (
                <form className="input">
                <input type= "password" placeholder="password" ref={passwordRef}/>
                <button className="registerButton" onClick={handleFinish}>Let's Go</button>
            </form>
            )}
        </div>
    </div>
  )
}
