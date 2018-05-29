function GameManager( ) {
    let gameObjects = [ ];
    gameObjects.push( new Player( 100, 100 ) );
    for( let i = 0; i < 20; i++ ) {
        gameObjects.push( new Bullet( ) );
    }
    
    this.processInput = function( ) {
        gameObjects.forEach( ( gameObject ) => {
            gameObject.processInput( );
        } );
    }

    this.update = function( ) {
        gameObjects.forEach( ( gameObject ) => {
            gameObject.update( );
        } );
    }

    this.render = function( ) {
        context.clearRect( 0, 0, WIDTH, HEIGHT );
        gameObjects.forEach( ( gameObject ) => {
            gameObject.render( );
        } );
    } 

    this.fire = function( x, y ) {
        let activeBullet = gameObjects.filter( ( gameObject ) => {
            if( gameObject.active == false ) {
                return gameObject;
            }
        } ) [ 0 ];
        if( activeBullet ) {
            activeBullet.spawn( x, y );
        }
    }
}