class Block3 {
    constructor(x,y,width,height){
        var options={
            'isStatic': false,
            'restitution': 0.7,
            'friction': 0.7,
            'density': 1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.x = x;
        this,y = y;
        this.width = width;
        this.height = height;
        World.add(world,this.body)
    }
    display(){
     var pos = this.body.position;
    fill("grey")
      rectMode(CENTER);
     rect(pos.x,pos.y,this.width,this.height)
    }
}