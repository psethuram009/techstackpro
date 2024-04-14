import React, {useState} from 'react';



function App() {
    // const [fName,setFname]= useState("")  not recommendable

    // const [lName,setLname]= useState("")

    // function updatefName(event){
    //     const firstName= event.target.value;
    //     setFname(firstName)

    // }
    // function updatelName(event){
    //     const lastName= event.target.value;
    //     setLname(lastName)


    const [contact, setContact]= useState({
        fName:"",
        lName:"",
        email:""
    });

    function handleChange(event){
        // const newValue= event.target.value;
        // const inputName=event.target.name;      Object destructuring
        const {value, name}= event.target;


        setContact(prevName=>{
          return {...prevName,[name]:value}
            // this can be written useing spread operator or as below

            // if (name ==="fName"){
            //     return{
            //         fName : value,
            //         lName : prevName.lName,
            //         email : prevName.email
            //     }
            // }else if (name === "lName"){
            //     return{
            //         fName : prevName.fName,
            //         lName : value,
            //         email : prevName.email
            //     }
            // } else if (name === "email"){
            //   return {
            //         fName : prevName.fName,
            //         lName : prevName.lName,
            //         email : value

            //   }
            // }
        })
    }

  return (
    <div className="container">
      <h1>Hello {contact.fName} {contact.lName}</h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" onChange={handleChange} placeholder="First Name" value={contact.fName} />
        <input name="lName" onChange={handleChange} placeholder="Last Name" value={contact.lName}/>
        <input name="email" onChange={handleChange} placeholder="Email" value={contact.email}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
