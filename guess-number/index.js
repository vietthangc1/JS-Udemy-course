'use strict';

let randomNum = Math.floor(Math.random()*20 + 1);
let listScore = [];
let score = 20;

let numberDisplay = "?"

$(".again").click(function (e) {
  startOver()
})

console.log(randomNum);

$(".check").click(function (e) { 
  e.preventDefault();
  hitAnswer()
});

$(document).keypress(function (e) { 
  if ($(".number").html() != "?") {
    startOver()
  } else
  if (e.key == "Enter") {
    hitAnswer()
  }
});

function hitAnswer() { 
  let message = checkNum(randomNum)[0]
  let checkWin= checkNum(randomNum)[1]
  console.log(checkNum(randomNum))
  $(".message").text(message)
  if (checkWin) {
    winChange()
    listScore.push(score)
    let highScore = calcHighScore(listScore)
    $(".highscore").text(highScore)
  } else {
    score -= 1
    $(".score").text(score)
  }
 }

function startOver() {
  randomNum = Math.floor(Math.random()*20 + 1)
  console.log(randomNum);
  score = 20
  $("body").css("background-color", "#222");
  $(".guess").val("")
  $(".message").text("Start guessing...")
  $(".number").html("?")
}

function checkNum(key) {
  let mes
  let correction = false
  let guess = $(".guess").val()
  if (guess != 0) {
    if (guess < key) {
      mes = "Too low"
    } else if (guess > key) {
      mes = "Too high"
    } else {
      mes = "Correct!"
      correction = true
    }
  } else {
    mes = "Not a sufficient number"
  }
  
  return [mes, correction]
}

function winChange() {
  $("body").css("background-color", "#60b347");
  $(".number").html(randomNum)
}

function calcHighScore(list) {
  return listScore.reduce(function(a, b) {
    return Math.max(a, b);
  }, 0);
}