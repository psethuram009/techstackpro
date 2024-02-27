import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";



// function CreateNote(notes){
//   return (
//     <Note
//         key ={notes.key}
//         title={notes.title}
//         content={notes.content}
//         />
//   )
// }
function App() {
  return (
    <div>
      <Header />
      {notes.map((noteitem)=> // or we can use this arrow function ES6
    <Note
        key ={noteitem.key}
        title={noteitem.title}
        content={noteitem.content}
      />
)}
      <Footer />
    </div>
  );
}

export default App;
