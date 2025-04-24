class Casita{
	constructor(_pos,_objetivo){
		this.pos = _pos;
		this.objetivo = _objetivo;
		this.tam = createVector(40,40);
		this.tag = "Casita";
	}

	draw(){
		rect(this.pos.x,this.pos.y,this.tam.x,this.tam.y);
	}
	update(){}
}
