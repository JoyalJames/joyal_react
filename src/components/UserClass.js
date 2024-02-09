import React from "react"
class UserClass extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props.name + "Child Constructor")
        this.state = {
            count : 0,
            count2 : 1
        };
    }
    componentDidMount(){
        console.log(this.props.name + "Child Component Did Mount")
    }
    render(){
        console.log(this.props.name + "Child Render")
        return(
            <div className="about_user">
                <h1>{this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count : this.state.count + 1
                    })
                }}>Count +</button>
                <h1>Name  :  {this.props.name}</h1>
                <h2>Location  :  Kottayam</h2>
                <h2>Contact  :  @joyaljames</h2>
            </div>
        )
    }
}
export default UserClass