class Nave{
  constructor(x_nave,y_nave,cor, vivo = true){
    this.x_nave = x_nave;
    this.y_nave = y_nave;
    this.cor = cor;
    this.vivo = vivo;
  }

  show(){
    fill(this.cor);
    square(this.x_nave, this.y_nave,20);
  }
  
}