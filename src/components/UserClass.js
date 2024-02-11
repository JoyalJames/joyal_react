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

        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        console.log(json)

        this.setState({
            useInfo:json,
        })
    }
    componentDidUpdate(){

    }
    componentWillUnmount(){
        
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