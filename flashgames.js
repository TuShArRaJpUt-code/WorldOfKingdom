const flashcards = [
    {
        question: "What is the largest land animal?", // Text Question
        answer: "images/flash1.jpg"// Image Answer
    },
    {
        question: "Which animal is known as the king of the jungle?", // Text Question
        answer: "images/flash2.jpg" // Image Answer
    },
    {
        question: "What is the fastest land animal?", // Text Question
        answer: "images/flash3.jpg" // Image Answer
    },
    {
        question: "Which animal can change its color?", // Text Question
        answer: "images/flash4.jpg" // Image Answer
    },
    {
        question: "What is the largest mammal in the ocean?", // Text Question
        answer: "images/flash5.jpg" // Image Answer
    },
    {
        question: "Which animal is known for its black and white stripes?", // Text Question
        answer: "images/flash6.jpg" // Image Answer
    },
    {
        question: "What animal is famous for its ability to jump high?", // Text Question
        answer: "images/flash7.jpg" // Image Answer
    },
    {
        question: "Which animal is the symbol of wisdom?", // Text Question
        answer: "images/flash8.jpg" // Image Answer
    },
    {
        question: "What is the only mammal capable of true flight?", // Text Question
        answer: "images/flash9.jpg" // Image Answer
    },
    {
        question: "Which animal is known for building dams?", // Text Question
        answer: "images/flash10.jpg" // Image Answer
    }
];

let currentCardIndex = 0;

function displayFlashcard() {
    const flashcardContainer = document.getElementById('flashcardContainer');
    flashcardContainer.innerHTML = '';

    const flashcard = document.createElement('div');
    flashcard.classList.add('flashcard');

    const front = document.createElement('div');
    front.classList.add('card-face', 'front');
    front.textContent = flashcards[currentCardIndex].question; // Display question as text

    const back = document.createElement('div');
    back.classList.add('card-face', 'back');

    const answerImg = document.createElement('img');
    answerImg.src = flashcards[currentCardIndex].answer;
    answerImg.alt = "Answer Image";
    back.appendChild(answerImg);

    flashcard.appendChild(front);
    flashcard.appendChild(back);
    flashcardContainer.appendChild(flashcard);

    flashcard.addEventListener('click', () => {
        flashcard.classList.toggle('flipped');
    });
}

document.getElementById('nextButton').addEventListener('click', () => {
    currentCardIndex = (currentCardIndex + 1) % flashcards.length;
    displayFlashcard();
});

// Display the first flashcard on load
displayFlashcard();