const num = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const suit = ["♥️", "♠️", "♣️", "♦️"];
const dealerCards = [];
const playerCards = [];

function getCard() {
  var randomNum = num[Math.floor(Math.random() * 13)];
  var randomSuit = suit[Math.floor(Math.random() * 4)];
  return [randomNum, randomSuit];
}

function getPlayerCard1() {
  var card = getCard();
  $("#playerCard1").text(`${card[0]} ${card[1]}`);

  //   playerCards.push(randomNum);
  //   let playerCard = playerCards[0];
  //   //   console.log(playerCard);
}
function getPlayerCard2() {
  var card = getCard();
  $("#playerCard2").text(`${card[0]} ${card[1]}`);
}

function getDealerCard1() {
  var card = getCard();
  $("#dealerCard").text(`${card[0]} ${card[1]}`);
  //   dealerCards.push(randomNum);
  //   dealerCards.push(randomSuit);
  //   let dealerCard = dealerCards[0];
  //   console.log(dealerCards);
}

function getDealerCard2() {
  var card = getCard();
  $("#dealerCard2").text(`${card[0]} ${card[1]}`);
}

function dealCards() {
  getPlayerCard1();
  getPlayerCard2();
  getDealerCard1();
}

function hitCard() {
  var card = getCard();
  var newCard = $("<div>");
  newCard.text(`${card[0]} ${card[1]}`);
  newCard.addClass("col card");
  $("#playerHand").append(newCard);
}

function standCard() {
  getDealerCard2();
  var card = getCard();
  var newCard = $("<div>");
  newCard.text(`${card[0]} ${card[1]}`);
  newCard.addClass("col card");
  $("#dealerHand").append(newCard);
}
