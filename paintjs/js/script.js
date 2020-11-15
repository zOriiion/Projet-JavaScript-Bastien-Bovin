let isDrawing = false;
let x = 0;
let y = 0;
action ='libre';
epaisseur = 1;

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
  context.strokeStyle="blue";
  context.lineWidth="2"; 
  context.fillStyle="black";
  context.save();
  context.fillRect(0,0,400,400);
  canvas.temporaire = document.createElement('canvas');
  canvas.temporaire.width = 400;
  canvas.temporaire.height = 400;
  canvas.temporaireCtx = canvas.temporaire.getContext('2d');

canvas.addEventListener('mousedown', e => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
  if (action == 'ligne') {
  canvas.departX = e.clientX - canvas.getBoundingClientRect().left;
  canvas.departY = e.clientY - canvas.getBoundingClientRect().top;
  canvas.temporaireCtx.drawImage(canvas,0,0);
 }
 if (action == 'carre') {
	canvas.departX = e.clientX - canvas.getBoundingClientRect().left;
	canvas.departY = e.clientY - canvas.getBoundingClientRect().top;
	canvas.temporaireCtx.drawImage(canvas,0,0);
  
  
 }
 if (action == 'tri') {
	canvas.departX = e.clientX - canvas.getBoundingClientRect().left;
	canvas.departY = e.clientY - canvas.getBoundingClientRect().top;
	canvas.temporaireCtx.drawImage(canvas,0,0);
  
  
 }
 
});

canvas.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    if(action=='libre'){
      drawLine(context, x, y, e.offsetX, e.offsetY);
      x = e.offsetX;
      y = e.offsetY;
    }
    if (action == 'ligne') {
	  x2 = e.clientX - canvas.getBoundingClientRect().left;
      y2 = e.clientY - canvas.getBoundingClientRect().top;
      drawImage(canvas, 0, 0, canvas.temporaire);
      drawLine(context, canvas.departX, canvas.departY, x2, y2);
    }
	if (action == 'carre') {
	  x2 = e.clientX - canvas.getBoundingClientRect().left;
      y2 = e.clientY - canvas.getBoundingClientRect().top;
      drawImage(canvas, 0, 0, canvas.temporaire);
      drawLine(context, canvas.departX, canvas.departY, x2, y2);
    }
  }
});

window.addEventListener('mouseup', e => {
  isDrawing = false;
});



function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  changeCouleur();
  context.lineWidth = epaisseur;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
  valeurDirectX.value = x;
  valeurDirectY.value = y;
  if (action=="gomme"){
  context.clearRect(x1, x2, y1, y2);
  context.save();  
  }
  
}


var couleur= document.getElementById("changerCouleur");
couleur.addEventListener("change",changeCouleur,false);
function changeCouleur(){
	if (couleur.value == 1) {
	context.strokeStyle = 'black';
	context.lineWidth = 50;
  }
	if (couleur.value == 2){
		context.strokeStyle = '#FF00FF';  
		context.strokeWidth = 50;
  }
	if (couleur.value == 3){
		context.strokeStyle = '#007FFF';  
  }
	if (couleur.value == 4){
		context.strokeStyle = '#FF0000';  
  }
}


var boutonTrait = document.getElementById("boutonTrait");
boutonTrait.addEventListener("click", drawLine2, false);
function drawLine2(canvas, x1, y1, x2, y2){
	action='ligne';
}


var boutonStylo = document.getElementById("boutonStylo");
boutonStylo.addEventListener("click", drawWithStylo, false);
function drawWithStylo(canvas, x1, y1, x2, y2){
	action='libre';
}



var boutonEpPlus = document.getElementById("boutonEpPlus");
boutonEpPlus.addEventListener("click", drawEpPlus, false);
function drawEpPlus(canvas, x1, y1, x2, y2){
	epaisseur+=1;
	Nepaisseur.value = epaisseur;
}

var boutonEpMoins = document.getElementById("btEpMoin");
boutonEpMoins.addEventListener("click", drawEpMoins, false);
function drawEpMoins(canvas, x1, y1, x2, y2){
	epaisseur-=1;
	Nepaisseur.value = epaisseur;
}


var boutonGomme = document.getElementById('boutonGomme');
boutonGomme.addEventListener("click", drawGomme, false);
function drawGomme(){
	action='libre';
	couleur.value = 5;
	context.strokeStyle = 'white';
  
}


var boutonEffacer = document.getElementById('boutonEffacer');
boutonEffacer.addEventListener("click", effacer, false);
function effacer(){
	context.fillStyle = 'white'; 
	context.fillRect(0,0,400,400); 
  
}

drawLine();



