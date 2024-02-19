import { LOGO_URL } from "../utils/constants";
import { LOGIN } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () =>{
    const [state, setState] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return(
    <div className="position: fixed justify-between flex  bg-white w-[100%]">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Online Status : {onlineStatus ? '💚' : '💗' }</li>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/contactus'>Contact Us</Link></li>
                <li><Link to='/grocery'> Grocery</Link></li>
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