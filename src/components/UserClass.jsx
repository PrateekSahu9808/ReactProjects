import React from "react"
class UserClass extends React.Component {
    constructor(props){
        super(props)
        this.state={
            count:0,
            count2:2,
            userInfo:{
                name:"",
                location:"",
                avatar_url:""

            }
        }
       // console.log(this.props.name+"child constructor");
   
        
    }
  async  componentDidMount(){

       // console.log(this.props.name+"child didMount");
        const data = await fetch("https://api.github.com/users/PrateekSahu9808")
        const json = await data.json()
        this.setState({
             userInfo:json
        })
        console.log(json);
        
    }
   
    componentDidUpdate(prevProps,prevState){

        // this.timer=setInterval(()=>{
        //     console.log("namste react");
            
        // },1000)
        // if(this.state.count ===!prevState.count){
        //     //write here like 
        // }
        // if(this.state.count ===!prevState.count2){
        //     //write here like 
        // }
        // console.log(
        //     "componentn did update"
        // );
        
    }
    componentWillUnmount(){
        clearInterval(this.timer)
        console.log("components from unmounted");
        
    }
  render() {
    // const{name}=this.props
    // const {count,count2}=this.state
    const{name,location,avatar_url
    }=this.state.userInfo
//   console.log(" child render");
// console.log(this.state.userInfo);
    return (
      <>
        <div className="user-card">
            <h1>Class based</h1>
            {/* <h1>count:{count}</h1>
            <h1>count2:{count2}</h1>
            <button onClick={()=>{
                //never update state variable directly
                this.setState({
                    count:this.state.count +1
                })

            }}>count+</button> */}
          {/* <h2>Name:{name}</h2> */}
        <h1>Name:{name}</h1>
        <img src={avatar_url
} alt="" />
        {/* <h2>Location:{location}</h2> */}

        </div>
      </>
    ); 
  }
}
export default UserClass;
