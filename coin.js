class Coin {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
       //     restitution:0.8,
            friction:0.1,
            //'density':1.0

        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;   
        World.add(world, this.body);
       
        this.state = "notDropped"
        
    }
    display(){
        var pos =  this.body.position
        imageMode(CENTER);
        image(this.image,pos.x,pos.y, this.width, this.height);
       

    }
    setCoinX(){
       
       if (this.state == "notDropped"){
        
     //  var pos =  this.body.position
       if(mouseX>90 && mouseX<480+30){
        var cols = Math.floor((mouseX-90)/60)
  //    console.log(coinCount)
        Matter.Body.setPosition(coins[coins.length-1].body,{x:arrBoard[0][cols]["x"],y:coins[coins.length-1].body.position.y})
      }
     }
       
    }
   
    setImage(img){
      this.image=img

    }



}