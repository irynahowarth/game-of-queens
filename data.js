const cardsData = {
  queens: [
    {
      name: "Rainbow",
      value: 5,
      specialAbility: false,
    },
    {
      name: "Dog",
      value: 15,
      specialAbility: true,
    },
    {
      name: "Cat",
      value: 15,
      specialAbility: true,
    },
    {
      name: "Rose",
      value: 10,
      specialAbility: true,
    },
    {
      name: "Heart",
      value: 20,
      specialAbility: false,
    },
    {
      name: "Ladybug",
      value: 10,
      specialAbility: false,
    },
    {
      name: "Moon",
      value: 10,
      specialAbility: false,
    },
    {
      name: "Sunflower",
      value: 10,
      specialAbility: false,
    },
    {
      name: "Peacock",
      value: 10,
      specialAbility: false,
    },
    {
      name: "Pancake",
      value: 15,
      specialAbility: false,
    },
    {
      name: "Starfish",
      value: 5,
      specialAbility: false,
    },
    {
      name: "Cake",
      value: 5,
      specialAbility: false,
    },
  ],
  pileCards: {
    kings: [
      { name: "Chess" },
      { name: "Tie-Dye" },
      { name: "Cookie" },
      { name: "Puzzle" },
      { name: "Bubble Gum" },
      { name: "Fire" },
      { name: "Turtle" },
      { name: "Hat" },
    ],
    dragons: { amount: 4, card: { name: "dragon", value: 0 } },
    potions: { amount: 3, card: { name: "potions", value: 0 } },
    wands: { amount: 3, card: { name: "wand", value: 0 } },
    knights: { amount: 4, card: { name: "knight", value: 0 } },
    jesters: { amount: 4, card: { name: "jester", value: 0 } },
    numberCards: {
      amount: 4,
      min: 1,
      max: 10,
      card: { name: "card", value: "" },
    },
  },
};

export default cardsData;
