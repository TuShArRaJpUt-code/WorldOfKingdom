const quizData = [
    {
        question: "Which animal is known as the king of the jungle?",
        choices: ["Lion", "Elephant", "Tiger", "Giraffe"],
        answer: "Lion"
    },
    {
        question: "Which bird is the fastest flying bird?",
        choices: ["Eagle", "Peregrine Falcon", "Sparrow", "Hummingbird"],
        answer: "Peregrine Falcon"
    },
    {
        question: "Which sea creature has three hearts?",
        choices: ["Dolphin", "Octopus", "Whale", "Shark"],
        answer: "Octopus"
    },
    {
        question: "Which mammal lays eggs?",
        choices: ["Kangaroo", "Platypus", "Elephant", "Koala"],
        answer: "Platypus"
    },
    {
        question: "Which is the largest land animal?",
        choices: ["Giraffe", "Elephant", "Rhino", "Hippo"],
        answer: "Elephant"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const nextButton = document.getElementById("nextButton");
const resultElement = document.getElementById("result");

// Function to start the quiz and display the first question
function startQuiz() {
    showQuestion();
    nextButton.style.display = "none"; // Hide next button initially
}

// Function to show the current question
function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = ""; // Clear previous choices

    currentQuestion.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.classList.add("choice");
        button.addEventListener("click", selectAnswer);
        choicesElement.appendChild(button);
    });
}

// Function to handle selecting an answer
function selectAnswer(event) {
    const selectedChoice = event.target.textContent;
    const correctAnswer = quizData[currentQuestionIndex].answer;

    if (selectedChoice === correctAnswer) {
        score++;
    }

    disableChoices();
    nextButton.style.display = "block"; // Show next button after selecting an answer
}

// Disable the choices once an answer is selected
function disableChoices() {
    const choiceButtons = document.querySelectorAll(".choice");
    choiceButtons.forEach(button => {
        button.disabled = true;
    });
}

// Function to move to the next question or show results
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        showQuestion(); // Show next question
        nextButton.style.display = "none"; // Hide next button again
    } else {
        showResults(); // Show final results
    }
});

// Function to show the final score and result
function showResults() {
    questionElement.style.display = "none"; // Hide question
    choicesElement.style.display = "none"; // Hide choices
    nextButton.style.display = "none"; // Hide next button

    resultElement.textContent =` You scored ${score} out of ${quizData.length}!`;
}

// Start the quiz when the page loads
startQuiz();