class Rope{
    constructor(pointA,bodyB){
        var options={
            pointA:pointA,
            bodyB:bodyB,
            stiffness:1.5,
            length:250
         }
         this.pointA=pointA
         this.rope=Constraint.create(options);
         World.add(world,this.rope);
    }
    display(){
        var pointB=this.rope.bodyB.position;
        var pointA=this.pointA
        stroke("black")
        strokeWeight(2)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}