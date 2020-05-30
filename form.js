class Form{
    constructor(){
      this.nameBox = createInput("Enter Name")
      this.button = createButton("Enter")
      this.title = createElement('h2')
      this.greeting = createElement('h5')
    }
    hide(){
      this.title.hide()
      this.button.hide()
      this.nameBox.hide()
      this.greeting.hide()
    }
    display(){
        this.title.html("CONNECT 4")
        this.title.position(displayWidth/2,displayHeight/4)
        this.nameBox.position(displayWidth/2,displayHeight/2)
        this.button.position(displayWidth/2+100,displayHeight/2)

        this.button.mousePressed(()=>{
          this.nameBox.hide();
          this.button.hide();
          player.name = this.nameBox.value();
          playerCount+=1;
          player.index = playerCount;
          player.update();
          player.updatePlayerCount(playerCount);
          this.greeting.html("Hello " + player.name)
          this.greeting.position(displayWidth/2 - 70, displayHeight/4);
        });
    
    }
    
}