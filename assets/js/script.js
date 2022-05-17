var startButton = document.querySelector("#quiz-start");
var timer = document.getElementById("#time-Left")



startButton.addEventListener("click", function(event) {  

    startButton.style.display = "none";
    quizTime();
    // have A B C D buttons display now

});


function quizTime(){
    var timeLeft = 60;
    var timeInterval = setInterval(function(){
        if (timeLeft > 1) {
            timer.textContent = timeLeft;
            timeLeft--;
        }
        else {
            clearInterval(timeInterval);
            // gameOver();

        }

    }, 1000);
}
    
    
    
    
    function gameOver(){

    }




function startQuiz(){
    // start button goes away 
    // time starts & displays countdown
    // quiz header now turns to question
    // a question is picked from list of Q's
    // there is text next to A B C D buttons for answer
}

// event listener for click 
// if click on correct button for Q , display next Q
// else time is deducted if wrong answer

// something needs to check when questions are all completed

// something needs to check time left
// if time over , game over 
// ask for initials


// scoreboard has list for initials 
// scoreboard displays how much time was left for initial
// scoreboard displays how many u got right & wrong