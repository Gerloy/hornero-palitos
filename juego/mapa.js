class Mapa{
	constructor(data){
		var text = "";
		//console.log(data);
		data.forEach(line => {
			text += line;
			text += "\n";
		});

		var file = JSON.parse(text);

		this.pisos = new Group();
		this.plataformas = [];
		for (var i=0; i<file.plataformas.length; i++){
			var _plat = file.plataformas[i];
			this.plataformas[i] = new Plataforma(createVector(_plat.pos.x,_plat.pos.y),createVector(_plat.tam.x,_plat.tam.y));
			this.pisos.push(this.plataformas[i].img);
		}

		this.palitos = [];
		for (var i=0; i<file.palitos.length; i++){
			var _pal = file.palitos[i];
			this.palitos[i] = new Palito(createVector(_pal.pos.x,_pal.pos.y));
		}

		this.casita = new Casita(createVector(file.casita.pos.x,file.casita.pos.y), file.casita.objetivo);
		this.hornero = new Hornero(createVector(file.hornero.pos.x,file.hornero.pos.y));
		this.piso = new Sprite(400,600,800,10,STA);
		this.pisos.push(this.piso);
	};

	update(){
		this.plataformas.forEach(plataforma =>{
			plataforma.update();
		});
		this.palitos.forEach(palito =>{
			palito.update();
		});
		this.casita.update();
		this.hornero.update(this.pisos);
	};

	draw(){
		this.plataformas.forEach(plataforma =>{
			plataforma.draw();
		});
		this.palitos.forEach(palito =>{
			palito.draw();
		});
		this.casita.draw();
		this.hornero.draw();
	};

	keyPressed(_key){
		this.hornero.keyPressed(_key);
	};

	keyReleased(_key){
		this.hornero.keyReleased(_key);
	}

}

