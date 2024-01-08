import inquirer from "inquirer";
import qr from 'qr-image';
import fs from 'fs';


// use inquirer module to get user input
inquirer
  .prompt([{
    /* Pass your questions in here */
    message:"Type the URL",
    name:"URL"
}
  ])


  // use the qr-image npm package to turn the URL into the qr image.
  // creat a txt file to store the user input using native fs module
  
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url=answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
    fs.writeFile('url.txt',url,(err)=>{
            if (err) throw err;
            console.log(url);
        });

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  