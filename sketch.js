const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
 ground=new Ground(1000,600,1200,20)
 box1=new Box(900,340,50,50)
 box2=new Box(900,340,50,50)
 box3=new Box(900,340,50,50)
 box4=new Box(900,340,50,50)
 box5=new Box(1000,340,50,50)
 box6=new Box(1000,340,50,50)
 box7=new Box(1000,340,50,50)
 box8=new Box(1000,340,50,50)
 box9=new Box(1100,340,50,50)
 box10=new Box(1100,340,50,50)
 box11=new Box(1100,340,50,50)
 box12=new Box(1100,340,50,50)
 ball=new Ball(700,50,50)
 rope=new Rope({x:700,y:110},ball.body)

  

}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  ball.display();
  rope.display();

}



