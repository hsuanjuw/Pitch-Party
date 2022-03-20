
var IsTopicContentShown = false;
var TopicContentShown;
var playerChoice;

function show(element){
  if(element.classList.contains('hide')){ element.classList.remove("hide"); }
  element.classList.toggle("show");
}

function hide(element){
  if(element.classList.contains('show')){ element.classList.remove('show'); }
  element.classList.toggle("hide");
}

/* --------------------------------------------------------------
 # Topic 
----------------------------------------------------------------*/

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

function topicDropdownFun() { show(document.getElementById("topicDropdownContent"));}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.topic-dropbtn')) {
    var dropdowns = document.getElementsByClassName("topic-dropdown-content");

    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function showTopic(num) {
  hide(document.getElementById("topicDropdownContent"));

  if(IsTopicContentShown){
    hide(TopicContentShown);
  }

  if(parseInt(num)==1 ){
    IsTopicContentShown = true;
    show(document.getElementById("topicContent1"));
    TopicContentShown = document.getElementById("topicContent1");   
  }
  else if(parseInt(num)==2 ){
    IsTopicContentShown = true;
    show(document.getElementById("topicContent2"));
    TopicContentShown = document.getElementById("topicContent2");
  } 
  else if(parseInt(num)==3 ){
    IsTopicContentShown = true;
    show(document.getElementById("topicContent3"));
    TopicContentShown = document.getElementById("topicContent3");
  } 
}


/* --------------------------------------------------------------
 # Game Select 
---------------------------------------------------------------*/
function showSelectionPage (num){
  document.getElementById("topicDropdown").style.display="none";
  hide(TopicContentShown);

  if(parseInt(num)==1 ){
    document.getElementById("topic").innerHTML = "Economic crisis";
    //alert(num);
  }
  else if(parseInt(num)==2 ){
    document.getElementById("topic").innerHTML = "Topic 2";
    //alert(num);
  } 
  else if(parseInt(num)==3 ){
    document.getElementById("topic").innerHTML = "Topic 3";
    //alert(num);
  } 

  var choiceToShow = document.getElementsByClassName("selectionDiv"); //divsToHide is an array
  for(var i = 0; i < choiceToShow.length; i++){
      choiceToShow[i].style.display = "flex"; // depending on what you're doing
  }
}

function showStartGamePage(choice) {
  playerChoice = choice;
  var choiceToShow = document.getElementsByClassName("selectionDiv"); //divsToHide is an array
  for(var i = 0; i < choiceToShow.length; i++){
      choiceToShow[i].style.display = "none"; // depending on what you're doing
  }
  document.getElementById("choiceText").innerHTML = choice;
  show(document.getElementById("startGamePage"));
}


/* --------------------------------------------------------------
 # GamePage 1 - add opponents
---------------------------------------------------------------*/

function showGamePage1(){
  hide(document.getElementById("startGamePage"));
  document.getElementById("choiceText2").innerHTML = playerChoice;
  show(document.getElementById("GamePage"));
}

/*--Timer----------------*/
var time=0;
var min=0;
var second=0;
var clock;

function startTimer(){
  clock=setInterval(timer,1000);
  hide(document.getElementById('startBtn'));
  show(document.getElementById('endBtn'));
}

function stopTimer(){
  clearInterval(clock);
  hide(document.getElementById('GamePage1'));
  hide(document.getElementById('endBtn'));
  //alert(opponentsChoice.length)
  showVotingPage();
}

function timer(){
  time++;
  min = Math.floor(time/60);
  second = time%60;

  document.getElementById('timeText').innerHTML=min + ':' + second;
}

/*--Add opponents----------------*/
var clickedOppNum;
var opponentsChoice = new Array('none');

function addOpponent(num){
  clickedOppNum = num;
  document.getElementById("myModal").style.display = "block";
}

function addOpponentChoice(choice){
  if(opponentsChoice[clickedOppNum] != null){
    opponentsChoice[clickedOppNum] = opponentsChoice;
    document.getElementById('opponentText' + clickedOppNum).innerHTML = choice; // change opponent choice txt
  }
  else{
    opponentsChoice.push(choice);
    // opponentsChoice[clickedOppNum] = opponentsChoice;
    hide(document.getElementById('opponentImg' + clickedOppNum)); // hide plusImg
    document.getElementById('opponentText' + clickedOppNum).innerHTML = choice;
    show(document.getElementById('opponentText' + clickedOppNum)); // show text 
  }

  document.getElementById("myModal").style.display = "none";
}

/* --------------------------------------------------------------
 # GamePage 2- voting 
---------------------------------------------------------------*/

function showVotingPage(){
  var i;
  //alert(opponentsChoice[1]);
  for (i=1; i<opponentsChoice.length; i++){
      document.getElementById('vote' + i).innerHTML = opponentsChoice[i];
  }
  show(document.getElementById('GamePage2'));
}

function showVoteResult(num){
  hide(document.getElementById('GamePage'));
  document.getElementById('resultText').innerHTML = opponentsChoice[num];
  show(document.getElementById('ResultPage'));
}








