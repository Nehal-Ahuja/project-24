
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var rect1,rect2,rect3;
var rect1_body,rect2_body,rect3_body;

var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(100,150,50);
	

	rect1=createSprite(1000,350,200,20);
	rect1.shapeColor="white";
	rect1_body=Bodies.rectangle(1000,350,200,20);
	World.add(world,rect1_body);
	
	rect2=createSprite(1100,300,20,100);
	rect2.shapeColor="white";
	rect2_body=Bodies.rectangle(1100,300,20,100);
	World.add(world,rect2_body);
	
	rect3=createSprite(900,300,20,100);
	rect3.shapeColor="white";
	rect3_body=Bodies.rectangle(900,300,20,100);
	World.add(world,rect3_body);

	ground=new Ground(600,370,1200,20);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  paper.display();
  drawSprites();
 
}



