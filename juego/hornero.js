class Hornero{
	constructor(_pos){
		this.tam = createVector(100,100);
		this.pos = _pos;
		this.palitos = 0;
	}

	draw(){
		rect(this.pos.x,this.pos.y,this.tam.x,this.tam.y);
	}
}
