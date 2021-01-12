var readlineSync = require("readline-sync");
const chalk = require('chalk');

var score=0;
var highScores=[{
  name:"Mansi",
  hscore:3
}];
var questions=[{
    question:"1. How old I am? \n:  ", 
    answer: "20"
  },

  {
    question:"2. Do I have a sweet tooth? \n:  ",
    answer:"No"
  },

  {
    question: "3. In which year I was born? \n:  ",
    answer: "2000"
  },

  {
    question: "4. Where do I live? \n:  ",
    answer: "Jalandhar"
  },

  {
    question: "5. My favorite motorcycle racer would be? \n:  ",
    answer: "valentino rossi"
  }
];

function Welcome(){
  var UserName= readlineSync.question("Enter you name? ");
  console.log("Welcome "+ chalk.blue(UserName.toUpperCase()) + ", Get ready to play the quiz!");
  console.log(chalk.underline("\n How well do you know Mansi? \n"));
}

function play(question, answer){
  var userAnswer= readlineSync.question(question);

  if(userAnswer.toUpperCase()=== answer.toUpperCase()){
    console.log(chalk.black.bgGreen(" Right! "));
    score++;
    console.log("Current score: ", chalk.green(score));
    console.log("_____________\n");
  }
  else{
    console.log(chalk.white.bgRed(" Wrong! "));
    console.log("Current score: ", chalk.red(score));
    console.log("_____________\n");
  }
}

function game(){
  for(var i=0; i < questions.length; i++){
    var currentQues=questions[i];
    play(currentQues.question, currentQues.answer);
  }
}

function showScores(){
  console.log(chalk.yellow("YAY! You completed the quiz. Your score is: "),chalk.green(score));

  for(var i=0; i<highScores.length; i++){
    var currentScore=highScores[i];
    if(score> currentScore.hscore){
      console.log(chalk.green("HURRAY! You have beaten the highest score."));
      break;
    }
  }

  console.log("\nCheck out others' scores, if you should be there ping me and I'll update it.\n");
  highScores.map(score => console.log(score.name, " : ", score.hscore));
}

Welcome();
game();
showScores();