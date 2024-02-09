import { useState } from "react";
const User = ()=>{
    const [count] = useState(0);
    return (
        <div className="about_user">
            <h1>{count}</h1>
            <h1>Name  :  Joyal James</h1>
            <h2>Location  :  Bangaluru</h2>
            <h2>Contact  :  @joyaljames</h2>
        </div>
    )
}
export default User;