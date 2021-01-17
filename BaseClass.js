// Parent class from which child classes will be inheriting properties and functions
class BaseClass{
  constructor(x, y, width, height, angle) {
      var options = {
        
        'restitution': 1,
        'friction': 0,
        'frictionAir': 0.0,
        'slop': 1,
        'inertia': Infinity,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("base.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
}