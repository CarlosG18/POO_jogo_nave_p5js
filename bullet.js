class Bullet{
  constructor(x, y, vel=3,ativar=false,apagar = false){
    this.x_bullet = x;
    this.y_bullet  = y;
    this.vel = vel;
    this.ativar = ativar;
    this.apagar = apagar;
  }

  show(){
    fill("white");
    circle(this.x_bullet,this.y_bullet,5);
  }
  auto_move(x_nave){
    this.x_bullet = this.x_bullet - this.vel;
    if(this.x_bullet < 0){
      this.x_bullet = x_nave;
      this.ativar = false;
      this.apagar = true;
    }
  }

  set_ativar(){
    this.ativar = true;
  }
}