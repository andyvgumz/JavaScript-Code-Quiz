

//**JavaScript for logic.js */
//GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score 

//Variables to keep track of the quiz state 
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerID;

//HTML elements;
let questionsElement = document.getElementById("questions");
let timerElement = document.getElementById("time");
let choicesElement = document.getElementById("choices")
let submitButton = document.getElementById("submit");
let startButton = document.getElementById("start");
let initialElement = document.getElementById("initials");
let feedBackELement = document.getElementById("feedback");


let sfxRight = new Audio("assets/sfx/correct.wav"); //This adds audio to the quiz


function questionClick() {
    //alert("question was clicked") to check if function logs
    if (this.value !== questions[currentQuestionIndex].answer) {
        time -= 15;

        if (time < 0) {
            time = 0;
        }

        timerElement.textContent = time;

        feedBackELement.textContent = "Wrong"
    } else {
        sfxRight.play();
        feedBackELement.textContent = "Correct!";
    }

    feedBackELement.setAttribute("class", "feedback");


    setTimeout(function () {
        feedBackELement.setAttribute("class", "feedback hide")
    }, 1000);

    currentQuestionIndex++;

    if (currentQuestionIndex === questions.length) {
        quizEnd()
    } else {
        getQuestion();
    }
}

function getQuestion() {
    let currentQuestion = questions[currentQuestionIndex];

    let titleElement = document.getElementById("question-title");

    titleElement.textContent = currentQuestion.title;

    choicesElement.innerHTML = "";

    currentQuestion.choices.forEach(function(choice, index) {
        let choiceButton = document.createElement("button");

        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", choice);

        choiceButton.textContent = `${index + 1}. ${choice}`

    choiceButton.addEventListener("click", questionClick);

        choicesElement.append(choiceButton);

    })
}


function quizEnd() {
    clearInterval(timerID);

    let endScreenElement = document.getElementById("end-screen");
    endScreenElement.removeAttribute("class");

    let finalScoreElement = document.getElementById("final-score");
    finalScoreElement.textContent = "Your Final Score: " + time + "/" + (questions.length * 2);
    // finalScoreElement.textContent= "time;

    questionsElement.setAttribute("class", "hide");
}


function clockTick() {
    time--;
    timerElement.textContent = time;

    if (time <= 0) {
        quizEnd();
    }

}



function startQuiz() {
    let startScreenElement = document.getElementById("start-screen");
    startScreenElement.setAttribute('style', 'display: none');
    //or startScreenElement.setAttribute('class', 'hide');

    questionsElement.removeAttribute("class");

    timerID = setInterval(clockTick, 1000)

    timerElement.textContent = time;

    getQuestion();
}


function saveHighScore() {
    let initials = initialElement.value.trim();
    console.log(initials);

    if (initials !== "") {
        let highScores = JSON.parse(localStorage.getItem("highscores")) || [];
        let newScore = {
            score: time,
            initials: initials
        }
        highScores.push(newScore);
        localStorage.setItem("highscores", JSON.stringify(highScores));

        window.location.href = "highscores.html";
    }
}
function checkForEnter(event) {
    if (event.key === "enter") {
        saveHighScore();
    }
}

startButton.addEventListener("click", startQuiz)

submitButton.addEventListener("click", saveHighScore);

initialElement.addEventListener("keyup", checkForEnter);
