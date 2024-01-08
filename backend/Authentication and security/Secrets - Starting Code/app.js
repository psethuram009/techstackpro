import dotenv from 'dotenv';
import express from "express";
import pg from 'pg';
import md5 from 'md5';

// dotenv.config();
const app = express();
const port ="3000";
const db =new pg.Client({
        user: "postgres",
        host: "localhost",
        database: "secrets",
        password: "Thunder@009",
        port: 5432,
});
db.connect();
app.use(express.json());
app.use(express.urlencoded({extented:true}));
app.set('view engine', 'ejs'); 
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
})

app.get("/register",(req,res)=>{
    res.render("register.ejs");
})

app.get("/login",(req,res)=>{
    res.render("login.ejs");
})

app.get("/logout",(req,res)=>{
    res.render("home.ejs");
})

app.get("/submit",(req,res)=>{ // requesting so we need to use "get request"--> not submitting
    res.render("submit.ejs");
})

app.post("/submit",(req,res)=>{
    const storedsecret= req.body.secret;


});


// app.post("/register",async(req,res)=>{
//     const email= req.body.username;
//     const password = req.body.password;

//     try{
//         const values=await db.query(" INSERT INTO userschema (username,password) VALUES ($1,$2) RETURNING *",[email,password]); // returning * is used to log the values 
//         console.log("inserted values:",values.rows[0])


//          res.render("secrets.ejs");
//     }catch{
//         console.error("Error occured while inserting values into the database:",error);
//     };


// });

// app.post("/login",async(req,res)=>{
//     const email = req.body.username;
//     const password =  req.body.password;

//     try {
//         const result = await db.query("SELECT * FROM userschema WHERE username=$1",[email]);
//         console.log("selected from",result.rows[0]);
//         if(result.rows.length>0){
//             const user = result.rows[0];
//             const storedPassword = user.password;

//             if (password === storedPassword){
//                 res.render("secrets");
//             } else{
//                 res.send("Incorrect passowrd");
//             };
//         }else{
//             res.send('USER NOT FOUND')
//         };

//     } catch (error) {
//         console.error("Error occured during the login:",error);
//         res.send("Error during login!")
//     }
// })


// Database encrytion 

// app.post("/register", async (req, res) => {
//     const email = req.body.username;
//     const password = req.body.password;
//     try {
//         const passcode=await db.query("INSERT INTO users (username, password) VALUES ($1, pgp_sym_encrypt(($2), ($3))) RETURNING *", [email, password, process.env.SECRETKEY]);// RETURNING clause is used to when we want to retreive the values of the inserted row
        
//         console.log("encrytion is :",passcode.rows[0]);
//         res.render("secrets.ejs");
//     } catch (err) {
//         console.log(err.message);
//     };
    
// })

//hashing 
app.post("/register", async (req, res) => {
        const email = req.body.username;
        const password = md5(req.body.password);
        try{
            const values=await db.query(" INSERT INTO userschema (username,password) VALUES ($1,$2) RETURNING *",[email,password]); // returning * is used to log the values 
            console.log("inserted values:",values.rows[0])
                        
            res.render("secrets.ejs");
        }catch{
            console.error("Error occured while inserting values into the database:",error);
        };
        
});
// flaw in this
// app.post("/login", async (req, res) => {
//     const email = req.body.username;
//     const password = req.body.password;
//     try {
//         const result = await db.query("SELECT username, pgp_sym_decrypt(password, ($1)) AS password FROM users WHERE username=($2)", [process.env.SECRETKEY, email]);
//         console.log("decryption:",result.rows[0]);
//         const user = result.rows[0];
//         console.log(user);
//         if (user.password == password) {
//             res.render("secrets.ejs");
//         };
//     } catch (err) {
//         console.log(err.message);
//     };
// });
// decryption
// app.post("/login", async (req, res) => {
//     const email = req.body.username;
//     const password = req.body.password;

//     try {
//         const result = await db.query("SELECT username, pgp_sym_decrypt(password, $1) AS decrypted_password FROM users WHERE username = $2", [process.env.SECRETKEY, email]);

//         if (result.rows.length > 0) {
//             const user = result.rows[0];
//             const decryptedPassword = user.decrypted_password;
//             console.log("Decrypted password:", decryptedPassword);
//             console.log("Provided password:", password);


//             if (decryptedPassword === password) {
//                 console.log("Login successful. Rendering secrets.ejs");
//                 res.render("secrets.ejs");
//             } else {
//                 console.log("Incorrect password. Rendering login.ejs with error message.");
//                 res.render("login.ejs", { errorMessage: "Incorrect password" });
//             }
//         } else {
//             console.log("User not found. Rendering login.ejs with error message.");
//             res.render("login.ejs", { errorMessage: "User not found" });
//         }
//     } catch (err) {
//         console.error("Error during login:", err.message);
//         res.render("error.ejs", { errorMessage: "Error during login" });
//     }
// });
//hashing
app.post("/login",async(req,res)=>{
        const email = req.body.username;
        const password =  md5(req.body.password);
    
        try {
            const result = await db.query("SELECT * FROM userschema WHERE username=$1",[email]);
            console.log("selected from",result.rows[0]);
            if(result.rows.length>0){
                const user = result.rows[0];
                const storedPassword = user.password;
    
                if (password === storedPassword){
                    res.render("secrets");
                } else{
                    res.send("Incorrect passowrd");
                };
            }else{
                res.send('USER NOT FOUND')
            };
    
        } catch (error) {
            console.error("Error occured during the login:",error);
            res.send("Error during login!")
        }
});


app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
});