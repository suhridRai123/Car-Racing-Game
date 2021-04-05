var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, gameState
function setup(){
    canvas = createCanvas(500,500);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount === 4){
        game.play();
    }
}