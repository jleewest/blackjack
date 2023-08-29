const num = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const suit = ["♥️", "♠️", "♣️", "♦️"];
// var deck = newArray();
const dealerCards = [];
const playerCards = [];

function getDealerCard1() {
  var randomNum = num[Math.floor(Math.random() * 13)];
  var randomSuit = suit[Math.floor(Math.random() * 4)];
  $("#dealerCard").text(`${randomNum} ${randomSuit}`);
  //   dealerCards.push(randomNum);
  //   dealerCards.push(randomSuit);
  //   let dealerCard = dealerCards[0];
  //   console.log(dealerCards);
}
function getDealerCard2() {
  var randomNum = num[Math.floor(Math.random() * 13)];
  var randomSuit = suit[Math.floor(Math.random() * 4)];
  $("#dealerCard2").text(`${randomNum} ${randomSuit}`);
  //   dealerCards.push(randomNum);
  //   dealerCards.push(randomSuit);
  //   let dealerCard = dealerCards[0];
  //   console.log(dealerCards);
}

function getPlayerCard1() {
  var randomNum = num[Math.floor(Math.random() * 13)];
  var randomSuit = suit[Math.floor(Math.random() * 4)];
  $("#playerCard1").text(`${randomNum} ${randomSuit}`);

  //   playerCards.push(randomNum);
  //   let playerCard = playerCards[0];
  //   //   console.log(playerCard);
}
function getPlayerCard2() {
  var randomNum = num[Math.floor(Math.random() * 13)];
  var randomSuit = suit[Math.floor(Math.random() * 4)];
  $("#playerCard2").text(`${randomNum} ${randomSuit}`);

  //   playerCards.push(randomNum);
  //   let playerCard = playerCards[0];
  //   //   console.log(playerCard);
}

function dealCards() {
  getDealerCard1();
  getPlayerCard1();
  getPlayerCard2();
}

function addPlayerCard() {
  var randomNum = num[Math.floor(Math.random() * 13)];
  var randomSuit = suit[Math.floor(Math.random() * 4)];
  var newCard = $("<div>");
  newCard.text(`${randomNum} ${randomSuit}`);
  newCard.addClass("col card");
  $("#playerHand").append(newCard);
}
function addDealerCard() {
  getDealerCard2();
  var randomNum = num[Math.floor(Math.random() * 13)];
  var randomSuit = suit[Math.floor(Math.random() * 4)];
  var newCard = $("<div>");
  newCard.text(`${randomNum} ${randomSuit}`);
  newCard.addClass("col card");
  $("#dealerHand").append(newCard);
}

// console.log(getDealerCards());
// dealCards();
