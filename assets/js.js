var timeEl = document.querySelector(".timeleft");
var questions = document.getElementById("questionsList");
var startButton= document.getElementById("startButton2");
var counter= 0;
var totalScore= 0;
var secondsLeft= 5;

var questionsArray = [
    {
        question: "question1",
        answerA: "answerA",
        answerB: "answerB",
        answerC: "answerC",
        answerD: "answerD",
        answer: "answerA"
    },

    {
        question: "question2",
        answerA: "answere",
        answerB: "answerf",
        answerC: "answerg",
        answerD: "answerh",
        answer: "answeri"
    },
    {
        question: "question3",
        answerA: "answerj",
        answerB: "answerk",
        answerC: "answerl",
        answerD: "answerm",
        answer: "answern"
    }

]

startButton.addEventListener("click", function(){
    console.log(10);
});


function startQuiz(){
    pass
}

function timeCountDown(){
    
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left"
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            timeEl.textContent = "You Lose";
    }} ,1000 );

}

function quizScore(){
    pass
}


function addScore(){
    pass
}

function rightOrWrong(){
    pass
}

timeCountDown();