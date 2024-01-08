//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express  from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath } from "url";


const app =express();
const port = 3000;
var userIsAuthorized =false;

const __dirname=dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended:true}));

function passwordCheck(req,res,next){
    const password =req.body.password;
    if (password === "ILoveProgramming"){
        userIsAuthorized = true;
    }
    next();
}

app.use(passwordCheck);
// app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
    // res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.post('/check',(req,res)=>{
    console.log(req.body);
    // const secret =req.body.password;
    // if (secret === "ILoveProgramming"){
    if (userIsAuthorized) {
        res.sendFile(__dirname+"/public/secret.html");
        // res.sendFile(path.join(__dirname, 'public', 'secret.html'));
    } else {
        res.sendFile(__dirname+"/public/index.html");
        //res.redirect('/);
        // res.sendFile(path.join(__dirname, 'public', 'index.html'));
    };   
})

app.listen(port,()=>{
    console.log(`server is running in port ${port}:`);
})