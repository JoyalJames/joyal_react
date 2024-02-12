import { useEffect, useState } from "react";
const User = ()=>{
    const [count] = useState(0);
    useEffect(()=>{
        const timer = setInterval(() => {
            console.log("time")
        }, 1000);
        return ()=>{
            clearInterval(timer)
        }
    },[])
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