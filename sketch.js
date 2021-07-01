
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let angle1 = 60;
let angle2 = 30;
let angle3 = 45;

function preload()
{
	
}

function setup() {

	createCanvas(800, 700);

    
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  var op = {
    isStatic : true,
  }
 ground = Bodies.rectangle(400,690,800,20,op);
 World.add(world,ground);

	Engine.run(engine);

  block1 = Bodies.rectangle(200,390,100,20,op);
  World.add(world,block1);

  block2 = Bodies.rectangle(600,390,100,20,op);
 World.add(world,block2);

 rotator1 = Bodies.rectangle(400,250,150,20,op);
 World.add(world,rotator1);

 rotator2 = Bodies.rectangle(400,250,150,20,op);
 World.add(world,rotator2);

 rotator3 = Bodies.rectangle(400,250,150,20,op);
 World.add(world,rotator3);

var ballop = {
  restitution : 0.4,
friction : 0.02,
}
 ball1 = Bodies.circle(400,10,10,ballop)
 World.add(world,ball1);

 ball2 = Bodies.circle(450,10,10,ballop)
 World.add(world,ball2);

	rectMode(CENTER);


  
}


function draw() {
	background("lightgreen");

  fill("brown");
	rectMode(CENTER);
rect(ground.position.x,ground.position.y,800,20);

rect(block1.position.x,block1.position.y,100,20);

rect(block2.position.x,block2.position.y,100,20);

Body.rotate(rotator1,angle1 )
  push()
  translate(rotator1.position.x,rotator1.position.y);
  rotate(angle1)
rect(0,0,150,20);
pop()
angle1 = angle1 + 8;

Body.rotate(rotator2,angle2 )
push();
translate(rotator2.position.x,rotator2.position.y);
rotate(angle2);
rect(0,0,150,20);
pop();
angle2 = angle2 + 10;


Body.rotate(rotator3,angle3);
push();
translate(rotator3.position.x,rotator3.position.y);
rotate(angle3);
rect(0,0,150,20);
pop();
angle3 = angle3 + 15;

ellipseMode(RADIUS);
ellipse(ball1.position.x,ball1.position.y,10);
ellipse(ball2.position.x,ball2.position.y,10);
 
  
  drawSprites();
 
}



