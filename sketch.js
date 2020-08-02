var bullet, wall;
var thickness, speed, weight;


function setup() {
  createCanvas(1600,400);
  thickness = random(22, 83);
  speed = random(223, 321);
  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;
  weight = random(30, 52);
  wall = createSprite(1200, 200, thickness, height/2);
}

function draw() {
  background(255,255,255);
  
  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;

    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if (damage > 10){
      wall.shapeColor = color("red");
    }

    if (damage < 10){
      wall.shapeColor = color("green");
    }

  }

  drawSprites();
}

function hasCollided(lbullet, lwall){
var bulletRightEdge = lbullet.x + lbullet.width;
var wallLeftEdge = lwall.x;

  if (bulletRightEdge > wallLeftEdge){
    return true;
  }
  return false;
}