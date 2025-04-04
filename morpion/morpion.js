const cells = document.getElementById("board").children;
const status = document.getElementById("status");
let board = Array(9).fill("");
let currentPlayer = "X";
let gameActive = true;

const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6]             // diagonals
];

function handleClick(index) {
  if (!gameActive || board[index] !== "") return;

  board[index] = currentPlayer;
  cells[index].textContent = currentPlayer;
  cells[index].classList.add("taken");

  if (checkWin()) {
    status.textContent = `Player ${currentPlayer} wins!`;
    gameActive = false;
    highlightWinningCells();
    return;
  }

  if (board.every(cell => cell !== "")) {
    status.textContent = "It's a draw!";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  status.textContent = `${currentPlayer} turn`;
}

function checkWin() {
  return winningCombos.some(([a, b, c]) =>
    board[a] === currentPlayer &&
    board[b] === currentPlayer &&
    board[c] === currentPlayer
  );
}

function highlightWinningCells() {
  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (
      board[a] === currentPlayer &&
      board[b] === currentPlayer &&
      board[c] === currentPlayer
    ) {
      cells[a].style.backgroundColor = "#a5d6a7";
      cells[b].style.backgroundColor = "#a5d6a7";
      cells[c].style.backgroundColor = "#a5d6a7";
    }
  }
}


for (let i = 0; i < cells.length; i++) {
  (function(index) {
    cells[index].onclick = function () {
      handleClick(index);
    };
  })(i);
}
