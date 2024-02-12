import React from "react"
class UserClass extends React.Component {
    constructor(props){
        super(props);
        // console.log(this.props.name + "Child Constructor")
        this.state={
            useInfo:{
                name:"Dummy",
                location:"Default",
                avatar_url :""
            }
        }
    }
    async componentDidMount(){
        // console.log(this.props.name + "Child Component Did Mount")

       this.timer = setInterval(()=>{
        console.log("Timingg")
       },1000)
    }
    componentDidUpdate(){

    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render(){
        // console.log(this.props.name + "Child Render")
        return(
            <div className="about_user">
                <h1>{this.state.count}</h1>
                
                <h1>Name  :  {this.state.useInfo.name}</h1>
                <img src={this.state.useInfo.avatar_url}/>
                <h2>Location  :  Kottayam</h2>
                <h2>Contact  :  @joyaljames</h2>
            </div>
        )
    }
}
export default UserClass