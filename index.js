var readlineSync = require("readline-sync");

var score=0;
var highScores=[{
  name:"Mansi",
  hscore:3
}];
var questions=[{
    question:"How old I am? ", 
    answer: "20"
  },

  {
    question:"My favorite superhero would be? ",
    answer:"Mom"
  },

  {
    question: "Where do I study? ",
    answer: "Lovely Professional University"
  },

  {
    question: "Where do I live? ",
    answer: "Jalandhar"
  },

  {
    question: "In which year I was born? ",
    answer: "2000"
  }
];

function Welcome(){
  var UserName= readlineSync.question("Enter you name? ");
  console.log("Welcome "+ UserName + " Get ready to play the quiz!");
}

function play(question, answer){
  var userAnswer= readlineSync.question(question);

  if(userAnswer.toUpperCase()=== answer.toUpperCase()){
    console.log("Right!");
    score++;
  }
  else{
    console.log("Wrong!");
  }

  console.log("Current score: ", score);
  console.log("_____________");
}

function game(){
  for(var i=0; i < questions.length; i++){
    var currentQues=questions[i];
    play(currentQues.question, currentQues.answer);
  }
}

function showScores(){
  console.log("YAY! You completed the quiz. Your score is: ",score);

  for(var i=0; i<highScores.length; i++){
    var currentScore=highScores[i];
    if(score> currentScore.hscore){
      console.log("HURRAY! You have beaten the highest score.");
      break;
    }
  }

  console.log("Check out others' scores, if you should be there ping me and I'll update it.");
  highScores.map(score => console.log(score.name, " : ", score.hscore));
}

Welcome();
game();
showScores();