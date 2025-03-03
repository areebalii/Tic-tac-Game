let turn = "X";
let gameOver = false;

// Function to change the turn
const changeTurn = () => {
  turn = turn === "X" ? "0" : "X"; // Update the turn
  return turn;
}

// Function to check Win
const checkWin = () => {
  let boxTexts = document.getElementsByClassName("boxText");

  let win = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  win.forEach(e => {
    if (
      boxTexts[e[0]].innerText === boxTexts[e[1]].innerText &&
      boxTexts[e[1]].innerText === boxTexts[e[2]].innerText &&
      boxTexts[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText = boxTexts[e[0]].innerText + " Won";
      gameOver = true;

      // **Disable all boxes after winning**
      Array.from(document.getElementsByClassName("box")).forEach(box => {
        box.style.pointerEvents = "none"; // Disables further clicks
      });
    }
  });
};


// Game Logic 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((box) => {
  box.addEventListener("click", (e) => {
    // Ensure we target the correct element
    let boxText = e.target.querySelector(".boxText") || e.target;
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      checkWin(); // Check for a win before changing the turn
      changeTurn();
      if (!gameOver) {
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
      }
    }
  });
});






document.querySelector(".reset").addEventListener("click", () => {
  window.location.reload();
})