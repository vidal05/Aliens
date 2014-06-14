var alienX=Math.floor(Math.random()*260);
var alienY=Math.floor(Math.random()*260);
var guessX=0;
var guessY=0;
var shotsRemaining=8;
var shotsMade=0;
var gameState='';
var won=false;

var cannon = document.querySelector("#cannon");
var alien = document.querySelector("#alien");
alien.style.left = alienX + "px";
alien.style.top = alienY + "px";

var missile = document.querySelector("#missile");

var inputX = document.querySelector("#X");
var inputY = document.querySelector("#Y");
var output = document.querySelector("#output");

var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);

window.addEventListener('keydown', keydownHandler,false);

function keydownHandler(e){
	if(e.keyCode===13){
		validateInput();
	}
}

function clickHandler(){
	validateInput();
}

function validateInput(){
	guessX=parseInt(inputX.value);
	guessY=parseInt(inputY.value);
	
	if(isNaN(guessX) || isNaN(guessY)) {
		output.innerHTML='Stop your faggotry and enter a fucking number';
	}
	else if(guessX >300 || guessY>300){
		output.innerHTML='A number below 300, goddammit';
	}
	else{
		playGame();
	}
}

function playGame(){
	shotsRemaining -=1;
	shotsMade +=1;
	gameState='Shot: ' + shotsMade + ', Shots remaining: ' + shotsRemaining;
	
	if(guessX >= alienX && guessX <= alienX + 20){
		if (guessY >= alienY && guessY <= alienY + 20){
			won=true;
			gameOver();
		}
	}
	else{
		output.innerHTML='You missed the shot.' + gameState;
		if (shotsRemaining<1){
			gameOver();
		}
	}
	if(won==false){
		alienY = Math.floor(Math.random()*260);
		alienX = Math.floor(Math.random()*260);
	}
	render();
}
function render()
{
	alien.style.left = alienX + "px";
	alien.style.top = alienY + "px";

	cannon.style.left = guessX + "px";

	missile.style.left = guessX + "px";
	missile.style.top = guessY + "px";
}

function gameOver(){
	if(won==true){
		output.innerHTML='Great. You killed this bitch.';
	}
	else{
		output.innerHTML='You lose...and got AIDS.';
	}
}
