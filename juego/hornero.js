class Hornero{
	constructor(_pos){
		//Cosas basicas
		this.tam = createVector(30,30);
		this.pos = _pos;
		this.palitos = 0;
		//this.tag = "Hornero";

		//Fisicas
		this.img = new Sprite(_pos.x,_pos.y,30,30);
		this.img.sleeping = false;
		this.img.rotationLock = true;
		this.img.friction = 0;
		this.img.bounciness = 0;
		this.groundSensor = new Sprite(_pos.x, _pos.y+this.tam.y*0.75, this.tam.x+4, 12, 'n');
		this.groundSensor.visible = false;
		this.groundSensor.mass = 0.01;
	
		this.j = new GlueJoint(this.img, this.groundSensor);
		this.j.visible = false;

		//Movimiento
		this.key_de = 39;
		this.key_iz = 37;
		this.key_salto = 32;
		this.mov_de = false;
		this.mov_iz = false;
		this.saltando = false;
		this.vel = 10;
		this.vel_actual = 0;
		this.fsalto = 40;
	}

	update(_pisos,_palitos){
		this.mover();
		this.img.vel.x = this.vel_actual;
		if (this.groundSensor.overlapping(_pisos)){this.saltando = false;}else{this.saltando = true;}
		if (this.img.overlapping(_palitos)){
			this.palitos++; 
			console.log(this.palitos);

		}
	}

	draw(){}

	keyPressed(){
		var velx = 0;
		if(keyCode == this.key_de){
			this.mov_de = true;
		}
		if(keyCode == this.key_iz){
			this.mov_iz = true;
		}

		if(keyCode == this.key_salto && !this.saltando){
			this.img.vel.y = this.fsalto;
			//this.saltando = true;
		}
	}

	keyReleased(){
		if(keyCode == this.key_de){
			this.mov_de = false;
		}
		if(keyCode == this.key_iz){
			this.mov_iz = false;
		}
	}

	mover(){
		//this.vel_actual = 0;
		var velx = 0;
		if(this.mov_de){
			velx += this.vel;
		}
		if(this.mov_iz){
			velx -= this.vel;
		}
		this.vel_actual = velx;
	}
}
