//THINGS LEFT-
//mam now to generate new body when the player has dropped the coin, 
//ground part , turn , multiplayer settings,ground part , turn ,
//to change the animation on winning condition is left

//QUESTION-
// ??mam how to ensure that each player is only able to drop the coin 
//on its turn
//??????
//mam pls see to ground part

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var squareSize = 60
var database;
var form, player, game;
var board;
var coins=[];

var ground;
var playerCount
var allPlayers
var backgroundImg
var gameState = 0
var arrBoard = []
var marginX = 60
var marginY = 100
var canvas
var playerState = 1
var turn = 1
var wall1,wall2
var numRow = 6
var numCol = 7
var endState 
var speed = 1
function preload(){
  boardImg = loadImage("images/board.png")
  redImage= loadImage("images/redCoin.png")
  yellowImage= loadImage("images/yellowCoin.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight);

  engine = Engine.create();
  world = engine.world;

  database = firebase.database();

  game = new Game();
  game.getGameState();
  game.start();

  form = new Form()

  board = new Board()
  board.pushPosition()
  console.log(arrBoard)
  
  
  ground = new Ground(arrBoard[0][3]["x"],arrBoard[0][0]["y"]+30,420,10)
  wall1 = new Ground(arrBoard[0][0]["x"]-30,arrBoard[2][3]["y"]+30,1,420)
  wall2 = new Ground(arrBoard[0][5]["x"]-30,arrBoard[2][3]["y"]+30,1,420)
  
}

function draw() {
  
  Engine.update(engine);
  if(playerCount === 2){
    game.updateState(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState == 2){
    game.end()
  }
  
 

 
  
}

function mouseClicked(){
  
  var col = board.getDroppedCoinCol()
  
  if(isValidCol(col)){
    var row = board.getDroppedCoinRow(col)
    Matter.Body.setStatic(coins[coins.length-1].body, false)
    coins[coins.length-1].state="Dropped"
   
    arrBoard[row][col]["state"]=turn
    
    
      
    if(allchecks(row,col)){
      //call winning func
      while(! coins[coins.length-1].body.speed<speed){
        textSize(16)
        text("DO NOT CHANGE THE STATE TILL I STOP",600,300)
  
      }
      gameState=2
      endState="win"
     }else if(coins.length==numRow*numCol){
       gmaeState=2
       endState="tie"
     }
     else{
     if(turn==1){
       turn = 2
     }else{
       turn=1
     }
       console.log(horiCheck(row,col),vertCheck(row,col))
    }

    console.log(coins[coins.length-1])
     
  }
}
    
