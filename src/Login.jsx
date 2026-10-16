
import {useState} from "react";
import UserList from "./Util/UserList";

 function Login(props){
    const[name,setName]=useState("");
    const[password,setPassword]=useState(" ");
   
    let {cp}=props;
    let showHome=()=>{
        let usr=UserList.find(e=>.name==name&& e.password==password);
        if(usr){
            cp();
        }else{
            setMessage("Invalid username or password")    
        }
    }


    return(
        <div className="container">
            <h3>Login Page</h3>
            
            Name: <input onChange={(e)=>setName(e.target.value)} type="text" className="form-control" />
            Password: <input onChange={(e)=>setPassword(e.target.value)}  type="password" className="form-control"/>
            <button onClick={()=>showHome()} className = "btn btn-primary">login</button>
        </div>
    )

}

export default Login;