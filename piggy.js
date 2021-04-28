class Pig{
    constructor(x,y,w,h){
        var pig_features = {
            isStatic : false,
            restitution:1}
          this.pig = Bodies.rectangle(x,y,w,h,pig_features)
          World.add(myWorld,this.pig)
          this.w=w;
          this.h=h;
          this.piggyI=loadImage("enemy.png")
        }
    display(){
    push ()
        translate (this.pig.position.x,this.pig.position.y)
        rotate (this.pig.angle)
        imageMode(CENTER)
        image(this.piggyI,0,0,this.w,this.h)
    pop ()
    }
}