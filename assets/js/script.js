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
var display = document.querySelector(".answer")


document.getElementById("title").textContent = "Coding Quiz Challenge";
document.getElementById("question").textContent = "Try to answer the following code-related questions within the time limit.  Incorrect answers will penalize your score by 10 seconds."
document.getElementById("start").textContent = "Start";
var time = 10;
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
    timer.textContent = "60 seconds"
    var timerFunction =
        setInterval(function () {
            time--;
            timer.textContent = time + " seconds";

            if (time <= 0) {
                clearInterval(timerFunction);
                container.setAttribute("style", "display:none");
            }
        }, 1000);

    // timer runs out, game is over    
        
});


    display.addEventListener("click", function (event) {
        var element = event.target;
        var useranswer = element.getAttribute("data-correct")
        questionCount = questionCount += 1

        if (useranswer === "false") {
            time -= 10
        }

        if (useranswer === "true") {
            score += 1
        }


        showQuestion()
        showAnswer()

        console.log(score);
        


    });
  
    

    // 4a. show correct/wrong underneath next question
    // 5. when all the questions are answered, game is over
    // 6. when time runs out, game is over
    // 7. enter initials, save initials and score to local storage
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

    