class Bob{

    constructor(x,y,r){
        var bob_features = {
            isStatic : false,
            restitution : 0.8,
            friction : 1,
            density: 1
          }
        
        this.bob = Bodies.circle(x,y,r,bob_features)
        World.add(world,this.bob) 
        this.r = r
        
    }

    show(){
        push()
        translate(this.bob.position.x,this.bob.position.y)
        rotate(this.bob.angle)

        ellipseMode(CENTER)
        ellipse(0,0,this.r)
        pop()
    }

}