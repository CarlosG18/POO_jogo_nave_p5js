class Setup{
  constructor(pontuacao = 0, municao = 10, tela = 0){
    this.pontuacao = pontuacao;
    this.municao = municao;
    this.tela = tela;
  }

  show(){
    textSize(15)
    fill("")
    text("pontuacão: " + this.pontuacao, 10, 20)
    text("municão: " + this.municao, 210, 20)
  }

  set_tela(x){
    this.tela = x;
  }

  acertou_inimigo(){
    this.pontuacao = this.pontuacao + 5;
  }

  diminuir_municao(){
    if(this.municao > 0){
      this.municao--;
    }
  }

  apagar_municao(municao){
    for(var i=0; i<municao.length; i++){
      municao.splice(i,1);
    }
  }

  show_viloes(viloes,n_viloes){
    for(var i=0; i<n_viloes; i++){
        viloes[i].show();
        viloes[i].auto_move(width+20);
    }
  }

  reset(n_viloes, viloes, municao){
    this.pontuacao = 0;
    this.municao = 10;
    this.tela = 0;
    for(var i=0; i<n_viloes; i++){
      viloes[i].random_positions();
    }
  }
}