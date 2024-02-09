import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component{
    // 1st Contructor will load   -> then render component  -> then ComponentDidMount()
    constructor(props){
        super(props)
        console.log("Parent Constructor")
    }
    // 3rd componentDidMount()
    componentDidMount(){
        console.log("Parent Component Did Mount")
    }
    // 2nd render Component
    render(){
        console.log("Parent Render")
        return (
            <div className="about">
                <h1>About Page</h1>
                <h2>Welcome To Joyals Page</h2>
                {/* <User/> */}
                <UserClass name={"Joyal"}/>
                <UserClass name={"Hello"}/>
            </div>
        )
    }
}
//  ->Parent Constructor
//      ->Parent Render
//          ->JoyalChild Constructor
//          ->JoyalChild Render
//          ->HelloChild Constructor
//          ->HelloChild Render
//  ->JoyalChild Component Did Mount
//  ->HelloChild Component Did Mount
//-> Parent Component Did Mount
export default About;