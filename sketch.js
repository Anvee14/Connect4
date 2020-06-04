//THINGS LEFT-
//multiplayer settings
//diagCheck

//QUESTION-
//mam we how to wait for coin to fall before updating the array
//diagCheck
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
  game.getGameState();
  
  if(playerCount === 2&&gameState==0){
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
  if(gameState==1){
  //  console.log("gameState:",gameState)
  var col = board.getDroppedCoinCol()
  
  if(isValidCol(col)){
    var row = board.getDroppedCoinRow(col)
    Matter.Body.setStatic(coins[coins.length-1].body, false)
    coins[coins.length-1].state="Dropped"
    arrBoard[row][col]["state"]=turn
    console.log("turn:",turn)
    
      
    if(allchecks(row,col)){
      //call winning func
  
      game.updateState(2)
      
      endState="win"
     } else if(coins.length==numRow*numCol){
   //    console.log("inside coins.length")
       game.updateState(2)
       endState="tie"
    //   console.log(coins.length)
     } else{
      if(turn==1){
       turn = 2
      }else{
       turn=1
     }
    }
       //console.log(horiCheck(row,col),vertCheck(row,col))
    }
 //   console.log(coins.length)
 //   console.log(arrBoard)
     
  }
  }

    
