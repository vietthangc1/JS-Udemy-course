'use strict';

let numberOfTurn = 1;
let player1Score = 0;
let player2Score = 0;
let currentPlayerScore = 0;
let currentPlayer = 0
let endTurn = false

determinePlayer()


$(".btn--roll").click(function () {
  randomAndDisplay()
  checkEndTurn()
})

$(".btn--hold").click(function () {
  endTurn = true
  checkEndTurn()
})

$(".btn--new").click(function () {
  numberOfTurn = 1;
  player1Score = 0;
  player2Score = 0;
  currentPlayerScore = 0;
  currentPlayer = 0
  endTurn = false
  determinePlayer()
  $("#score--1").text(0)
  $("#score--2").text(0)
  $("#current--2").text(0)
  $("#current--2").text(0)
})

function determinePlayer () {
  if (numberOfTurn % 2 == 1) {
    // player 1 turn
    $(".player--1").addClass("player--active")
    $(".player--2").removeClass("player--active")
    currentPlayer = 1
  } else {
    $(".player--2").addClass("player--active")
    $(".player--1").removeClass("player--active")
    currentPlayer = 2
  }
}

function randomAndDisplay() {
  let randomNum = Math.floor(Math.random() * 6 + 1)
  console.log(randomNum);
  $(".dice").attr("src", "dice-"+randomNum+".png")
  if (randomNum != 1) {
    currentPlayerScore += randomNum
  } else {
    currentPlayerScore = 0
    endTurn = true
  }
  $("#current--"+currentPlayer).text(currentPlayerScore)
}

function checkEndTurn () {
  if (endTurn) {
    if (currentPlayer == 1) {
      player1Score += currentPlayerScore
      $("#score--1").text(player1Score)
      checkwin(player1Score, 1)
    } else {
      player2Score += currentPlayerScore
      $("#score--2").text(player2Score)
      checkwin(player2Score, 2)
    }
    currentPlayerScore = 0
    $("#current--"+currentPlayer).text(currentPlayerScore)
    numberOfTurn += 1
    determinePlayer ()
    endTurn = false
  }
}

function checkwin (score, player) {
  if (score >= 100) {
    $(".player--"+player).addClass("player--winner")
  }
}