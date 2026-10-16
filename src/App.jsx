import Login from "./login";
import Home from "./Home";

import{BrowserRouter as Router,Routes,Route}
from 'react-router-dom';
import {useState} from "react";

function App(){
    const [Flag,setFlag]=useState(true);
  
    let changePage=()=>{
        setFlag(false);
    }
    if(Flag){
        return(
        <div className="container">
        <h4> "my react app" </h4>
        <Login cp={changePage}/>

        </div>
        )

    }else{
        return(
    <div className="container">
        <Router>
        <Routes>
            <Route path="" element={<Home/>}></Route>
            <Route path="register" element={<Register/>}></Route>
            <Route path="search" element={<Search/>}></Route>
            <Route path="delete" element={<Delete/>}></Route>
            <Route path="employee" element={<Employee/>}></Route>
        </Routes>
        </Router>
    </div>
        )
}
}
export default App;
