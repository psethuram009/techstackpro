// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// // import App from './App';
// // import reportWebVitals from './reportWebVitals';
// const fname ="Sethu";
// const lname="ram"
// const Mylucknum= Math.floor(Math.random()*9)+1;


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>
//   <div>
//     {/* <h1>Hello {fname +" "+ lname}</h1> */}
//     {/* can also be written using ES6 template literals as JS */}
//     <h1>Hello {`${fname} ${lname}`}</h1>
//     <p>Your lucky number is {Mylucknum}</p>
//   </div>
  
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();

import React from "react";
import ReactDom from "react-dom/client";

const root = ReactDom.createRoot(document.getElementById('root'));
const date = new Date("October 13, 2014 13:13:00");
const currentTime = date.getHours();

let greeting;

const customStyle ={
  color:""
};

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

root.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);