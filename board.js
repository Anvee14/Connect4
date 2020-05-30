class Board {
    constructor(){
        this.x = marginX
        this.y = 480
        
    }
    pushPosition(){
        for(var i = 0 ; i < 6; i++){
            this.y -= squareSize
            this.x=60
            var arrBoardCols = []
            for(var j = 0 ; j < 7; j++){
            this.x += squareSize
             var position ={"x":this.x,"y":this.y,"state":0}
             arrBoardCols.push(position)
            
            }
            arrBoard.push(arrBoardCols)
        }
        //console.log(displayWidth)
    }

    drawBoard(){
        for(var i = 0 ; i < 6; i++){        
            for(var j = 0 ; j < 7 ; j++){
                imageMode(CENTER)                                     
             image(boardImg,arrBoard[i][j]["x"],arrBoard[i][j]["y"],squareSize,squareSize)
          }
          }
    }
    getDroppedCoinCol(){
      for(var i = 0; i<arrBoard[0].length; i++){
     
        if(coin.body.position.x==arrBoard[0][i]["x"]){
           return(i) 
        }

      }
     

    }  
    getDroppedCoinRow(){   
     for(var i = 0 ;i<arrBoard.length;i--){
        if(arrBoard[i][col]["state"]==0){
          arrBoard[i][col]["state"]=1
          return(i)         
        }
      }      
    }
        
        
        
        
     

   }
    
  