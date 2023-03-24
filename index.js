import cardsData from "./data.js";
import { createDrawPile } from "./utils.js";

function gameSetup() {
  let getSleepingQueensHtml = cardsData.queens
    .map((el) => `<div class="card queen sleeping">${el.name}</div>`)
    .join("");
  document.getElementById("game-board").innerHTML += getSleepingQueensHtml;
  createDrawPile();
}

const theGame = {
  drawPile: [],
  discardPile: [],
  asleepQueens: [],
};

gameSetup();
