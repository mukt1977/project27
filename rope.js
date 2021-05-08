class Rope{
    constructor(bodyA, bodyB, offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
        bodyA:bodyA,
     bodyB:bodyB,
     pointB:{x:this.offsetX,y:this.offsetY}
        
       }
       
        this.sling=Constraint.create(options);
        World.add(world,this.sling) ;
    }

    display(){
        
            
        
       var pointA = this.sling.bodyA.position;
       var pointB = this.sling.bodyB.position;
       var anchor1X=pointA.x
       var anchor1Y=pointA.y
       var anchor2X=pointB.x+this.offsetX
       var anchor2Y=pointB.y+this.offsetY
       strokeWeight(4);
       line(pointA.x,pointA.y,pointB.x,pointB.y);
        
    }
}