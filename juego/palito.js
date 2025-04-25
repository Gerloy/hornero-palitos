class Palito{
	constructor(_pos){
		//this.pos = _pos;
		//this.tam = createVector(20,20);
		//this.tag = "Palito";
		this.img = new Sprite(_pos.x,_pos.y,20,20, 'n');
		this.agarrado = false;
	}

	draw(){
		//rect(this.pos.x,this.pos.y,this.tam.x,this.tam.y);
	}
	update(_pj){
		if (this.img.overlapping(_pj) && !this.agarrado){this.img.visible = false; this.agarrado = true;}
	}
}
