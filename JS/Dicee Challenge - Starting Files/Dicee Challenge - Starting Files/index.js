var randomNumber1 = Math.floor(Math.random()*6)+1; //1-6
var randomDiceImage= "dice"+randomNumber1+".png";//dice 1-6 png
var randomImgsrc= "./images/"+randomDiceImage;// dice src

document.querySelectorAll("img")[0].setAttribute("src",randomImgsrc);

var randomNumber2= Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice"+randomNumber2+".png";
var randomImgsrc2="./images/"+randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src",randomImgsrc2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="🚩Player1 Wins";

} else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player2 Wins!!🚩";
} else{
    document.querySelector("h1").innerHTML="Draw"
}