import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
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
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button onClick={()=>{
                    state === "Login" ? setState("Logout") : setState("Login")
                }}>{state}</button>
            </ul>
        </div>
    </div>
    )
}
export default Header;