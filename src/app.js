const num = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const suit = ["♥️", "♠️", "♣️", "♦️"];
const cardArray = [];
const dealerCards = [];
const playerCards = [];

function getCardValue(num) {
  var value = 0;
  if (num === "J" || num === "Q" || num === "K") {
    value = 10;
  } else if (num === "A") {
    value = 11;
  } else {
    value = num;
  }
  return value;
}

function getCard() {
  var randomNum = num[Math.floor(Math.random() * 13)];
  var randomSuit = suit[Math.floor(Math.random() * 4)];
  var value = getCardValue(randomNum);
  var card = randomNum + randomSuit;
  if (cardArray.includes(card) === true) {
    getCard();
  } else {
    cardArray.push(card);
    return [card, value];
  }
}

function getPlayerCard1() {
  var card = getCard();
  $("#playerCard1").text(`${card[0]}`);
  playerCards.push(card[1]);
}

function getPlayerCard2() {
  var card = getCard();
  $("#playerCard2").text(`${card[0]}`);
  playerCards.push(card[1]);
  let sum = playerCards.reduce((a, b) => a + b);
  $("#playerTotal").text(`${sum}`);
}

function getDealerCard1() {
  var card = getCard();
  $("#dealerCard").text(`${card[0]}`);
  dealerCards.push(card[1]);
  let sum = dealerCards.reduce((a, b) => a + b);
  $("#dealerTotal").text(`${sum}`);
}

function getDealerCard2() {
  var card = getCard();
  $("#dealerCard2").text(`${card[0]}`);
  dealerCards.push(card[1]);
  sum = dealerCards.reduce((a, b) => a + b);
  $("#dealerTotal").text(`${sum}`);
}

function dealCards() {
  getPlayerCard1();
  getPlayerCard2();
  getDealerCard1();
}

function hitCard() {
  var card = getCard();
  var newCard = $("<div>");
  newCard.text(`${card[0]}`);
  newCard.addClass("col card");
  $("#playerHand").append(newCard);
  playerCards.push(card[1]);
  sum = playerCards.reduce((a, b) => a + b);
  $("#playerTotal").text(`${sum}`);
  if (sum > 21) {
    alert(
      `Sorry, you bust! Your total is ${sum}. Push "Restart" to try another hand.`
    );
  }
}

function getAnotherCard() {
  var card = getCard();
  var newCard = $("<div>");
  newCard.text(`${card[0]}`);
  newCard.addClass("col card");
  $("#dealerHand").append(newCard);
  dealerCards.push(card[1]);
  sum = dealerCards.reduce((a, b) => a + b);
  $("#dealerTotal").text(`${sum}`);
}

function compareHands() {
  player = $("#playerTotal").text();
  dealer = $("#dealerTotal").text();
  if (player > dealer) {
    alert("Congratulation, you win!");
  } else if (player === dealer) {
    alert("It's a draw! No winner...");
  } else
    alert(
      `Sorry, the dealer won this round. Press "Restart" to try another hand.`
    );
}

function checkDealerHand() {
  if (sum > 21) {
    alert(`Congratulation, the dealer bust -- you won the game!`);
  } else if (sum < 15) {
    getAnotherCard();
    checkDealerHand();
  } else {
    compareHands();
  }
}

function standCard() {
  getDealerCard2();
  checkDealerHand();
}
