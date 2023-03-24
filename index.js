import cardsData from "./data.js";

function gameSetup() {
  let getSleepingQueensHtml = cardsData.queens
    .map((el) => `<div class="card queen sleeping">${el.name}</div>`)
    .join("");
  document.getElementById("game-board").innerHTML += getSleepingQueensHtml;
}

const theGame = {
  drawPile: [],
  discardPile: [],
  asleepQueens: [],
};

gameSetup();
