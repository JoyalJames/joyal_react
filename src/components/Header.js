import { LOGO_URL } from "../utils/constants";
import { LOGIN } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () =>{
    const [state, setState] = useState("Login");
    return(
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/contactus'>Contact U</Link>s</li>
                <li>Cart</li>
                <button className="login" onClick={()=>{
                    state === "Login" ? setState("Logout") : setState("Login")
                }}>{state}</button>
            </ul>
        </div>
    </div>
    )
}
export default Header;