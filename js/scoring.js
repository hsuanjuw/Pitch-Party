function scoring() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.score) {
      localStorage.score = Number(localStorage.score)+1;
    } else {
      localStorage.score = 1;
    }
    document.getElementById("score").innerHTML = localStorage.score;
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
}