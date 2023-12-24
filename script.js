let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGame = document.querySelector(".newGame");
let msgBox = document.querySelector(".msgBox");
let winnerMsg = document.querySelector("#winner");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
    turnO = true ;
    enableableBox();
  msgBox.classList.add("hide");

};


boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

//disable box after winning----------
const disableBox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
//enable box after winning----------
const enableableBox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";

  }
};

const showwinner = (win) => {
  winnerMsg.innerText = `Congratulation Player ${win} Wins`;
  msgBox.classList.remove("hide");
  disableBox();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let posOne = boxes[pattern[0]].innerText;
    let posTwo = boxes[pattern[1]].innerText;
    let posThree = boxes[pattern[2]].innerText;

    if (posOne != "" && posTwo != "" && posThree != "") {
      if (posOne === posTwo && posTwo === posThree) {
        showwinner(posOne);
      }
    }
  }
};


newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
