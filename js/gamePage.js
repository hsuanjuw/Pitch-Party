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
  show(document.getElementById("popupRules"));
}

function rulesClose(){
  hide(document.getElementById("popupRules"));
}


/* --------------------------------------------------------------
 # InvestorPage
---------------------------------------------------------------*/

function showInvestorPage2(){
  hide(document.getElementById("investorPage1"));
  show(document.getElementById("investorPage2"));
  startTimer();
}

/*--Timer----------------*/
var second=30;
var clock;

function startTimer(){
  clock=setInterval(timer,1000);
}

function stopTimer(){
  clearInterval(clock);
}

function timer(){
  second--;
  document.getElementById('timerText').innerHTML='0:' + second;
  if(second<=0){
    stopTimer();
  }
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
    "Use AR(Augmented Reality) to create an educational exhibit",
    "Create an interactive exhibit about water resource protection", 
    "Combine two different technologies to create an exhibit",
    "Design an exhibit based on your impression of Pittsburgh",
    "Design an exhibit where the devices can be easily updated yearly",
    "Use Kinect to create an exhibit about climate change", 
    "Design an exhibit based on a personal hobby", 
    "Design an exhibit to facilitate communication between parents and children", 
    "Design an exhibit focusing on the relationship between lovers",
    "Use a mobile app in an unconventional way", 
    "Highlight women’s contribution in science and technology", 
    "Design an exhibition for minorities in the society", 
    "An exhibition to reflect monthly astronomy discoveries",
    "Combat science misinformation amongst the public", 
    "Create interesting learning experiences for visitors", 
    "Create a more immersive experience for visitors",
    "A VR(Virtual Reality) experience about pandemic", 
    "An exhibition which could offer the visitor an experience-related reward"
];

const refinements = [
  "Understandable for non-English speakers",
  "Includes all age groups", 
  "Accessible for physically disabled individuals",
  "Easy to maintain social distance",
  "Acts as a landmark exhibit",
  "Can be a traveling exhibit",
  "Requires communication with other visitors",
  "Combines storytelling with the project",
  "Let visitors become a part of the exhibition",
  "An feet-interact exhibition"
];

const personalInterests=[
  "Makes you laugh out loud",
  "Sounds like a colorful exhibition",
  "Your parents would enjoy the exhibition",
  "Uses technology that you’re unfamiliar with",
  "Uses technology that you own", 
  "Similar to an existing exhibit you’ve visited", 
  "You’re an animal-lover",
  "You’re a nature-lover",
  "You’d like a shorter project introduction",
  "You’d want the most expensive idea",
  "You want to keep the costs down",
  'Easiest to visualize in your mind' 
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function randomTopic(){
    var randomInt = getRandomInt(0, topics.length);
    document.getElementById("pitchTopic1").innerHTML = topics[randomInt];
    document.getElementById("pitchTopic2").innerHTML = topics[randomInt];
}

function randomRefinement() {
    var randomInt = getRandomInt(0, refinements.length);
    document.getElementById("pitchRefinement1").innerHTML = "<b>"+refinements[randomInt]+"</b>";
    document.getElementById("pitchRefinement2").innerHTML = "<b>"+refinements[randomInt]+"</b>";
}

function randomPersonalInterest(){
    var randomInt = getRandomInt(0, personalInterests.length);
    document.getElementById("personalInterest1").innerHTML = "<b>"+personalInterests[randomInt]+"</b>";
    document.getElementById("personalInterest2").innerHTML = "<b>"+personalInterests[randomInt]+"</b>";  
}

function randomContent(){
  randomTopic();
  randomRefinement();
  randomPersonalInterest();
}




