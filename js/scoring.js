function scoring() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.score) {
      localStorage.score = Number(localStorage.score)+1;
    } else {
      localStorage.score = 1;
    }
  }
}

function onLoadScoring() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.score) {
      document.getElementById("score").innerHTML = localStorage.score;
    } else {
      document.getElementById("score").innerHTML = "0";
    }
  }

  if (typeof(Storage) !== "undefined") {
    if (localStorage.round) {
      document.getElementById("round").innerHTML = localStorage.round;
    } else {
      document.getElementById("round").innerHTML  = 0;
    }
  } 
}

function addRound(){
  if (typeof(Storage) !== "undefined") {
    if (localStorage.round) {
      localStorage.round = Number(localStorage.round)+1;
    } else {
      localStorage.round = 1;
    }
  } 
}
