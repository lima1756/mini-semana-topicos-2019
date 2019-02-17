class Evento{
    constructor(nombre, img, texto, siguiente){
        this.nombre = nombre;
        this.img = img;
        this.texto = texto;
        this.siguiente = siguiente;
    }

    save(){
        StoryLine[this.nombre]= this;
        return this;
    }
}

class Decision{
    constructor(nombre, opc1, opc2){
        this.nombre = nombre;
        this.opc = [];
        this.opc[0] = opc1;
        this.opc[1] = opc2;
    }

    save(){
        StoryLine[this.nombre]= this;
        return this;
    }
}

let StoryLine = {};

export {Evento, Decision, StoryLine};