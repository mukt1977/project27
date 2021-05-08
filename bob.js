class Bob{
    constructor(x, y,r) {
        var options = {
            isStatic:false,
            'restitution':1,
            'friction':1.0,
            'density':1.0
        }
        this.r=r;
        this.body = Bodies.circle(x, y,this.r/2, options);

    
        World.add(world, this.body);
      }
      display(){
      
        push();
        translate(this.body.position.x, this.body.position.y);
      ellipseMode(RADIUS)
      fill("Black");
        ellipse(0,0,this.r/2,this.r/2)
        pop();
        
      }
}