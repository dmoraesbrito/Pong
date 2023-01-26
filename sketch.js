
//Variáveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//velocidade da Bolinha
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

// variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

// chance de errar
let chanceDeErrar = 0;

function preload(){
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete)
  movimentaMinhaRaquete()
  //verificaColisaoRaquete()
  verificaColisaoRaquete(xRaquete,yRaquete)
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente)
  movimentaRaqueteOponente()
  incluiPlacar();
  marcaPonto()
  bolinhaNaoFicaPresa()
  calculaChanceDeErrar()
}


//Funções de execução criadas
function mostraBolinha(){circle (xBolinha, yBolinha, diametro)}

function movimentaBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;}

function verificaColisaoBorda(){ 
  if (xBolinha + raio > width || xBolinha - raio < 0){velocidadexBolinha *= -1;}

  if (yBolinha + raio> height || yBolinha - raio < 0){velocidadeyBolinha *= -1;}

}

function mostraRaquete(x,y) {
    rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){yRaquete -= 10};
  
  if (keyIsDown(DOWN_ARROW)){yRaquete += 10};
}

function movimentaRaqueteOponente() {
    velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
    yRaqueteOponente += velocidadeYOponente + chanceDeErrar
calculaChanceDeErrar()}

function verificaColisaoRaquete(x,y){
  colidiu = 
  collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio)
  if (colidiu){velocidadexBolinha *= -1, raquetada.play()}}

function incluiPlacar(){
  stroke (255);
  textAlign (CENTER);
  textSize (16);
  fill(color (255,140,0));
  rect (110, 10, 40, 20);
  fill(255);
  text(meusPontos, 130, 26);
  fill(color (255,140,0));
  rect (450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26);
  
}

function marcaPonto(){
  if (xBolinha > 590){meusPontos += 1, ponto.play()}
  if (xBolinha < 10){pontosDoOponente += 1, ponto.play()}
}

function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}


function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    XBolinha = 23
    }
}


