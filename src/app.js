const num = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
const suite = ["hearts", "spades", "clubs", "diamonds"];
const dealerCards = [];
const playerCards = [];

const randomNum = num[Math.floor(Math.random() * 13)];

function getDealerCards() {
  dealerCards.push(randomNum);
  let dealerCard = dealerCards[0];
  console.log(dealerCard);
  let dealer = document.querySelector("#dealer");
  dealer.innerHTML = `${dealerCard}`;
  // return dealerCards;
}

function getPlayerCards() {
  playerCards.push(randomNum);
  let player = document.querySelector("#player");
  player.innerHTML = `${playerCards[0]}`;
  //   return playerCards;
}

// function dealCards() {
//   getDealerCards();
//   getPlayerCards();
//   getPlayerCards();
//   return;
// }

// console.log(getDealerCards());
getDealerCards();
getPlayerCards();
