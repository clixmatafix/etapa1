var x=56,y=200,x1=[],y1=[];
var dx=0,dy=0;
var d1=0,d2=0;
var disparo=true;
var disparoE= true;
var tela = 0;
var vida=5;
var derrota = 10;
function setup() {
  createCanvas(600, 600);
  for(i=0;i<5;i++){
     x1[i]= random(600,900);
     y1[i]= random(60,540)
  }
}

function draw() 
{
  if(tela==1){
  background(255,0,0);
  for(i=0;i<4;i++){
     x1[i]=x1[i]-5;
     //y1[i]=y1[i]-5; 
    ellipse(x1[i], y1[i], 50,50);
    if(x1[i] < 0){
      derrota--;
      console.log(derrota)
      x1[i]= random(600,900);
    }
    if(dist(x1[i],y1[i],dx,dy)<30){
      x1[i] = 650;
      disparo=false;

     }
    if(dist(x,y,x1[i],y1[i])<53){
     x=0;
     
    }
    if(dist(x1[i],y1[i],d1,d2)<30){
      x1[i]=650;
      disparoE=false;
    }
  
  }
  if(derrota<=0)
  {
    tela = 2;
    for(i=0;i<5;i++){
    x1[i]= random(600,900);
    y1[i]= random(60,540);
    derrota = 10;
  }
  }
  if(x>600){
  x=0;
  }
  if(x<0){
  x=600;
  }
  if(y>600){
    y=0;
  }
  if(y<0){
  y=600;
  }
if(keyIsDown(RIGHT_ARROW)){
  x=x+10;

}
  if(keyIsDown(LEFT_ARROW)){
  x=x-10;

}
  if(keyIsDown(UP_ARROW)){
  y=y-10;
  }
  if(keyIsDown(DOWN_ARROW)){
  y=y+10;
  }
  ellipse(x, y, 80, 55);
  keyPressed();
  if(disparo == false){
    ellipse(dx,dy,10,10);
    dx = dx+25;
  }
    if(disparoE == false){
    ellipse(d1,d2,10,10);
    d1=d1-25;
  }
  if(dx>600){
    disparo=false;
  }
  if(d1<0){
    disparoE=false;
  }
 if(x1<0 && x2<0 && x3<0){
   x1=600;
   x2=625;
   x3=655;
   let t = random(500);
   y1=225+t;
   y2=180+t;
   y3=225+t;
 }
 }else if(tela == 0)
 {
  background(0);
  if(keyIsDown(DOWN_ARROW)){
    tela = 1;
  }
  }
  else if(tela==2)
  {
     background(0);
    fill(255)
    textSize(32)
    text("GAME OVER",225,300)
  if(keyIsDown(DOWN_ARROW)){
    tela = 0;
  }
}
function keyPressed() {
  if(disparo==false && keyIsDown(CONTROL)){
    disparo = true
  }
  if(disparoE==false && keyIsDown(SHIFT)){
    disparoE = true
  }
  if (keyCode === CONTROL) {
    if(disparo == true){
      dx = x
      dy = y
      disparo = false
    }
  }
  if (keyCode=== SHIFT){
    if(disparoE==true){
      d1=x;
      d2=y;
      disparoE=false
  }
  }
}
}
