class Form {
  constructor() {
  this.input = createInput ("name")  
  this.button = createButton ("play")
  this.greeting = createElement ("h2")
  }
hide (){
  this.greeting.hide ();
  this.button.hide ();
  this.input.hide ();
}
  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
  //  var input = createInput("Name");
  //  var button = createButton('Play');
    
    input.position(130, 160);
    button.position(250, 200);

   this.button.mousePressed(function(){
     this.input.hide();
    this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index = playerCount
      player.update()
      player.updateCount(playerCount);
    //  var greeting = createElement('h3');
     this.greeting.html("Hello " + player.name )
   this.greeting.position(130, 160)
    });

  }
}
