const animals = [
    'images/foot.jpg', 'images/foot.jpg', // Dog
    'images/lion.jpg', 'images/lion.jpg', // Cat
    'images/shark.jpg', 'images/shark.jpg', // Panda
    'images/whale.jpg', 'images/whale.jpg', // Elephant
    'images/eagle.jpg', 'images/eagle.jpg', // Monkey
    'images/owl.jpg', 'images/owl.jpg', // Lion
    'images/panther.jpg', 'images/panther.jpg', // Pig
    'images/axolatl.jpg', 'images/axolatl.jpg', // Zebra
    'images/condor.jpg', 'images/condor.jpg', // Frog
    'images/tiger.jpg', 'images/tiger.jpg'  // Butterfly
];

let flippedCards = [];
let matchedCards = 0;
const gameContainer = document.getElementById('gameContainer');

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createBoard() {
    const shuffledAnimals = shuffle(animals);
    shuffledAnimals.forEach(animal => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-animal', animal);
        card.addEventListener('click', flipCard);
        gameContainer.appendChild(card);
    });
}

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
        
        const img = document.createElement('img');
        img.src = this.getAttribute('data-animal');
        img.alt = "Animal Image";
        this.appendChild(img);
        
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            setTimeout(checkForMatch, 1000);
        }
    }
}

function checkForMatch() {
    const [cardOne, cardTwo] = flippedCards;
    if (cardOne.getAttribute('data-animal') === cardTwo.getAttribute('data-animal')) {
        matchedCards += 2;
        flippedCards = [];
        if (matchedCards === animals.length) {
            alert('Congratulations! You found all matches!');
        }
    } else {
        cardOne.classList.remove('flipped');
        cardOne.innerHTML = '';
        cardTwo.classList.remove('flipped');
        cardTwo.innerHTML = '';
        flippedCards = [];
    }
}

document.getElementById('restartButton').addEventListener('click', () => {
    gameContainer.innerHTML = '';
    matchedCards = 0;
    createBoard();
});

// Start the game
createBoard();