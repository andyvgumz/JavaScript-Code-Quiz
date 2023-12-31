
//**JavaScript for questions.js */
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

let questions = [
    {
        "title": "Common Data Types DO NOT include:",
        "choices": ["string", "booleans", "alerts", "numbers"],
        "answer": "alerts" //Question title, choices and answer
    },

    {
        "title": "Conditionals keywords are:",
        "choices": ["if", "for", "while", "for each"],
        "answer": "if" //Question title, choices and answer
    },

    {
        "title": "Corgis type include",
        "choices": ["welsh", "brown", "green", "purple"],
        "answer": "welsh" //Question title, choices and answer

    }
]