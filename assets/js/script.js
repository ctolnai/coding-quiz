var score = [];
var start = document.querySelector("#start");
var main = document.querySelector(main);
var answer0 = document.querySelector("#answer0");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var correctwrong = document.querySelector("#correctwrong");
var timer = document.querySelector("#timer");
var container = document.querySelector(".container");

document.getElementById("title").textContent = "Coding Quiz Challenge";
document.getElementById("question").textContent = "Try to answer the following code-related questions within the time limit.  Incorrect answers will penalize your score by 10 seconds."
document.getElementById("start").textContent = "Start";
var time = 60;

let questionCount = 0 

start.addEventListener("click", function (event) {
    title.style.visibility = "hidden";
    start.style.visibility = "hidden";
   

    document.getElementById("question").textContent = questions[questionCount].question ;
for (let i = 0; i < 4; i++) {
    document.getElementById(`answer${i}`).textContent = questions[questionCount].answers[i].a;

}
questionCount = questionCount += 1

    // timer function for countdown
    timer.textContent = "60 seconds"
    var timerFunction =
        setInterval(function () {
            time--;
            timer.textContent = time + " seconds";

            if (time <= 0) {
                clearInterval(timerFunction)
            }
        }, 1000);


});

answer1.addEventListener("click", function (){
    document.getElementById("question").textContent = questions[questionCount].question ;
    for (let i = 0; i < 4; i++) {
        document.getElementById(`answer${i}`).textContent = questions[questionCount].answers[i].a;
    }
    questionCount = questionCount += 1

});

