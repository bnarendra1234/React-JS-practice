import "./Title.css";
import {useState} from "react";


function Newtitle()  {

    var [state,setState]= useState("React JS");
  

    function updateState()
    {
       setState("Node Js & Express JS used to develop the backend applications and Java, springBoot is used for backed application")
    }
    return  ( 
    
    <div className="title-container">

        <h1>{state} </h1>
        <br/>
        <button onClick={updateState}>Change Content</button>

    </div>
    
    );
}


export default Newtitle;