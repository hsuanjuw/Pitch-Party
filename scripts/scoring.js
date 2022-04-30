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
      if(localStorage.round>=5 & localStorage.round<10){
        document.getElementById("trophyImg").src = "img/win/Bronze.png";
        show( document.getElementById("trophyImg"));
      }
      else if(localStorage.round>=10 & localStorage.round<15){
        document.getElementById("trophyImg").src = "img/win/Silver.png";
        show( document.getElementById("trophyImg"));
      }
      else if(localStorage.round>=15){
        document.getElementById("trophyImg").src = "img/win/Gold.png";
        show( document.getElementById("trophyImg"));
      }

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
