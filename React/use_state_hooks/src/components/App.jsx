import React, {useState} from "react";

function App() {
    const [count,setCount] = useState(0)

    function Increase() {

        setCount(count+1);
    };
    function Decrease() {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    
    function Reset(){
        setCount(0)
    }
    return <div className ="container">
        <h1>{count}</h1>
        <button onClick={Increase}>+</button>
        <button onClick={Decrease}>-</button>
        <button onClick={Reset}>AC</button>
    </div>


}

export default App;
