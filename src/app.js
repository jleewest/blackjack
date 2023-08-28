const num = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const suit = ["♥️", "♠️", "♣️", "♦️"];
// var deck = newArray();
const dealerCards = [];
const playerCards = [];

function getDealerCards() {
  var randomNum = num[Math.floor(Math.random() * 13)];
  var randomSuit = suit[Math.floor(Math.random() * 4)];
  $("#dealer").text(`${randomNum} ${randomSuit}`);
  //   dealerCards.push(randomNum);
  //   dealerCards.push(randomSuit);
  //   let dealerCard = dealerCards[0];
  //   console.log(dealerCards);
}

function getPlayerCards() {
  var randomNum = num[Math.floor(Math.random() * 13)];
  var randomSuit = suit[Math.floor(Math.random() * 4)];
  $("#player").text(`${randomNum} ${randomSuit}`);

  //   playerCards.push(randomNum);
  //   let playerCard = playerCards[0];
  //   //   console.log(playerCard);
}

function dealCards() {
  getDealerCards();
  getPlayerCards();
}

// console.log(getDealerCards());
// dealCards();
