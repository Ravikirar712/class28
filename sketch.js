var player;
var score=0;
var wormGroup;

function preload() {
  //load game assets
}


function setup() {
  createCanvas(600,600);
 player=createSprite(40,550,30,30);
 wormGroup=new Group();
}

function draw() {
  background("black");  
  stroke("red");
  noFill();
  ellipse(100,350,70,30);
 player.x=mouseX;
 player.y=mouseY;
 generateWorms();
 if(player.x<150 && player.x>90 && player.y<380 && player.y>320 )
 {
  textSize(25); 
  fill('green')
  text("No cheating",200,250)
 player.x=50;
 player.y=50;
}
 for(var i = 0 ; i< (wormGroup).length ;i++){
  var temp = (wormGroup).get(i) ;
  if (player.isTouching(temp)) {
    score++;
    temp.destroy();
    temp=null;
    }   
  }
 
  drawSprites();
  text("worms destroyed="+score,300,50)
}
function generateWorms(){
if(frameCount%60==0)
{
  var worm=createSprite(100,350,50,5);
  worm.shapeColor="yellow";
  worm.velocityX=random(-4,4);
  worm.velocityY=random(-5,5);
  wormGroup.add(worm)
}
}


