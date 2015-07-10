// Beginning variables
var questions = ["question1", "question2", "question3", "question4"];
var questionIndex = 0;
var score = 0;

// Begin game by clicking "Play game".
//
// Changes visibility for question 1.
document.getElementById("play").onclick=function(){
  question1 = document.getElementById("question1");
  question1.style.visibility = (question1.style.visibility == "visible") ? "hidden" : "visible";
  start = document.getElementById("play");
  start.style.visibility = (start.style.visibility == "hidden") ? "visible" : "hidden";
}

// Check if answer is correct.
//
// Returns value of selected answer- 1 for correct, 0 for wrong.
function selectedAnswer(){
  var options = document.forms[0].elements['user_answer'];  
  for (var i = 0; i < options.length; i++){
    if (options[i].checked){
      var val = options[i].value;
    }
  }
  val;
}

// If answer is correct (has value of 1) add 1 to the score.
//
// Return updated score.
function updateScore(){
  var value = selectedAnswer();
  if (value == 1){
    score++;
  }
  score;
}

function displayQuestion() {
  var questionHTML = document.getElementById("question");
  questionHTML.innerText = questions[questionIndex].question;
};

//
function clearAnswer(){
  document.getElementById("answer").value = "";
  document.getElementById("question_result").innerText = "";
}

//
function nextQuestion(){
  questionIndex++;
  displayQuestion();
  clearAnswer();
};


function nextQuestion(){
  updateScore();
  question = document.getElementById(questions[questionIndex++]);
  question.style.visibility = (question.style.visibility == "visible") ? "hidden" : "visible";
  previousQuestion = document.getElementById(questions[questionIndex]);
  previousQuestion.style.visibility = (previousQuestion.style.visibility == "hidden") ? "visible" : "hidden";
}


document.getElementById("submit").onclick=function(){
  nextQuestion;
  return false
}


