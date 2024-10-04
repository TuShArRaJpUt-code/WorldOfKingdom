const puzzleBoard = document.getElementById("puzzle-board");
const shuffleButton = document.getElementById("shuffle-button");
const completionMessage = document.getElementById("completion-message");

// Image and puzzle setup
const puzzleSize = 3; // 3x3 grid
const imageSource = 'https://i.pinimg.com/474x/e5/c9/b0/e5c9b022f041e65315cedb06193335e4.jpg'; // Image URL

// Helper function to create a shuffled array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Create puzzle pieces
let positions = [];
for (let i = 0; i < puzzleSize * puzzleSize; i++) {
    const x = (i % puzzleSize) * 100; // x-position of the piece
    const y = Math.floor(i / puzzleSize) * 100; // y-position of the piece
    positions.push({ x, y });
}

// Shuffle positions
function shufflePieces() {
    shuffleArray(positions);
    renderPuzzle();
    completionMessage.textContent = ''; // Clear the message when shuffling
}

// Render puzzle pieces on the board
function renderPuzzle() {
    puzzleBoard.innerHTML = ''; // Clear existing pieces
    positions.forEach((pos, index) => {
        const piece = document.createElement('div');
        piece.classList.add('puzzle-piece');
        piece.style.backgroundImage = `url(${imageSource})`;
        piece.style.backgroundPosition = `-${pos.x}px -${pos.y}px`;
        piece.setAttribute('draggable', 'true');
        piece.dataset.index = index; // Store the index for checking the correct position
        puzzleBoard.appendChild(piece);
    });

    addDragAndDrop();
}

// Add drag and drop functionality
function addDragAndDrop() {
    const pieces = document.querySelectorAll('.puzzle-piece');
    let draggedPiece = null;

    pieces.forEach(piece => {
        piece.addEventListener('dragstart', (e) => {
            draggedPiece = e.target;
            setTimeout(() => piece.classList.add('dragging'), 0);
        });

        piece.addEventListener('dragend', () => {
            draggedPiece = null;
            pieces.forEach(p => p.classList.remove('dragging'));
        });

        piece.addEventListener('dragover', (e) => {
            e.preventDefault(); // Allow the drop
            const hoveredPiece = e.target;
            swapPieces(draggedPiece, hoveredPiece);
        });
    });
}

// Swap two pieces
function swapPieces(piece1, piece2) {
    const tempIndex = piece1.dataset.index;
    piece1.dataset.index = piece2.dataset.index;
    piece2.dataset.index = tempIndex;

    // Reorder pieces in the DOM
    puzzleBoard.insertBefore(piece2, piece1);
    checkCompletion();
}

// Check if the puzzle is completed
function checkCompletion() {
    const pieces = document.querySelectorAll('.puzzle-piece');
    let isComplete = true;

    pieces.forEach((piece, index) => {
        if (piece.dataset.index != index) {
            isComplete = false;
        }
    });

    if (isComplete) {
        completionMessage.textContent = "Congratulations! You've solved the puzzle!";
    }
}

// Shuffle pieces when the button is clicked
shuffleButton.addEventListener('click', shufflePieces);

// Initial puzzle setup
shufflePieces();