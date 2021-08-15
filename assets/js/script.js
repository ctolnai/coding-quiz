var score = [];
var start = document.querySelector("#start");
var main = document.querySelector(main);
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var correctwrong = document.querySelector("#correctwrong");
var timercountdown = document.querySelector("#timer");
var container = document.querySelector(".container");

document.getElementById("title").textContent = "Coding Quiz Challenge";
document.getElementById("question").textContent = "Try to answer the following code-related questions within the time limit.  Incorrect answers will penalize your score by 10 seconds." 
document.getElementById("start").textContent ="Start";

start.addEventListener("click", function (event){
    event.preventDefault();
    title.style.visibility = "hidden";
    document.getElementById("question").textContent = "What is 1 + 1 ?";
    start.style.visibility = "hidden";
    answer1.style.visibility = "visible";
    document.getElementById("answer1").textContent = "3";
    document.getElementById("answer2").textContent = "2";
    document.getElementById("answer3").textContent = "11";
    document.getElementById("answer4").textContent = "1";


});

// answer1.addEventListener("click", function (){
//     document.getElementById("answer1").
// });




// document.querySelector("#question").setAttribute("style" , "font-size:1rem" )

// function startTimer (duration, display){
    //    var timer = seconds;
    //     setInterval(function (){
    //         seconds = parseInt(timer/60, 10);
            
    //         display.textContent = timer
    
    //         if (--timer < 0){
    //             timer=duration;
    //         }
    //     }, 1000);
    
    // }