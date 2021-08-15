idex page:
    Top left: link to highscores
    Top right: timer
    Main screen: 
        -Coding Quiz Challenge: explain the quiz have a "Start" button
        -show first question with multiple choice answers
        -cycle through 10 questions
        -Completed screen with final score, spot to enter initials, "Submit" button
        -high scores page, "start over" "clear high scores" button


User clicks on "Start" button
    Eventlistener on button
    var element = event.target so we know what is clicked
        this will lead to next screen with question and multiple choice answers
            user answers a questions
            eventlistener with event.target on answers
                correct answer will tally a point in local storage
                incorrect answer will not tally a point and timer will drop by x number of seconds
        this will start the timer countdown (timer interval or countdown function?)
    On next question, show "correct" or "wrong" from the previous question
    Continue until all questions are answered
        If timer runs out before all questions are answered, game ends and goes to final score screen
        If all questions are anwsered, go to final score screen
        Show final score
        enter initials
        click on "start over" or "clear high scores"                
