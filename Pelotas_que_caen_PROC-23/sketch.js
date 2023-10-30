const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particle1, particle2,particle3,particle4,particle5;
var particle6, particle7,particle8,particle9,particle10;
var rotator1, rotator2, rotator3;
var block1, block2, block3, block4, block5;
var wall1, wall2;

var boton_up;

var angle1=60;
var angle2=60;
var angle3=60;

function setup(){
    var canvas = createCanvas(550,600);
    engine = Engine.create();
    world = engine.world;

    boton_up = createImg('up.png');
    boton_up.position(20,30);
    boton_up.size(50,50);
    boton_up.mouseClicked(vForce);

    //plano creado y cuerpos de bloques
    var plane_options={
      isStatic: true
    }

    plane = Bodies.rectangle(600,height,1200,20,plane_options);
    World.add(world,plane);
    block1=Bodies.rectangle(100,400,150,20,plane_options);
    World.add(world,block1);
    block2=Bodies.rectangle(450,400,150,20,plane_options);
    World.add(world,block2);
    block3=Bodies.rectangle(0,300,20,600,plane_options);
    World.add(world,block3);
    block4=Bodies.rectangle(550,300,20,600,plane_options);
    World.add(world,block4);
    block5=Bodies.rectangle(275,0,550,200,plane_options);
    World.add(world,block5);

    //partículas múltiples de cuerpos creadas 
    var particle_options = {
      restitution:0.07,
      friction:0.02
    }

    particle1 = Bodies.circle(270,10,10,particle_options);
    World.add(world,particle1);
    particle2 = Bodies.circle(271,10,10,particle_options);
    World.add(world,particle2);
    particle3 = Bodies.circle(272,10,10,particle_options);
    World.add(world,particle3);
    particle4 = Bodies.circle(273,10,10,particle_options);
    World.add(world,particle4);
    particle5 =Bodies.circle(274,10,10,particle_options);
    World.add(world,particle5);
    particle6 = Bodies.circle(275,10,10,particle_options);
    World.add(world,particle6);
    particle7 = Bodies.circle(276,10,10,particle_options);
    World.add(world,particle7);
    particle8 = Bodies.circle(277,10,10,particle_options);
    World.add(world,particle8);
    particle9 = Bodies.circle(278,10,10,particle_options);
    World.add(world,particle9);
    particle10 =Bodies.circle(279,10,10,particle_options);
    World.add(world,particle10);


    var rotator_options={
      isStatic:true
    };

    rotator1 = Bodies.rectangle(100,520,150,20,rotator_options);
    World.add(world,rotator1);

    rotator2 = Bodies.rectangle(260,520,150,20,rotator_options);
    World.add(world,rotator2);

    rotator3 = Bodies.rectangle(450,520,150,20,rotator_options);
    World.add(world,rotator3);

    //dar estilo a los cuerpos aquí
    fill("brown");
    rectMode(CENTER);
    ellipseMode(RADIUS);

}

function draw(){
    background("lightgreen");
    Engine.update(engine);

  //forma creada para el plano y postura
  rect(plane.position.x,plane.position.y,1200,20);
  rect(block1.position.x,block1.position.y,150,20);
  rect(block2.position.x,block2.position.y,150,20);
  rect(block3.position.x,block3.position.y,20,600);
  rect(block4.position.x,block4.position.y,20,600);
  rect(block5.position.x,block5.position.y,550,20);

  //forma creada para todas las partículas
  ellipse(particle1.position.x,particle1.position.y,10);
  ellipse(particle2.position.x,particle2.position.y,10);
  ellipse(particle3.position.x,particle3.position.y,10);
  ellipse(particle4.position.x,particle4.position.y,10);
  ellipse(particle5.position.x,particle5.position.y,10);
  ellipse(particle6.position.x,particle6.position.y,10);
  ellipse(particle7.position.x,particle7.position.y,10);
  ellipse(particle8.position.x,particle8.position.y,10);
  ellipse(particle9.position.x,particle9.position.y,10);
  ellipse(particle10.position.x,particle10.position.y,10);

  //forma creada para todos los rotadores
  Matter.Body.rotate(rotator1,angle1)
  push();
  translate(rotator1.position.x,rotator1.position.y);
  rotate(angle1);
  rect(0,0,150,20);
  pop();
  angle1 +=0.4;

  Matter.Body.rotate(rotator2,angle2)
  push();
  translate(rotator2.position.x,rotator2.position.y);
  rotate(angle2);
  rect(0,0,150,20);
  pop();
  angle2 +=0.4;

  Matter.Body.rotate(rotator3,angle3)
  push();
  translate(rotator3.position.x,rotator3.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3 +=0.4;
    
}

function vForce()
{
  Matter.Body.applyForce(particle1,{x:0,y:0},{x:-0.001,y:-0.001});
  Matter.Body.applyForce(particle2,{x:0,y:0},{x:-0.001,y:-0.001});
  Matter.Body.applyForce(particle3,{x:0,y:0},{x:-0.001,y:-0.001});
  Matter.Body.applyForce(particle4,{x:0,y:0},{x:-0.001,y:-0.001});
  Matter.Body.applyForce(particle5,{x:0,y:0},{x:-0.001,y:-0.001});
  Matter.Body.applyForce(particle6,{x:0,y:0},{x:-0.001,y:-0.001});
  Matter.Body.applyForce(particle7,{x:0,y:0},{x:-0.001,y:-0.001});
  Matter.Body.applyForce(particle8,{x:0,y:0},{x:-0.001,y:-0.001});
  Matter.Body.applyForce(particle9,{x:0,y:0},{x:-0.001,y:-0.001});
  Matter.Body.applyForce(particle10,{x:0,y:0},{x:-0.001,y:-0.001});
}
