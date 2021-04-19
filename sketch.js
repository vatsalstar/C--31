var particles,plinko;
var divisions,ground;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);


  var particles = [];
  var plinkos = [];
  var divisions = [];


}

function draw() {
  background(255,255,255);  

  var divisionHeight = 300;
  for(var k=0; k <width; k = k+80){
    division.push(newDivisions(k, height - divisionHeight/2,10,divisionHeight));
  }

  drawSprites();
}