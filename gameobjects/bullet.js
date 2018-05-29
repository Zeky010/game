function Bullet( ) {
	this.x = 0;
	this.y = 0;
	this.width = 8;
	this.height = 16;
    this.speed = 8;
    this.active = false;
    this.direction = [ ];
    this.direction[ UP_DOWN ] = UP;

    this.processInput = function( ) {
        if( this.active ) {
            this.direction[ UP_DOWN ] = UP;
        }
    }

    this.update = function( ) {
        if( this.active ) {
            this.y = this.y + this.speed * this.direction[ UP_DOWN ];
        }

        if( this.y + this.height < 0 ) {
            this.active = false;
        }
    }

    this.render = function( ) {
        if( this.active ) {
            context.fillRect( this.x, this.y, this.width, this.height );
        }
    }

    this.spawn = function( x, y ) {
        this.x = x;
        this.y = y;
        this.active = true;
    }

    this.collision = function( ) { 
        this.active = false;
    }
}