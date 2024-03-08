import {Component} from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
class About extends Component {
  constructor(props){
    super(props)
    //console.log("parent constructor");
    
  }
  componentDidMount(){
    //console.log("parent did mount");
    
  }
  render() {
    console.log("parent render");
     return(
      <>
      <div>About😅</div> 
      <div>Logged inuser

        <UserContext.Consumer>{({loggedInUser})=><h1>{loggedInUser}</h1>}</UserContext.Consumer>
      </div>
      <User  />
      {/* <UserClass name={"first"} /> */}
      {/* <UserClass name={"second"} /> */}

  
    </>
     )

  }
}
export default About;

// const About = () => {

//   return(
//    <>
//     <div>About😅</div>
//     <User name={"prateek function()"}/>
//     <UserClass name={"parteek class"}/>
//    </>
//   )
// };

//!life cycle 
// parent constructor
// About.jsx:16 parent render
// UserClass.jsx:9 firstchild constructor
// UserClass.jsx:9 secondchild constructor
// UserClass.jsx:14 firstchild didmount
// UserClass.jsx:14 secondchild didmount
// About.jsx:12 parent did mount
