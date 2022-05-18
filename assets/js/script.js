var startButton = document.querySelector("#quiz-start");
var timerContent = document.getElementById("time-Left");
var questionContent = document.getElementById("quiz");
var initials = ""
var questions = [ {
    question: "To make Javascript work with your site, you must fisrt " ,
    answers: [{text: "Link it in your html", correct: true}, {text: "Download & install it ", correct:false}]

}]

startButton.addEventListener("click",startQuiz);

function quizTime(){
    var timeLeft = 60;
    var timeInterval = setInterval(function(){
        if (timeLeft > 0) {
            timerContent.textContent = "Time Left: " + timeLeft;
            timeLeft--;
        }
        else if (timeLeft = 0) {
            return gameOver();
            
              }

        

    }, 1000);
}
    
    
    
    
    function gameOver(){
        clearInterval(timeInterval)
        // alert , add your initials
        // initials added to scoreboard
        // timeLeft added to scoreboard
    }




function startQuiz(){
    // start button goes away 
    startButton.style.display = "none";
    // time starts & displays countdown
    quizTime();
    // quiz header now turns to question
    questionContent.classList.remove("hide");
    // a question is picked from list of Q's
    nextQuestion();
    // there is text next to A B C D buttons for answer
}


// if click on correct button for Q , display next Q
// else time is deducted if wrong answer

// something needs to check when questions are all completed
function nextQuestion(){



}

