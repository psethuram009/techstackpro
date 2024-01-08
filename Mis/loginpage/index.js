import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

// Serve the HTML login page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  // console.log(__dirname + '/index.html');
});

// Handle POST request for login
app.post('/login', (req, res) => {
  // const { username, password } = req.body;object destructuring 
  const {username}= req.body;
  const {password}= req.body;

  // Replace this with your actual authentication logic
  if (username === 'user' && password === 'password') {
    res.send('Login successful!');
  } else {
    res.send('Login failed. Please check your username and password.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
