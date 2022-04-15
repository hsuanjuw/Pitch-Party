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
function hintShow(){
  show(document.getElementById("inspirationHints"));
}

function hintClose(){
  hide(document.getElementById("inspirationHints"));
}


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
  document.getElementById('timerText').innerHTML='0:' + second;
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



/* --------------------------------------------------------------
 # Topic
---------------------------------------------------------------*/
const topics = [
"Use AR (Augmented Reality) for an educational experience",
"Design an interactive experience on water resource protection",
"Combine two different technologies for an interactive experience",
"Design an experience based on your impression of Pittsburgh", 
"Design an exhibit that can be easily updated yearly", 
"Use gesture technology to create an experience on climate change", 
"Design an experience based on a personal hobby", 
"Use a mobile app in an unconventional way",  
"Highlight women’s contributions to science and technology",  
"Highlight minorities’ contributions to science and technology", 
"Highlight a scientist who you believe deserves more recognition",  
"Design an experience to reflect monthly astronomy discoveries", 
"Combat health misinformation", 
"Combat climate change misinformation", 
"Create an interactive learning experience for large groups", 
"Create an immersive experiential event", 
"Create a VR (Virtual Reality) experience on the pandemic" 
];

//Technology, Science, Diversity
const topics_category = [
  "Technology",
  "Science",
  "Technology",
  "Diversity",
  "Technology",
  "Technology",
  "Diversity",
  "Technology",
  "Diversity",
  "Diversity",
  "Diversity",
  "Science",
  "Science", 
  "Science",
  "Diversity",
  "Diversity",
  "Technology"
];


const refinements = [
  "Understandable for non-English speakers",
  "Includes all age groups", 
  "Accessible for physically disabled individuals",
  "Easy to maintain social distance",
  "Acts as a local landmark",
  "Can be a traveling exhibit",
  "Requires communication with other visitors",
  "Integrates storytelling into the experience",
  "Lets visitors become a permanent part of the experience",
  "Lets visitors enjoy a personalized experience", 
  "Improves visitors’ mental health",
  "Costs 300 dollars to visit",
  "Requires visitors to wear sports clothes",
  "Opens only at night",
  "Opens for only 1 hour a day",
  "Located on top of a mountain",
  "Located at a public transit stop",
  "Involves pop culture (anime, superheroes, etc.)",
  "Requires visitors to wear Halloween costumes", 
  "Primarily targeted towards visitors’ pets", 
  "Constructed out of edible materials",
  "Suitable for a romantic date night"

];

const personalInterests=[
  "Makes you laugh out loud",
  "Your parents would enjoy the experience",
  "Uses technology that you’re unfamiliar with",
  "Uses technology that you already own", 
  "Similar to an existing experience you know about",
  "You’re an animal-lover",
  "You’re a nature-lover",
  "You want the pitch with the shortest explanation", 
  "You want the most expensive pitch",
  "You want the most affordable pitch",
  "You want an experience that looks good on social media",
  "Easiest pitch for you to visualize in your mind", 
  "You want high visitor throughput"  
];

let inspirationDic = {
  0:{
      topic : "Use AR (Augmented Reality) for an educational experience",
      category : "Technology",
      inspiration : [
        "eee",
        "www",
        "ddd"
      ],
    }, 
  1:{
      topic : "Use AR (Augmented Reality) for an educational experience",
      category : "Technology",
      inspiration : [
        "aaa",
        "bbb",
        "ccc"
      ],
    },
};

function test1(){
  alert(inspirationDic[1]["inspiration"][0]);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function randomTopic(){
    var randomInt = getRandomInt(0, topics.length);
    document.getElementById("pitchTopic1").innerHTML = topics[randomInt];
    document.getElementById("pitchTopic2").innerHTML = topics[randomInt];
    document.getElementById("pitchTopic3").innerHTML = topics[randomInt];
    document.getElementById("pitchTopic4").innerHTML = topics[randomInt];
    // if(topics_category[randomInt]=="Technology"){
    //   document.getElementById("pitchTopic-img").src = "img/investor/topic_tech.png";
    // }
    // else if(topics_category[randomInt]=="Science"){
    //   document.getElementById("pitchTopic-img").src = "img/investor/topic_sci.png";
    // }
    // else if(topics_category[randomInt]=="Diversity"){
    //   document.getElementById("pitchTopic-img").src = "img/investor/topic_div.png";
    // }
    return randomInt;
}

function randomRefinement() {
    var randomInt = getRandomInt(0, refinements.length);
    document.getElementById("pitchRefinement1").innerHTML = refinements[randomInt];
    document.getElementById("pitchRefinement2").innerHTML = refinements[randomInt];
    document.getElementById("pitchRefinement3").innerHTML = refinements[randomInt];
    document.getElementById("pitchRefinement4").innerHTML = refinements[randomInt];
    return randomInt;
}

function randomPersonalInterest(){
    var randomInt = getRandomInt(0, personalInterests.length);
    document.getElementById("personalInterest1").innerHTML = personalInterests[randomInt];
    // document.getElementById("personalInterest2").innerHTML = personalInterests[randomInt];
    // document.getElementById("personalInterest3").innerHTML = personalInterests[randomInt];  
}

function randomContent(){
  var topicNum = randomTopic();
  var refinementNum = randomRefinement();
  var topicCode = String.fromCharCode(65+topicNum);;
  randomPersonalInterest();

  document.getElementById("investorTopicCode").innerHTML = topicCode+refinementNum.toString();
}

function showTopic(){
  var code1 = document.getElementById('topicCode').value.substring(0,1);
  var code1Num = code1.charCodeAt(0)-65;
  var code2 = parseInt(document.getElementById('topicCode').value.substring(1));
  //Designer Page
  document.getElementById("designTopic").innerHTML = topics[code1Num];
  document.getElementById("designRefinement").innerHTML = refinements[code2];
  document.getElementById("checkDiv").style.display="none";
  show(document.getElementById("designTopicDiv"));
  //Investor Page

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



