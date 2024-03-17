import React from "react";
import Login from "./login";

var userRegistered= true;

function Form() {
   return <Login isregisteredIn ={userRegistered}/>
}

export default Form;
