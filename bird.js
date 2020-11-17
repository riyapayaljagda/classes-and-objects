class Bird{

    constructor(x,y){
        var options = {
            restitution:1,
        friction:1
        }
        this.body = Bodies.rectangle(x,y,50,50, options);
        this.width=50
        this.height=50
        World.add(world,this.body);
    }
    display(){
      this.body.position.x=mouseX
      this.body.position.y=mouseY
        push()
        translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    rectMode(CENTER)
    stroke("yellow")
    fill("red")
    strokeWeight(5)
    rect(0,0,this.width,this.height)
    pop()
    }
    
    
    
    }
    