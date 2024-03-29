// import express from "express";
// import bodyParser from "body-parser";

// const app = express();
// const port = 3000;

// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   // const data ={
//   //   fname :"fname",
//   //   lname :"lname",
//   // }
//   // var fullName= fname.length + lname.length;
//   // res.locals={data: fullName}
//   res.render("index.ejs");
// });

// app.post("/submit", (req, res) => {
//   const numLetters = req.body["fName"].length + req.body["lName"].length;
//   console.log(numLetters);
//   console.log(req.body);
//   res.locals.numLetters;
//   res.render("index.ejs",{NumberofLetters:"numLetters"});
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

import express from "express";
import bodyParser from "body-parser";


const app = express();

const port=3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
  res.render("index.ejs");
})

app.post("/submit",(req,res)=>{
  // console.log(req.body)
  const numLetters=req.body["fName"].length+req.body["lName"].length;
  res.render("index.ejs",{numberofLetters:numLetters});
});

app.listen(port, ()=>{
  console.log(`Server is running on ${port}:`)
})