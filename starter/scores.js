
//**JavaScript for scores.js */
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

function printHighScores(){
//TO DO
let highScores = JSON.parse(localStorage.getItem("highscores")) || [];

highScores.sort(function(a, b){
    return b.score - a.score;
    })

    highScores.forEach(function(score) {
        let li = document.createElement("li");
        li.textContent = `${score.initials} - ${score.score}`

        let ol= document.getElementById("highscores");
        ol.appendChild(li);
    });
}

function clearHighScores(){
//TO DO
localStorage.removeItem("highscores");
window.location.reload(); //refresh page to show new list of highscores after clearing them out
}

// document.getElementById("clear").onclick = clearHighScores;

// Or

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearHighScores);

printHighScores(); //The highScores are coming from the localStorage