import express from "express";
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to my page</h1>");
})

app.get('/about',(req,res)=>{
    res.send("<h2>Im a Professional Developer</h2>")
})

app.get('/contact',(req,res)=>{
    res.send("<h3>Please reach me out at 516846465465</h3>")
})
app.listen(port, ()=>{
    console.log(`Server is running in ${port}.`);    
})