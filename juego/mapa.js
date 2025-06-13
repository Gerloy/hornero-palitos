class Mapa{
	constructor(data){
		var text = "";
		//console.log(data);
		data.forEach(line => {
			text += line;
			text += "\n";
		});

		var file = JSON.parse(text);

		//Cargamos los sprites que se van a usar en el nivel
		this.imagenes = [];
		for (var i=0; i<file.sprites.length; i++){
			var img = file.sprites[i];
			this.imagenes[i] = new Imagen(img.tag, img.path);
			console.log("Cargo imagen");
		}

		//Grupo de objetos fisicos para ver las colisiones
		this.pisos = new Group();
		this.plataformas = [];
		for (var i=0; i<file.plataformas.length; i++){
			var _plat = file.plataformas[i];
			this.plataformas[i] = new Plataforma(createVector(_plat.pos.x,_plat.pos.y),createVector(_plat.tam.x,_plat.tam.y));
			this.pisos.push(this.plataformas[i].img);
		}

		this.agarrables = new Group();
		this.palitos = [];
		for (var i=0; i<file.palitos.length; i++){
			var _pal = file.palitos[i];
			this.palitos[i] = new Palito(createVector(_pal.pos.x,_pal.pos.y));
			this.agarrables.push(this.palitos[i].img);
		}
		
		this.meta = new Group();
		this.casita = new Casita(createVector(file.casita.pos.x,file.casita.pos.y), file.casita.objetivo);
		this.meta.push(this.casita.img);
		this.pj = new Group();
		this.hornero = new Hornero(createVector(file.hornero.pos.x,file.hornero.pos.y), this.imagenes);
		this.pj.push(this.hornero.img);
		this.piso = new Sprite(400,600,800,10,STA);
		this.piz = new Sprite(-10,300,20,700,STA);
		this.pder = new Sprite(810,300,20,700,STA);
		this.pisos.push(this.piso);

		this.sig = file.sig;
	};

	limpiar(){
		this.plataformas.forEach(plataforma =>{
			plataforma.img.remove();
		});
		this.palitos.forEach(palito =>{
			palito.img.remove(this.pj);
		});
		this.casita.img.remove();
		this.hornero.img.remove();
		this.piso.remove();
		this.piz.remove();
		this.pder.remove();
		this.pisos.remove();
		this.pj.remove();
		this.agarrables.remove();
		this.meta.remove();
	}

	update(){
		this.plataformas.forEach(plataforma =>{
			plataforma.update();
		});
		this.palitos.forEach(palito =>{
			palito.update(this.pj);
		});
		this.casita.update(this.hornero);
		this.hornero.update(this.pisos,this.agarrables);
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

