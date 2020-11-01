class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();

            if (pointA.x  < 220){
                strokeWeight(7);
                stroke("#301608")
                line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y-3);
              }
           else {
            strokeWeight(3);
            stroke("#301608")
            line(pointA.x +25, pointA.y, pointB.x - 10, pointB.y);
            line(pointA.x +25 ,pointA.y, pointB.x + 30, pointB.y-3);
            image(this.sling3,pointA.x-30,pointA.y-10,15,30);

           }
            pop();
        }
    }
    
}