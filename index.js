let homeScore = document.getElementById("score.home")
let guestScore = document.getElementById("score.guest")
let homePoints = 0
let guestPoints = 0

function onehome(){
  homePoints += 1
  homeScore.textContent = homePoints
}

function twohome(){
  homePoints += 2
  homeScore.textContent = homePoints
}

function threehome(){
  homePoints += 3
  homeScore.textContent = homePoints
}

function oneguest(){
  guestPoints += 1
  guestScore.textContent = guestPoints
}

function twoguest(){
  guestPoints += 2
  guestScore.textContent = guestPoints
}

function threeguest(){
  guestPoints += 3
  guestScore.textContent = guestPoints
}