// var scoreInitials = localStorage.getItem("initials");
// var scoreHighScore = localStorage.getItem("score");
// console.log(scoreInitials)
// console.log(scoreHighScore)



var showInitials = document.querySelector("#showInitials");
var showHighScore = document.querySelector("#showHighScore");
showInitials.textContent = localStorage.getItem("initials");
showHighScore.textContent = localStorage.getItem("score");


// push the scores to an array
// store to localstorage using json stringify
// get from localstorage parse
// loop to get data