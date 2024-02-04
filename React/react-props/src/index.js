import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Card(props) {
  return (
    <div className="card">
      <img className="avatar" src={props.img} alt="avatar_img" />
      <div className="info">
        <h2>{props.name}</h2>
        <p>{props.tel}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
}

function handleClick(){
  window.location.href="https://www.google.com/"
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1 className="title" onClick={handleClick}>My Contacts</h1>
    <div className="page-container">
    <div className="card-container">
      <Card
        name="Beyonce"
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg
        "
        tel="+123 456 789"
        email="b@beyonce.com"
      />
      <Card
        name="Jack Bauer"
        img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        tel="+123 456 789"
        email="b@bauer.com"
      />
      <Card
        name="Norris"
        img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        tel="+123 456 789"
        email="b@norris.com"
      />
    </div>
    </div>
  </React.StrictMode>
);
