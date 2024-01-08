// $("h1").css("color","red");

// $("h1").addClass("big-title margin-50");

// $("h1").text("GoodBye");

// $("button").html("<em>Don't click me</em>");

// console.log($("img").attr("src"));

// $("a").attr("href", "https://www.youtube.com/");

// $("h1").click(function(){
//     $("h1").css("color","purple");
// });


// in javascript(this is selecting all button)
// for(var i=0;i<5;i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color="green";
//     });
// }; 

//in JQuery
// $("button").click(function() {
//     $("h1").css("color","orange");
// });


// $(document).keypress(function(event) {
//     $("h1").text(event.key);
// });

// $("h1").on("mouseover", function(){
//     $("h1").css("color","green");
// })

$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity:0.2});
});
    