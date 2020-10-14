class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.slingShot = Constraint.create(options);
        this.pointB = pointB
	this.sling1 = loadImage("sprites/sling1.png")    
	this.sling2 = loadImage("sprites/sling2.png")    
	this.sling3 = loadImage("sprites/sling3.png")    
	World.add(world, this.slingShot);
    }

    display(){

        if(this.slingShot.bodyA){

	var pointA = this.slingShot.bodyA.position;
        var pointB = this.pointB;
        push()
	if(pointA.x<270){

	strokeWeight(15);

	}else	
	strokeWeight(9);
	stroke("#301608");
        line(pointA.x-20, pointA.y, pointB.x-10, pointB.y+10);
	line(pointA.x-20, pointA.y, pointB.x+15, pointB.y+15);
        image(this.sling3, pointA.x-15, pointA.y-5, 15, 30)	
	pop()	
	}	
        image(this.sling1, 275, 20)	
        image(this.sling2, 245, 20)	
    }

   fly(){

    this.slingShot.bodyA = null 

   }	   

}


