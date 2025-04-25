class Casita{
	constructor(_pos,_objetivo){
		this.objetivo = _objetivo;
		this.img = new Sprite(_pos.x,_pos.y,50,50, 'n');
	}

	draw(){}
	update(hornero){
		if (this.img.overlapping(hornero.img)){
			if (hornero.palitos >= this.objetivo){
				sigMapa();
				console.log("encima");
			}
		}
	}

	//checkearPuntos(_pj){
	//	if(_pj.__getParent().palitos == this.objetivo){
	//		sigMapa();	
	//	}
	//}
}
