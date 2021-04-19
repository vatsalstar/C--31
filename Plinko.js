class Plinko{
   constructor(x,y,radius){ 
      var opt = { isStatic : true, friction : 1, restitution : 0 } 
      this.body = Bodies.circle(x,y,this.r,options);
      this.color=color(random(0,255),random(0.255),random(0.255));
      world.add(world,this.body);     
}

}