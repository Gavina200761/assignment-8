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

/*This is the JavaScript Logic that retrieves user's selected answers, Tallies answers based on scoring logic,
determines the final result, and updates the result-container*/

function displayResults() {
    const count = {
        metal: 0,
        rap: 0,
        pop: 0,
        orchestra: 0
    };
    for (let q in userInput) {
        let answer = userInput[q];
        count[answer] += 1;
    }

    let topGenre = null;
    let maxCount = -1;

    for (let genre in count) {
        if (count[genre] > maxCount) {
            maxCount = count[genre];
            topGenre = genre;
        }
    }

    const resultMessages = {
        pop: "You're a Pop Concert Fan!",
        rap: "You’re all about the Rap Scene!",
        metal: "Metal is your vibe!",
        orchestra: "You belong in an Orchestra Concert."
    };

    document.getElementById("result-text").textContent = resultMessages[topGenre];
    document.getElementById("result-container").style.display = "block";

};
document.getElementById("show-result").addEventListener("click", displayResults);
console.log("You may have to scroll down to see the results.");