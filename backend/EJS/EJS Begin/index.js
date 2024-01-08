import express from "express";

const app =express();
const port =3000;



app.get("/",(req,res)=>{
    const date = new Date();
    let day = date.getDay();

    let dtype= "a weekday";
    let adv="Its time to work hard";

    if (day === 0 || day ===6){
        dtype = "the weekend";
        adv = "lets have some fun";
    };
    res.render("index.ejs",{
        dayType: dtype, 
        advice:adv,})
})

// app.get("/",(req,res)=>{
//     res.write("<h1>hello world</h1>");
//     res.write("<h1>hello world</h1>");
//     res.write("<h1>hello world</h1>");
//     res.write("<h1>hello world</h1>");
//     res.end("<h1>thi is end</h1>");
//     res.write("<h1>hello world</h1>");
// });

app.listen(port,()=>{
    console.log(`Server is running in ${port}:`)
})