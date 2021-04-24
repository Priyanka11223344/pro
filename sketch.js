const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var ground1;
var roof1;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    bob1 = new BobClass(480,600,50);
	bob2 = new BobClass(430,600,50);
	bob3 = new BobClass(380,600,50);
	bob4 = new BobClass(330,600,50);
	bob5 = new BobClass(280,600,50);
	roof1 = new Roof(380,200,300,30);
	rope1=new Rope(bob1.body,roof1.body,100, 0);
	rope2=new Rope(bob2.body,roof1.body,50, 0);
	rope3=new Rope(bob3.body,roof1.body,0, 0);
	rope4=new Rope(bob4.body,roof1.body,-50, 0);
	rope5=new Rope(bob5.body,roof1.body,-100, 0);
	Engine.run(engine);
  
}


function draw() {
	background("green");
Engine.update(engine);
  rectMode(CENTER);
 bob1.display();
 roof1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-20,y:0});
	}
}