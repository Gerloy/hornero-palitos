class Imagen{
	constructor(_tag,_path){
		this.tag = _tag;
		this.path = _path;
		//se asegura de que la imagen cargue antes de terminar la construccion del objeto
		var cargo = false;
		this.image = loadImage(this.path, ()=>{cargo = true;});
		//while(true){
		//	print("No carga");
		//	if (cargo == true){break}
		//}
	}
}
