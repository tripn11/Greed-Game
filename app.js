var scores, roundScore, activePlayer,lastDice;

function newGame() {
  scores = [0,0];
  roundScore=0;
  activePlayer=0;
  document.querySelector(".dice").style.display="none";
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent="player 1";
  document.getElementById("name-1").textContent= "player 2";
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

function nextPlayer() {
  if(activePlayer===0){
    document.querySelector("#current-"+activePlayer).textContent= 0;
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.add("active");
    activePlayer=1;
  }else{
    document.querySelector("#current-"+activePlayer).textContent= 0;
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
    activePlayer=0;
  }
  roundScore=0; 
}

function alertWinner(){
  let target = document.querySelector("input").value;
  if (scores[activePlayer]>=target){
    document.getElementById("name-"+activePlayer).textContent="Winner!!!";
    setTimeout(newGame, 5000);
  }
}


newGame();
document.querySelector(".btn-roll").addEventListener("click", function() {
  var dice = Math.ceil(Math.random()*6);
  var diceDOM = document.querySelector(".dice");
  diceDOM.style.display="block";
  diceDOM.src = "dice-"+dice+".png";

  if(lastDice===6 && dice===6){
    roundScore=0;
    scores[activePlayer]=0;
    document.querySelector("#score-"+activePlayer).textContent=scores[activePlayer];
    nextPlayer();
    lastDice = 1;
    }else if(dice!==1){
    roundScore+=dice;
    document.querySelector("#current-"+activePlayer).textContent= roundScore;
    lastDice = dice;
  }else{
    nextPlayer();
    lastDice = dice;
  }
  
})


document.querySelector(".btn-hold").addEventListener("click", function() {
  lastDice = 0;
  scores[activePlayer]+=roundScore;
  document.querySelector("#score-"+activePlayer).textContent=scores[activePlayer];
  alertWinner();
  nextPlayer();
})

document.querySelector(".btn-new").addEventListener("click", newGame);