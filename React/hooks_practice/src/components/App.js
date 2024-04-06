import React,{useState} from "react";

function App() {
    
    setInterval(getTime,1000);

    let time = new Date().toLocaleTimeString();

    const [count,setCount]= useState(time);

    function getTime(){
        const newTime= new Date().toLocaleTimeString();
        setCount(newTime)
        // console.log(count)
    }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
