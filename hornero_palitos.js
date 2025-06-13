var mapa;
var estado;
const Estado = {
	CARGANDO : 1,
	JUGANDO : 2
}

function setup() {
	createCanvas(800,600);
	loadMapa("res/maps/map_0.json");
	estado = Estado.CARGANDO;
}

function draw() {
	background('#00CCCC');
	switch (estado){
		case Estado.JUGANDO:
			break;
	}
	if(Estado.JUGANDO){
		if(mapa){mapa.update();}
		if(mapa){mapa.draw();}
	}else{
		
	}
}

function loadMapa(_path){
	loadStrings(_path,cambiarMapa);
}

function cambiarMapa(data){
	if(mapa){mapa.limpiar();}
	mapa = new Mapa(data);
	world.gravity.y = 20;
}

function sigMapa(){
	var path = "res/maps/" + mapa.sig + ".json";
	loadMapa(path);
}

function keyPressed(){
	if(mapa){mapa.keyPressed(key);}
}

function keyReleased(){
	if(mapa){mapa.keyReleased(key);}
}
