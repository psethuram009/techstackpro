import React from "react";
import Avatar from "./Avatar";
import Telinfo from "./telinfo";
import Mailinfo from "./mailinfo";

function Card(props){
    return (
        <div className = "card">
                <div className="top">
                    <p>{props.id}</p>
                    <h2 className="name">{props.name}</h2>
                    <Avatar img={props.img}/>
                </div>
                <div className="bottom">
                    <Telinfo phonenumber={props.tel}/>
                    <Mailinfo mailid={props.email}/>
                </div>
        </div>
    )
}

export default Card;
