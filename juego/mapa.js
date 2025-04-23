class Mapa{
	constructor(_path){
		var file = JSON.parse(_path);

		this.plataformas = [file.plataformas.length];
		for (var i=0; i<plataformas.length; i++){
			plataformas[i] = new Plataforma(createVector(file.plataformas[i].pos.x,file.plataformas[i].y), createVector(file.plataformas[i].tam.x,file.plataformas[i].y));
		}

		this.palitos = [file.palitos.length];
		for (var i=0; i<palitos.length; i++){
			palitos[i] = new Palito(createVector(file.palitos[i].pos.x,file.palitos[i].y), createVector(file.palitos[i].tam.x,file.palitos[i].y));
		}

		this.pajarito = new Pajarito(file.pajarito.pos);
		this.casita = new Casita(file.casita.pos, file.casita.objetivo);
	}
}
