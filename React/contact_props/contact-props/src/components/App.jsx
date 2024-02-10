import React from "react";
import Card from "./Card";
import contacts from "../contact";
// import Avatar from "./Avatar";

function CreateCard(contacts){
    return (
    <Card 
    id={contacts.id}
        key ={contacts.id}
        name={contacts.name}
        img={contacts.imgURL}
        tel={contacts.phone}
        email={contacts.email}
    />)
}
function App(props){
    return (
        <div>
            <h1 className= "heading">My Contacts</h1>
            {/* <Avatar img ="https://media.licdn.com/dms/image/D5603AQH2-aDfzpoHHQ/profile-displayphoto-shrink_800_800/0/1683838008075?e=2147483647&v=beta&t=mXgouqOoMQr1ycJbAuodEkW7R_LXRO3XznpPj0iPfSA"/> */}
            {contacts.map(CreateCard)}

          {/* <Card 
                name={contacts[0].name} // this not recommended programming
                img={contacts[0].imgURL}
                tel= {contacts[0].phone}
                email= {contacts[0].email}
            />
            <Card 
                name={contacts[1].name}
                img={contacts[1].imgURL}
                tel= {contacts[1].phone}
                email= {contacts[1].email}
            />
            <Card 
                name={contacts[2].name}
                img={contacts[2].imgURL}
                tel= {contacts[2].phone}
                email= {contacts[2].email}
            /> */}
            <div class="spinner"></div>
        </div>
    )
}

export default App;

