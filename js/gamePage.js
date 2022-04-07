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
}

/*--Timer----------------*/
var second=30;
var clock;

function startTimer(){
  clock=setInterval(timer,1000);
  hide(document.getElementById("timerBtn"));
  document.getElementById("retimerBtn").style.display="inline-block";
  document.getElementById("investorPage2Btn").style.display="inline-block";  
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
  "Use AR (Augmented Reality) to create an educational exhibit", 
  "Design an interactive exhibit about water resource protection", 
  "Combine two different technologies to create an interactive exhibit",
  "Design an exhibit based on your first impression of Pittsburgh", 
  "Design an exhibit that can be easily updated yearly", 
  "Use Kinect to create an exhibit about climate change", 
  "Design an exhibit based on a personal hobby", 
  "Design an exhibit centered on the relationship between couples", 
  "Use a mobile app in an unconventional way as part of an exhibit",  
  "Highlight women’s contributions to science and technology", 
  "Highlight minorities’ contributions to science and technology", 
  "Highlight a scientist who you believe deserves more recognition",  
  "Design an exhibit to reflect monthly astronomy discoveries",  
  "Combat health misinformation amongst the public", 
  "Combat climate change misinformation amongst the public", 
  "Create an interactive learning experience for large groups", 
  "Create an immersive experiential event for visitors" 
];

const topics_category = [
  "Technology",
  "Science",
  "Technology",
  "Technology",
  "Technology",
  "Technology",
  "Technology",
  "Technology",
  "Technology",
  "Diversity",
  "Diversity",
  "Diversity",
  "Science", 
  "Science",
  "Science",
  "Technology",
  "Technology"
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
  "An feet-interact exhibition",
  "Costs 300 dollars to visit",
  "Requires visitors to wear sports clothes",
  "Opens only at night",
  "Opens for only 1 hour a day",
  "Located on top of a mountain",
  "Located at a public transit stop",
  "Involves pop culture (anime, superheroes, etc.)",
  "Requires visitors to wear Halloween costumes", 
  "Primarily targeted towards visitors’ pets", 
  "Constructed out of edible materials"
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
    document.getElementById("pitchTopic3").innerHTML = topics[randomInt];
    document.getElementById("pitchTopic4").innerHTML = topics[randomInt];
    if(topics_category[randomInt]=="Technology"){
      document.getElementById("pitchTopic-img").src = "img/investor/topic_tech.png";
    }
    else if(topics_category[randomInt]=="Science"){
      document.getElementById("pitchTopic-img").src = "img/investor/topic_sci.png";
    }
    else if(topics_category[randomInt]=="Diversity"){
      document.getElementById("pitchTopic-img").src = "img/investor/topic_div.png";
    }
}

function randomRefinement() {
    var randomInt = getRandomInt(0, refinements.length);
    document.getElementById("pitchRefinement1").innerHTML = "<b>"+refinements[randomInt]+"</b>";
    document.getElementById("pitchRefinement2").innerHTML = "<b>"+refinements[randomInt]+"</b>";
    document.getElementById("pitchRefinement3").innerHTML = "<b>"+refinements[randomInt]+"</b>";
    document.getElementById("pitchRefinement4").innerHTML = "<b>"+refinements[randomInt]+"</b>";
}

function randomPersonalInterest(){
    var randomInt = getRandomInt(0, personalInterests.length);
    document.getElementById("personalInterest1").innerHTML = "<b>"+personalInterests[randomInt]+"</b>";
    document.getElementById("personalInterest2").innerHTML = "<b>"+personalInterests[randomInt]+"</b>";
    document.getElementById("personalInterest3").innerHTML = "<b>"+personalInterests[randomInt]+"</b>";  
}

function randomContent(){
  randomTopic();
  randomRefinement();
  randomPersonalInterest();
}

function showTopic(){
  var code1 = document.getElementById('topicCode').value.substring(0,1);
  var code1Num = code1.charCodeAt(0)-65;
  var code2 = parseInt(document.getElementById('topicCode').value.substring(1));
  document.getElementById("designTopic").innerHTML = topics[code1Num];
  document.getElementById("designRefinement").innerHTML = refinements[code2];
  document.getElementById("checkDiv").style.display="none";
  show(document.getElementById("designTopicDiv"));

}



