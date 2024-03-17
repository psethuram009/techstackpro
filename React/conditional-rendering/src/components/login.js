import React from "react";
import Input from "./input";

function Login(props) {
    
    return <form className="form">
      <Input type ="text" placeholder="Username"/>
      <Input type ="password" placeholder="Password"/>
      {!props.isregisteredIn && (
        <Input type = "password" placeholder="Confirm Password"/>)}
      
      <button type="submit">{props.isregisteredIn ? "Login":"Register"}</button>
    </form>
}

export default Login;

