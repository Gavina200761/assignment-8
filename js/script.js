console.log("script.js connected!");
//These methods assign each question card a color.
let q1 = document.getElementById("que1");
q1.style.backgroundColor = "#acebacff";

let q2 = document.getElementById("que2");
q2.style.backgroundColor = "#e4be92ff";

let q3 = document.getElementById("que3");
q3.style.backgroundColor = "#ebace8ff";

let q4 = document.getElementById("que4");
q4.style.backgroundColor = "#f7a9afff";

let q5 = document.getElementById("que5");
q5.style.backgroundColor = "#d2da92ff";


/*This method selects all elements with the class "question-block", then uses .forEach with the method 
.addEventListener to add behaviors to each button when pressed, like printing that the button was clicked 
and what data corresponds with that button.*/
let userInput = {};
let questionBlocks = document.querySelectorAll(".question-block");

questionBlocks.forEach(function(block, index) {
    let buttons = block.querySelectorAll(".answer-btn");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            buttons.forEach(function(btn) {
                btn.classList.remove("selected");
            });
            button.classList.add("selected");
            userInput["question-" + (index + 1)] = button.dataset.answer;

            console.log(userInput);
        });
    });
});