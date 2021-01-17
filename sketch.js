
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	ground1 = new Ground(300,100,337,50);
	ground2 = new Ground(350,100,337,50)
	ground3 = new Ground(400,100,337,50)
	ground4 = new Ground(450,100,337,50)
	ground5 = new Ground(500,100,337,50)
	bob1 = new Bob(300,400);
	bob2 = new Bob(350,400);
	bob3 = new Bob(400,400);
	bob4 = new Bob(450,400);
	bob5 = new Bob(500,400);
	slingShot1 = new Chain(bob1.body , ground1.body, 0, 250);
	slingShot2 = new Chain(bob2.body , ground2.body, 0, 250);
	slingShot3 = new Chain(bob3.body , ground3.body, 0, 250);
	slingShot4 = new Chain(bob4.body , ground4.body, 0, 250);
	slingShot5 = new Chain(bob5.body , ground5.body, 0, 250);
	
}


function draw() {
  //rectMode(CENTER);
  background(245);
  
  //drawSprites();
  
  ground3.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  slingShot1.display()
  slingShot2.display()
  slingShot3.display()
  slingShot4.display()
  slingShot5.display()



}

function mouseDragged() {

	if(IsTouching(bob1)) {
			Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
	}

	if(IsTouching(bob2)) {
		Matter.Body.setPosition(bob2.body, {x: mouseX , y: mouseY});
}

if(IsTouching(bob3)) {
	Matter.Body.setPosition(bob3.body, {x: mouseX , y: mouseY});
}

if(IsTouching(bob4)) {
	Matter.Body.setPosition(bob4.body, {x: mouseX , y: mouseY});
}

if(IsTouching(bob5)) {
	Matter.Body.setPosition(bob5.body, {x: mouseX , y: mouseY});
}
	
	
}



