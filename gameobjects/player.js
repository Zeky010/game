function Player( x, y ) {
	this.x = x;
	this.y = y;
	this.width = 32;
	this.height = 32;
	this.speed = 8;
    this.direction = [   ];
    this.cooldownTime = 5;
    this.cooldown = 0;

    this.processInput = function( ) {
        this.direction[ LEFT_RIGHT ] = STAY;
		this.direction[ UP_DOWN ] = STAY;
		// Tecla izquierda y derecha
		if(pressedKeys[ LEFT_ARROW_KEY ] === true || pressedKeys[ A_KEY ] === true) {
			this.direction[ LEFT_RIGHT ] = LEFT;
		} 
		if(pressedKeys[ RIGHT_ARROW_KEY ] === true || pressedKeys[ D_KEY ] === true) {
			this.direction[ LEFT_RIGHT ] = RIGHT;
		}
		// Tecla arriba y abajo
		if(pressedKeys[ UP_ARROW_KEY ] === true || pressedKeys[ W_KEY ] === true) {
			this.direction[ UP_DOWN ] = UP;
		} 
		if(pressedKeys[ DOWN_ARROW_KEY ] === true || pressedKeys[ S_KEY ] === true) {
			this.direction[ UP_DOWN ] = DOWN;
        }
        if( pressedKeys[ SPACE_KEY ] ) {
            this.firing = true;
        }
    }

    this.update = function( ) {
        // No se sale por la pantalla en x
        if( ( this.direction[ LEFT_RIGHT ] == LEFT && this.x >= 0 ) || 
				( this.direction[ LEFT_RIGHT ] == RIGHT && 
					( this.x + this.width <= WIDTH ) ) ) {
            // Movimiento del player en x
			this.x = this.x + this.speed * this.direction[ LEFT_RIGHT ];
        }
         // No se sale por la pantalla en y
        if( ( this.direction[ UP_DOWN ] == UP && this.y >= 0 ) || 
                             ( this.direction[ UP_DOWN ] == DOWN && 
                            ( this.y + this.height <= HEIGHT ) ) ) {
            // Movimiento del player en y
            this.y = this.y + this.speed * this.direction[ UP_DOWN ];
        }
        if( this.firing && this.cooldown <= 0 ) {
            gameManager.fire( this.x + this.width / 2, this.y );
            //this.firing = false;
            this.cooldown = this.cooldownTime;
        }
        if( this.cooldown > 0 ) {
            this.cooldown--;
        }
    }

    this.render = function( ) {
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}