import cardsData from "./data.js";

function createDrawPile() {
  let pile = [];
  pile.push(...cardsData.pileCards.kings);
  pile.push(...creatCards(cardsData.pileCards.dragons));
  pile.push(...creatCards(cardsData.pileCards.potions));
  pile.push(...creatCards(cardsData.pileCards.wands));
  pile.push(...creatCards(cardsData.pileCards.knights));
  pile.push(...creatCards(cardsData.pileCards.jesters));
  pile.push(...createNumCards(cardsData.pileCards.numberCards));
  console.log(pile);
}
function createNumCards(obj) {
  const arr = [];
  for (let i = obj.min; i <= obj.max; i++) {
    const newItem = new Array(obj.amount).fill({ ...obj.card, value: i });
    arr.push(...newItem);
  }
  return arr;
}

function creatCards(obj) {
  return new Array(obj.amount).fill(obj.card);
}

export { createDrawPile };
