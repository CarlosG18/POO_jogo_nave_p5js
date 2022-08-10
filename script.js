var larg = 300, alt = 200;
var falcon;
var n_viloes = 5;
var viloes = [];
var municao = [];
var max_municao = 10;
var cores = ["yellow", "red", "gray", "blue", "green"];
var delay = 0;
var cont = 0;

var n_botoes;

function preload() {
  img_fundo = loadImage('assets/buraco_negro.png');
}

function setup() {
  var cc = createCanvas(larg,alt);
  cc.id('box_game');
  game = new Setup();
  falcon = new Nave(270,100,"white");
  for(var i=0; i<n_viloes; i++){
    viloes[i] = new Inimigo(0, random(20,180), random(cores), 30,10,i);
  }
}


function hit_balas(viloes, municao) {
  for(var i=0; i<viloes.length; i++){
      for(var j=0; j<municao.length; j++){
         hit = collideRectCircle(viloes[i].x_nave, viloes[i].y_nave, 30, 10, municao[j].x_bullet, municao[j].y_bullet, 5);
        if(hit == true){
          viloes[i].random_positions();
          municao[j].apagar = true;
          game.acertou_inimigo();
        }
      }
    }
}

function check_vivo(viloes){
  for(var i=0; i<viloes.length; i++){
    let hit = collideRectRect(viloes[i].x_nave, viloes[i].y_nave, 30, 10, falcon.x_nave, falcon.y_nave, 20,20);
    if(hit == true){
      game.set_tela(1);
    }
  }
}

function nave_controls(){
  if(keyIsDown(UP_ARROW)){
      falcon.y_nave -= 3;
    }
    if(keyIsDown(DOWN_ARROW)){
      falcon.y_nave += 3;
    }
}

function atirar(){
  if(keyIsDown(ENTER)){
      if(delay > 7){
        bala = new Bullet(falcon.x_nave,falcon.y_nave+10);
        bala.set_ativar();
        game.diminuir_municao();
        municao.push(bala);
        delay = 0;
      }
    }
}

function draw() {
  if(game.tela == 0){
    background(img_fundo);
    game.show();
    falcon.show();
    check_vivo(viloes);
    game.show_viloes(viloes,n_viloes);
    delay++;
    atirar();
    nave_controls();
    
    for(var i=0; i<municao.length; i++){
      if(municao[i].ativar == true){
      municao[i].show();
      municao[i].auto_move(falcon.x_nave);
      }
    }
  
    if(municao.length > 0){
      hit_balas(viloes, municao);
    }
  
    for(var i=0; i<municao.length; i++){
      if(municao[i].apagar == true){
        municao.splice(i,1);
      }
    }
    
  }else if(game.tela == 1){//tela de morreu
    game.apagar_municao(municao);
    background(img_fundo);
    textSize(40)
    fill("")
    text("você morreu!", 30,height/2);
    textSize(20)
    text("recomeçar", 45,150);
    if(mouseX >= 45 && mouseX <= 150 && mouseY >= 130 && mouseY <= 170){
        if(mouseIsPressed){
          game.reset(n_viloes,viloes, municao);
        }
      }
    
  }
}
  