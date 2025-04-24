class Palito{
	constructor(_pos){
		this.pos = _pos;
		this.tam = createVector(20,20);
		this.tag = "Palito";
	}

	draw(){
		rect(this.pos.x,this.pos.y,this.tam.x,this.tam.y);
	}
	update(){}
}
