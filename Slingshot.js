class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push ();

            strokeWeight(4);
            stroke("#54270F");
            line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y + 30);
            line(pointA.x - 20, pointA.y , pointB.x + 80, pointB.y + 30);
            image(this.sling3,pointA.x - 30, pointA.y, 15,16)
            
        }
        image(this.sling1, 250,20);
        image(this.sling2, 225,20);
        

        
    }
    
}