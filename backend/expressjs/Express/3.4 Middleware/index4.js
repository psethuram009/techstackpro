import express from "express";
import bodyParser from "body-parser";
import {dirname} from  "path";
import { fileURLToPath } from "url";
const app = express();
const port = 3000;
var bandname="";
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({extended:true}));

function bandNameGenerator(req,res,next){
  console.log(req.body);
  bandname=req.body["street"]+req.body["pet"];
  next();
}
// you have two input fields with the name attributes "street" and "pet." When you submit the form, 
//the data from these fields will be included in the req.body object with the field names as the keys.
app.use(bandNameGenerator);

app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/public/index.html")
})

app.post("/submit",(req,res)=>{
  // // console.log(req.body);
  // const {street,pet}= req.body;
  // const ConcatenatedInput = street+pet;
  // console.log(ConcatenatedInput);
  // res.send(`<h1> Your BandName is </h1><h2>${ConcatenatedInput}✌️</h2>`);
  res.send(`<h1>Your band name is:</h1><h2>${bandname}✌️</h2>`);
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
