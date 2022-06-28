class Inimigo extends Nave{
  constructor(x_nave, y_nave, cor, l, a,id,aparecer=true, vel=random(1,6), atingido = false){
    super(x_nave, y_nave, cor);
    this.w = l;
    this.h = a;
    this.id = id;
    this.aparecer = aparecer;
    this.vel = vel;
    this.atingido = atingido;
  }

  show(){
    fill(this.cor);
    rect(this.x_nave, this.y_nave,this.w,this.h);
  }

  auto_move(limit){
    this.x_nave = this.x_nave + this.vel;
    if(this.x_nave > limit){
      this.x_nave = 0;
      this.y_nave = random(20,180);
      this.cor = random(cores)
    }
  }

  random_positions(){
    this.x_nave = -30;
    this.y_nave = random(20,180);
    this.cor = random(cores);
  }
}