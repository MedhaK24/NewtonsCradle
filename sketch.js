const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;

function setup() {
	createCanvas(800,800);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,790,800,10)
	roof = new Ground(400,200,400,20)

	bob1 = new Bob(400,500,50)
	bob2 = new Bob(350,500,50)
	bob3 = new Bob(300,500,50)
	bob4 = new Bob(450,500,50)
	bob5 = new Bob(500,500,50)

	connect1 = new Connection(roof.ground,bob1.bob)
	connect2 = new Connection(roof.ground,bob2.bob)
	connect3 = new Connection(roof.ground,bob3.bob)
	connect4 = new Connection(roof.ground,bob4.bob)
	connect5 = new Connection(roof.ground,bob5.bob)



	Engine.run(engine); 
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  ground.show()
  roof.show()
  bob1.show()
  bob2.show()
  bob3.show()
  bob4.show()
  bob5.show()
  connect1.show()
  connect2.show()
  connect3.show()
  connect4.show()
  connect5.show()
}

