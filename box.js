class Box{
    constructor(x,y,w,h){
        var box_features = {
            isStatic : false,
            restitution:1,
            friction:2}
          this.box = Bodies.rectangle(x,y,w,h,box_features)
          World.add(myWorld,this.box)
          this.w=w;
          this.h=h;
          this.boxI=loadImage("wood1.png")
        }
    display(){
    push ()
        translate (this.box.position.x,this.box.position.y)
        rotate (this.box.angle)
        imageMode(CENTER)
        image(this.boxI,0,0,this.w,this.h)
    pop ()
    }
}