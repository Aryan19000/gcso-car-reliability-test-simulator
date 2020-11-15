var car, wall, speed, weight;

function setup() {
  createCanvas(1200,400);
  wall=createSprite(1145, 200, 60, height/2);
  car=createSprite(50, 200, 50, 50);
  car.shapeColor="white";
  speed=Math.round(random(55, 90));
  weight=Math.round(random(400, 1500));
}

function draw() {
  background(0); 
  car.velocityX=speed; 
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=(0.5*weight*speed*speed)/22500;
    if(deformation<100){
      car.shapeColor=rgb(0, 255, 0);
    }else if(deformation>=100&&deformation<180){
      car.shapeColor=rgb(230, 230, 0);
    }else if(deformation>=180){
      car.shapeColor=rgb(255, 0, 0);
    }
  }
  drawSprites();
}