 /* --------------------------------------------------------------
 # General
----------------------------------------------------------------*/ 
function show(element){
  if(element.classList.contains('hide')){ element.classList.remove("hide"); }
  element.classList.toggle("show");
}

function hide(element){
  if(element.classList.contains('show')){ element.classList.remove('show'); }
  element.classList.toggle("hide");
}

/* --------------------------------------------------------------
 # Rules - close and show 
----------------------------------------------------------------*/

function rulesShow(){
  show(document.getElementById("popupRulesModal"));
}

function rulesClose(){
  hide(document.getElementById("popupRulesModal"));
}

/* --------------------------------------------------------------
 # Rules - close and show 
----------------------------------------------------------------*/
function QuitPopupShow(){
  show(document.getElementById("quitPopup"));
}

function QuitPopupClose(){
  hide(document.getElementById("quitPopup"));
}


/* --------------------------------------------------------------
 # InvestorPage
---------------------------------------------------------------*/

function showInvestorPage2(){
  document.getElementsByTagName('body')[0].classList.remove("investor-bg-sci");
  document.getElementsByTagName('body')[0].classList.toggle("investor-bg");
  hide(document.getElementById("investorPage1"));
  show(document.getElementById("investorPage2"));
}

/* --------------------------------------------------------------
 # DesignerPage
---------------------------------------------------------------*/

/*--Timer----------------*/
var second=30;
var clock;

function startTimer(){
  clock=setInterval(timer,1000);
  hide(document.getElementById("timerBtn"));
  document.getElementById("retimerBtn").style.display="inline-block";
  //document.getElementById("investorPage2Btn").style.display="inline-block";  
}

function stopTimer(){
  clearInterval(clock);
}

function timer(){
  if(second>9){
    document.getElementById('timerText').innerHTML='0:' + second;
  }
  else{
    document.getElementById('timerText').innerHTML='0:0' + second;
  }
  second--;
  if(second<0){
    stopTimer();
  }
}

function restartTimer(){
  stopTimer();
  second=30;
  clock=setInterval(timer,1000);
}

function pauseTimer(){
  stopTimer();
  show(document.getElementById("timerBtn"));
  document.getElementById("retimerBtn").style.display="none";
}

/*--End Timer----------------*/

function showInvestorPage3(){
  stopTimer();
  hide(document.getElementById("investorPage2"));
  show(document.getElementById("investorPage3"));
}

function showInvestorPage4(){
  hide(document.getElementById("investorPage3"));
  show(document.getElementById("investorPage4"));  
}

function test1(){
  alert(inspirationDic[1]["inspiration"][0]);
}


//Designer Page Enter to Submit//
function  submitCode(){
  var input = document.getElementById("topicCode");
  input.addEventListener("keyup",function(event){
    if(event.key==="Enter"){
      event.preventDefault();
      document.getElementById("submitCodebtn").click();
    }
  });
}

/* --------------------------------------------------------------
 # Sound
---------------------------------------------------------------*/
//Play onClick Sound
function playButtonSound(){
  var audio = new Audio();
  audio.src="sound/Button_Click.wav";
  audio.play();
}

//Play BGM
function playBGM(){
  var audio = new Audio();
  audio.src="sound/BGM.mp3";
  audio.play();
}


