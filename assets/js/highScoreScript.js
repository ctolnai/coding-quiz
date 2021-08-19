var showInitials = document.querySelector("#showInitials");
var showHighScore = document.querySelector("#showHighScore");
showInitials.textContent = localStorage.getItem("initials");
showHighScore.textContent = localStorage.getItem("score");
