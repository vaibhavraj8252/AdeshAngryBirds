const  Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myWorld , myEngine ,box1,box2;

function preload(){
 bgI=loadImage("bg.png")
}

function setup() {
  createCanvas(1600,800);
  myEngine= Engine.create();
  myWorld = myEngine.world;
 
 ground= new Ground(800,780,1600,30)
 box1=new Box(950,630,130,130)
 box2=new Box(1250,630,130,130)
 piggy1=new Pig(1100,630,130,130)
 stick1= new Stick(1100,580,35,430,PI/2) 
 box3=new Box(950,500,130,130)
 box4=new Box(1250,500,130,130)
 piggy2=new Pig(1100,500,130,130)
 stick2= new Stick(1100,475,35,430,PI/2) 
 box5=new Box(1100,370,130,130)
 stick3=new Stick(1000,320,35,280,PI/6)
 stick4=new Stick(1200,320,35,280,-PI/6)
 redB= new Bird(100,100,100,100)
 plat= new Ground(170,565,380,400)
}

function draw() {
  background(bgI);  
  Engine.update(myEngine)
  box1.display();
  box2.display();
  piggy1.display()
  stick1.display();
  ground.display()
  box3.display();
  box4.display();
  piggy2.display();
  stick2.display();
  box5.display();
  stick3.display();
  stick4.display();
  redB.display();
  plat.display()
 }




