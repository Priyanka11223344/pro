class BobClass {

  constructor(x, y,radius) {
      var options = {
        'isStatic': true,
        'density':1,
        'friction': 0,
        'restitution': 0.5
        };
      this.radius = radius;
      this.body = Bodies.circle(x, y,(this.radius-20)/2,options);
      World.add(world, this.body);
    };
     display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x,this.body.position.y);
      rotate(angle);
      ellipseMode(CENTER) 
      fill("pink");
      ellipse(0,0,this.radius,this.radius);
      pop();
    };
  };