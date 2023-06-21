var topics = ["HTML", "CSS", "Git", "JavaScript"];

var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
  for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
  }
}

// This line section is to list all of the available topics

function selectTopics() {
if (randomTopic === 'HTML') {
  console.log("Let's study HTML!");
} else if (randomTopic === 'CSS') {
  console.log("Let's study CSS!");
} else if (randomTopic === 'Git') {
  console.log("Let's study Git!");
} else if (randomTopic === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
}
}

// This section provides a random list of the topics

console.log("Here are the topics we learned through Prework:");

listTopics();

console.log("Which topic should we study first?");

selectTopics();

/*
var shapes = ["triangle", "square", "pentagon", "circle"];
for(var x = 0; x < shapes.length; x++) {
 console.log(shapes[x]);
}
*/

/*
function helloWorld() {
  console.log("Hello, world, I am a function!")
 }
 helloWorld()
*/
