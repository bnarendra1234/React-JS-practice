import "./Title.css";
import {useState} from "react";


function Title()  {

    var array= useState("React JS from Google");

    //array =[variable,setter-function]

    //array[0]  --to access first element
   

    function updateState()
    {
        array[1]("React JS a front end library based on JS");
    }
    return  ( <div className="title-container">

        <h1> {array[0]}</h1>
        <br/>
        <button onClick={updateState}>Change Content</button>

    </div>
    
    );
}


export default Title;