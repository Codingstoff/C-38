var database;
var form, game, player,allPlayers;
var car1,car2,car3,car4,cars;
var playerCount = 0;
var gameState = 0;
function setup(){
    createCanvas(windowWidth-40,windowHeight-40);
    database=firebase.database();
    game = new Game();
    game.getState();
    game.startGame();
    
}

function draw(){
    background("white");

    if(playerCount === 4)
    {
      game.update(1) 
    }

    if(gameState === 1)
    {
      game.play()
    }
}

