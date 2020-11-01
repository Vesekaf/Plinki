const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var engine, world;

var divider1, divider2, divider3, divider4, divider5;

var particles = [];
var plinko = [];
var divider = [];

var divisionHeight = 300;



function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground  = new Ground(240, 780, 800, 100);

  /*divider1 = new Divider(70, 580, 30, 300);
  divider2 = new Divider(160, 580, 30, 300);
  divider3 = new Divider(240, 580, 30, 300);
  divider4 = new Divider(315, 580, 30, 300);
  divider5 = new Divider(400, 580, 30, 300);
*/

}

function draw() {
  background("white");  

  Engine.update(engine);
  
  


  


 /* divider1.display();
  divider2.display();
  divider3.display();
  divider4.display();
  divider5.display();
*/
for(var i = 0; i <= width; i = i + 80){

  divider.push(new Divider(i, height-divisionHeight/2, 10, divisionHeight));

}
for(var j = 15; j <= width; j = j + 50){

  plinko.push(new Plinko(j, 75, 20));

}
for(var k = 30; k <= width-10; k = k + 50){

  plinko.push(new Plinko(k, 175, 20));

}

if(frameCount%60 === 0){

    particles.push(new Particle(random(width/2-10, width/2+10), 10, 5));
    


}


ground.display();


for(var m = 0; m < plinko.length; m++){

  plinko[m].display();


}
for(var n = 0; n < divider.length; n++){

  divider[n].display();


}
for(var o = 0; o < particles.length; o++){

  
particles[o].display();

}


drawSprites();
}