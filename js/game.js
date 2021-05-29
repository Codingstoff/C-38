class Game{
    constructor(){}

    getState()
    {
        var dbref = database.ref("gameState")
            dbref.on("value",function(data)
            {
                gameState =data.val()
            })
    }
    update(state)
    {
        database.ref("/").update({gameState : state})
    }
    startGame()
    {

        if(gameState===0)
        {
            player = new Player();
            player.getPlayercount();
            form = new Form();
            form.display();
            car1 = createSprite(200,height)
            car2 = createSprite(400,height)
            car3 = createSprite(600,height)
            car4 = createSprite(800,height)
            cars = [car1,car2,car3,car4]
        }

    }


    play()
    {
      form.hideform();
      Player.getAllPlayersInfo();
     
      if(allPlayers!==undefined)
      { 
          var index =0
          var y = height

          for(var plr in allPlayers) //player1, player2 -> distance - cars.y 
          { 
              y = height - allPlayers[plr].distance
              cars[index].y = y   //cars[0], cars[1]

              if (plr === "player" + player.index)
              {
               cars[index].shapeColor = "red"
               camera.position.y = cars[index].y
              }
              else
              cars[index].shapeColor = "black"
            
            index = index+1
           
             
          }
        drawSprites();
      }
      if(keyIsDown(UP_ARROW)&&player.index!==null)
      {
          console.log("Up Arrow")
        player.distance+=50;
        player.updateplayer()
      }

    }
}

