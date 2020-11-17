const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var ground;
var pig1;
var log1

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600, 385, 70, 70)
    box2 = new Box(800, 385, 70, 70)

    ground = new Ground(600, height, 1200, 10)

    pig1 = new Pig(700, 385)
    log1 = new Log(700, 355, 300, PI / 2)
    box3 = new Box(600, 345, 70, 70)
    box4 = new Box(800, 345, 70, 70)
    pig2 = new Pig(700, 350)
    log2 = new Log(700, 330, 300, PI / 2)
    box5 = new Box(700, 300, 70, 70)
    log3 = new Log(650, 300, 150, PI / 7)
    log4 = new Log(750, 300, 150, -PI / 7)

    bird = new Bird(200,200)
}

function draw() {
    background(0);
    Engine.update(engine);

    box1.display()
    box2.display()
    box3.display()
    box4.display()
    ground.display()
    pig1.display()
    pig2.display()
    log1.display()
    log2.display()
    box5.display()
    log3.display()
    log4.display()
bird.display()
}