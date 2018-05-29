var canvas = document.getElementById( "canvas" );
var context = canvas.getContext( "2d" );
var gameManager = new GameManager( );
var pressedKeys = [ ];
// Configuracion inicial del juego
canvas.width = WIDTH;
canvas.height = HEIGHT;
canvas.style.backgroundColor = "black";
context.fillStyle = "white";
context.strokeStyle = "white";
// Eventos de teclado
document.addEventListener( "keydown", function( key ) {
    pressedKeys[ key.keyCode ] = true;
} );
document.addEventListener( "keyup", function( key ) {
    pressedKeys[ key.keyCode ] = false;
} );
// Ciclo del juego
setInterval( gameLoop, MS_PER_FRAME );
// Ciclo del juego en accion
function gameLoop( ) {
    gameManager.processInput( );
    gameManager.update( );
    gameManager.render( );
}