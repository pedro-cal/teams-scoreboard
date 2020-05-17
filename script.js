//Variables Declarations
var results = document.getElementById('results');
results.innerHTML = "Results Here";

var scoreA = 0;
var scoreB = 0;
document.getElementById('score-a').innerHTML = scoreA;

//Add score buttons functionality
//TEAM A BUTTONS
const btnAPlus = document.getElementById('btn-aPlus');
btnAPlus.onclick = function() {incrementA()};

const btnAMinus = document.getElementById('btn-aMinus');
btnAMinus.onclick = function() {decreaseA()};

function incrementA() {  
 	let currentScoreA = document.getElementById('score-a').innerHTML;
  currentScoreA++;
  document.getElementById('score-a').innerHTML = currentScoreA;
  results.innerHTML = `Team A Scored`;
}
function decreaseA() {  
 	let currentScoreA = document.getElementById('score-a').innerHTML;
  currentScoreA--;
  document.getElementById('score-a').innerHTML = currentScoreA;
  results.innerHTML = `Team A Lost a Point`;
}

//TEAM B BUTTONS
const btnBPlus = document.getElementById('btn-bPlus');
btnBPlus.onclick = function() {incrementB()};

const btnBMinus = document.getElementById('btn-bMinus');
btnBMinus.onclick = function() {decreaseB()};

function incrementB() {  
 	let currentScoreB = document.getElementById('score-b').innerHTML;
  currentScoreB++;
  document.getElementById('score-b').innerHTML = currentScoreB;
  results.innerHTML = `Team B Scored`;
}
function decreaseB() {  
 	let currentScoreB = document.getElementById('score-b').innerHTML;
  currentScoreB--;
  document.getElementById('score-b').innerHTML = currentScoreB;
  results.innerHTML = `Team B Lost a Point`;
}