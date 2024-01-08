import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path"; // to get the URL file path
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
 // this code sets up an Express.js server, serves an HTML file at the root URL, and can handle POST requests to the "/submit" URL, 
// logging the data sent in the request body. It's a basic example of how to create a web server with Express and handle both GET and POST requests.
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true}));// is used to pass the information that coming through the form on our website 

app.get("/", (req, res) => {
  // console.log(__dirname + "/public/index.html")
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit",(req,res)=>{
  console.log(req.body);/// req.body?
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
