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
    return getCard();
  } else {
    cardArray.push(card);
    return [card, value];
  }
}

function playerSum() {
  let sum = playerCards.reduce((a, b) => a + b);
  if (sum > 21 && playerCards.includes(11) === true) {
    sum = sum - 10;
    return sum;
  } else {
    return sum;
  }
}

function getPlayerCard() {
  var card = getCard();
  var newCard = $("<div>");
  newCard.text(`${card[0]}`);
  newCard.addClass("col card");
  $("#playerHand").append(newCard);
  playerCards.push(card[1]);
  let sum = playerSum();
  $("#playerTotal").text(`${sum}`);
  if (sum > 21) {
    alert(
      `Sorry, you bust! Your total is ${sum}. Push "Restart" to try another hand.`
    );
  }
}
function dealerSum() {
  let sum = dealerCards.reduce((a, b) => a + b);
  if (sum > 21 && dealerCards.includes(11) === true) {
    sum = sum - 10;
    return sum;
  } else {
    return sum;
  }
}

function getDealerCard() {
  var card = getCard();
  var newCard = $("<div>");
  newCard.text(`${card[0]}`);
  newCard.addClass("col card");
  $("#dealerHand").append(newCard);
  dealerCards.push(card[1]);
  let sum = dealerSum();
  $("#dealerTotal").text(`${sum}`);
}

function dealCards() {
  $("#playerHand").addClass("card-box");
  getPlayerCard();
  getPlayerCard();
  $("#dealerHand").addClass("card-box");
  getDealerCard();
}

function compareHands() {
  player = $("#playerTotal").text();
  dealer = $("#dealerTotal").text();
  if (player > dealer) {
    alert(`Congratulation, you win! Push "Restart" to play again.`);
  } else if (player === dealer) {
    alert(`It's a draw! No winner...Push "Restart" to try another hand.`);
  } else
    alert(
      `Sorry, the dealer won this round. Press "Restart" to try another hand.`
    );
}

function checkDealerHand() {
  let sum = dealerCards.reduce((a, b) => a + b);
  if (sum > 21) {
    alert(`Congratulation, the dealer bust -- you won the game!`);
  } else if (sum < 18) {
    getDealerCard();
    checkDealerHand();
  } else {
    compareHands();
  }
}

function standCard() {
  getDealerCard();
  checkDealerHand();
}
