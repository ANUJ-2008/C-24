const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin,crumpledBall;
var dustbin2,dustbin3;

var options=
{
isStatic:false,
restituition:0.3,
friction:0.5,
density:1.2
}

function preload()
{
	
}

function setup() 
{
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	dustbin=createSprite(620,675,250,15);
	dustbin.shapeColor="white";

	dustbin2=createSprite(500,632,15,100);
	dustbin2.shapeColor="white";

	dustbin3=createSprite(740,632,15,100);
	dustbin3.shapeColor="white";

	crumpledBall=createSprite(100,650,20,20);
	ellipse(56,46,55,55);
	crumpledBall.shapeColor="red";

	function keyPressed()
	{

		if(keyCode===UP_ARROW)
		{

			Matter.Body.applyForce(crumpledBall,crumpledBall.body.position,{x:85,y:85});

		}




	}


	
	Engine.run(engine);
  
}

	function draw() 
{
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



