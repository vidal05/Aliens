var alienX=80;
var alienY=20;
var guessX=0;
var guessY=0;
var shotsRemaining=8;
var shotsMade=0;
var gameState='';
var won=false;

var cannon=document.querySelector('#cannon');
var alien=document.querySelector('#alien');
var missile=document.querySelector('#missile');

var inputX=document.querySelector('#X');
var inputY=document.querySelector('#Y');
var output=document.querySelector('#output');

var button=document.querySelector('button');
button.addEventListener('click',clickHandler,false);

function clickHandler(){
	
}

