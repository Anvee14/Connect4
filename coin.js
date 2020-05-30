class Coin {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
            restitution:0.8,
            friction:0.5,
            //'density':1.0

        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;   
        World.add(world, this.body);
        this.redImage= loadImage("images/redCoin.png")
        this.yellowImage= loadImage("images/yellowCoin.png")
        this.state = "notDropped"
        
    }
    display(){
        var pos =  this.body.position
        imageMode(CENTER);
        image(this.yellowImage,pos.x,pos.y, this.width, this.height);
       // rectMode(CENTER);
        //rect(mouseX,pos.y, this.width, this.height);
      //  console.log(this.body.position)

    }
    setCoinX(){
       if (this.state == "notDropped"){
       var pos =  this.body.position
       if(mouseX>90 && mouseX<480+30){
        var cols = Math.floor((mouseX-90)/60)
       pos.x = arrBoard[0][cols]["x"]
      // console.log(pos.x)
      }
     }
       
    }
   
    



}