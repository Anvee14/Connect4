class Board {
    constructor(){
        this.x = marginX
        this.y = marginX+numCol*squareSize
        
    }
    pushPosition(){
        for(var i = 0 ; i < numRow ; i++){
            this.y -= squareSize
            this.x=squareSize
            var arrBoardCols = []
            for(var j = 0 ; j < numCol; j++){
            this.x += squareSize
             var position ={"x":this.x,"y":this.y,"state":0}
             arrBoardCols.push(position)
            
            }
            arrBoard.push(arrBoardCols)
        }
    }

    drawBoard(){
        for(var i = 0 ; i < numRow; i++){        
            for(var j = 0 ; j < numCol ; j++){
                imageMode(CENTER)                                     
             image(boardImg,arrBoard[i][j]["x"],arrBoard[i][j]["y"],squareSize,squareSize)
          }
        }
    }
    getDroppedCoinCol(){
      for(var i = 0; i<arrBoard[0].length; i++){
     
        if(coins[coins.length-1].body.position.x==arrBoard[0][i]["x"]){
           return(i) 
        }
      }
    }  
    getDroppedCoinRow(col){   
     for(var i = 0 ;i<arrBoard.length;i++){

        if(arrBoard[i][col]["state"]==0){
         // arrBoard[i][col]["state"]=1
          return(i)         
        }
      }      
    }
        
}
    
  