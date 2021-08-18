let score = 0;
var start = document.querySelector("#start");
var main = document.querySelector(main);
var answer0 = document.querySelector("#answer0");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var correctwrong = document.querySelector("#correctwrong");
var timer = document.querySelector("#timer");
var container = document.querySelector(".container");
var display = document.querySelector(".answer");
var gameOver = document.querySelector(".gameOver");
var question = document.querySelector("#question");
var userScore = document.querySelector("#userScore");
var form = document.querySelector("#form");



document.getElementById("title").textContent = "Coding Quiz Challenge";
document.getElementById("question").textContent = "Try to answer the following code-related questions within the time limit.  Incorrect answers will penalize your score by 10 seconds."
document.getElementById("start").textContent = "Start";

var time = 30;
let questionCount = 0


start.addEventListener("click", function (event) {

    // hide title and start button
    title.style.visibility = "hidden";
    start.style.visibility = "hidden";


    showQuestion()
    showAnswer()

    // change data-display from hidden to block
    display.setAttribute("style", "display:block")

    // timer function for countdown
    timer.textContent = "30 seconds"
    var timerFunction =
        setInterval(function () {
            time--;
            timer.textContent = time + " seconds";

            if (time <= 0) {
                clearInterval(timerFunction);
                display.setAttribute("style", "display:none");
                question.setAttribute("style", "display:none");
                gameOver.setAttribute("style", "display:block");
                localStorage.setItem("score", score)
                userScore.setAttribute("style", "display:block")
                userScore.textContent = localStorage.getItem("score")
            }
        }, 1000);


});


display.addEventListener("click", function (event) {
    var element = event.target;
    var useranswer = element.getAttribute("data-correct")
    questionCount = questionCount += 1

    if (useranswer === "false") {
        time -= 10
        correctwrong.textContent = "Wrong!!"
    }

    if (useranswer === "true") {
        score += 1
        correctwrong.textContent = "Correct!!!"
    }

    if (questionCount < 5) {
        showQuestion()
        showAnswer()
    }

    else {
        // clearInterval(timerFunction);
        display.setAttribute("style", "display:none");
        question.setAttribute("style", "display:none");
        gameOver.setAttribute("style", "display:block");
        localStorage.setItem("score", score)
        userScore.setAttribute("style", "display:block")
        userScore.textContent = localStorage.getItem("score")
    }


    return;



});



form.addEventListener("click", function (event) {
    event.preventDefault();
    var element = event.target;
    var initials = document.querySelector("#initials").value
    localStorage.setItem("score", score)
    localStorage.setItem("initials", initials)
    console.log(initials)

    // GO BACK TO MAIN SCREEN

});


// 8. click View Highscores to show initials and scores from local storage

function showQuestion() {
    document.getElementById("question").textContent = questions[questionCount].question;
    for (let i = 0; i < 4; i++) {
        document.getElementById(`answer${i}`).textContent = questions[questionCount].answers[i].a;
    }
}

function showAnswer() {
    document.getElementById("question").textContent = questions[questionCount].question;
    for (let i = 0; i < 4; i++) {
        document.getElementById(`answer${i}`).textContent = questions[questionCount].answers[i].a;
        document.getElementById(`answer${i}`).setAttribute("data-correct", questions[questionCount].answers[i].correct)
    }
}

