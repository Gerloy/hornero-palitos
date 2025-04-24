var mapa;

function setup() {
    createCanvas(800,600);
    loadMapa("res/maps/map_0.json");
}

function draw() {
    background('#00CCCC');
    if(mapa){mapa.update();}
    if(mapa){mapa.draw();}
}

function loadMapa(_path){
    loadStrings(_path,cambiarMapa);
}
function cambiarMapa(data){
    mapa = new Mapa(data);
    world.gravity.y = 20;
}

function keyPressed(){
    mapa.keyPressed(key);
}

function keyReleased(){
    mapa.keyReleased(key);
}
