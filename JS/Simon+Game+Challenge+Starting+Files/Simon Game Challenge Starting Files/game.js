
var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern =[];
var userClickedPattern=[];

var started= false;
var level=0;

$(document).keypress(function(){
    if(!started) {
        $("#level-title").text("Level "+level);
        nextSequence();
        started=true;
    };
});

//1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function(){
      //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.

    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);

  //console.log(userClickedPattern);

})

function nextSequence(){

    level++;

    $("#level-title").text("Level " + level);

    var randomNumber = (Math.floor(Math.random()*4));
    var randomChosenColour= buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);    
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    // animatePress(randomChosenColour); 

};

function playSound(name){
    var audioPlay =new Audio("sounds/"+name+".mp3");
    audioPlay.play();

}

function animatePress(currentColor){
    var activeButton=$("#"+currentColor);
    activeButton.addClass("pressed");
    setTimeout(function(){
        activeButton.removeClass("pressed");
    },100);
}

