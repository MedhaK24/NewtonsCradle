class Connection {

    constructor(a,b){
        var connection_features = {
            bodyA: a,
            bodyB: b,
            stiffness: 0.04,
            length: 200
        } 

        this.connection = Constraint.create(connection_features)
        World.add(world,this.connection)
    }

    show(){
        var a = this.connection.bodyA
        var b = this.connection.bodyB
        line (a.position.x,a.position.y,b.position.x,b.position.y)
    }
}
