class Stick{
    constructor(x,y,w,h,k){
        var stick_features = {
            isStatic : false,
            restitution:1,
            friction:2}
          this.stick = Bodies.rectangle(x,y,w,h,stick_features)
          Matter.Body.setAngle(this.stick,k)
          World.add(myWorld,this.stick)
          this.w=w;
          this.h=h;
          this.stickI=loadImage("wood2.png")
        }
    display(){
    push ()
        translate (this.stick.position.x,this.stick.position.y)
        rotate (this.stick.angle)
        imageMode(CENTER)
        image(this.stickI,0,0,this.w,this.h)
    pop ()
    }
}