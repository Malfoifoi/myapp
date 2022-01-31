class Pdhing{
  constructor(k,restLength,a,b){
  this.k = k;
  this.restLength = restLength;
  this.a = a;
  this.b = b;
  }
  update(){
    
 let force = p5.Vector.sub(this.a.position,this.b.position);
 let x = force.mag() - this.restLength;
 force.normalize();
 force.mult(this.k * x);
 this.b.applyForce(force);
 force.mult(-1);
 this.a.applyForce(force);
  }
  show() {
strokeWeight(4);
stroke(0);
line(this.a.position.x,this.a.position.y,
  this.b.position.x,this.b.position.y);
  }
}