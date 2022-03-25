/* --------------------------------------------------------------
 # Topic
---------------------------------------------------------------*/
window.onload = randomTopic();

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
    "An exhibition which could offer the visitor an experience-related reward",
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function randomTopic(){
    alert("hij");
    var randomInt = getRandomInt(0, topics.length);
    document.getElementById("pitchTopic1").innerHTML = topics[randomInt];
}