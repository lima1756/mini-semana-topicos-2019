import {Decision, Evento, StoryLine} from './Libraries.js';


let evento1 = new Evento("hola1", "https://picsum.photos/200/300/?image=0", "Va a decision2", "decision2").save();
let evento2 = new Evento("hola2", "https://picsum.photos/200/300/?image=1", "Va a decision2", "decision2").save();
let evento3 = new Evento("hola3", "https://picsum.photos/200/300/?image=2", "Va a decision1", "decision1").save();
let evento4 = new Evento("hola4", "https://picsum.photos/200/300/?image=3", "Va a decision3", "decision3").save();
let evento5 = new Evento("hola5", "https://picsum.photos/200/300/?image=4", "Va a hola9", "hola9").save();
let evento6 = new Evento("hola6", "https://picsum.photos/200/300/?image=5", "Va a hola10", "hola10").save();
let evento7 = new Evento("hola7", "https://picsum.photos/200/300/?image=6", "Va a decision1", "decision1").save();
let evento8 = new Evento("hola8", "https://picsum.photos/200/300/?image=7", "Va a end", "end").save();
let evento9 = new Evento("hola9", "https://picsum.photos/200/300/?image=8", "Va a decision4", "decision4").save();
let evento10 = new Evento("hola10", "https://picsum.photos/200/300/?image=9", "Va a decision1", "decision1").save();

let decision1 = new Decision("decision1", evento1, evento2).save();
let decision2 = new Decision("decision2", evento3, evento4).save();
let decision3 = new Decision("decision3", evento5, evento6).save();
let decision4 = new Decision("decision4", evento7, evento8).save();

let btns = document.getElementsByClassName("btn");
for(let i =0; i<btns.length; i++){
    btns[i].addEventListener("click", function(){
        load(btns[i].value);
    }, false);
}

document.getElementById("toggle-chat").addEventListener("click", function(){
    document.getElementById("chatBox").hidden = !document.getElementById("chatBox").hidden;
}, false);
load("decision1");

function loadIndividualEvent(data){
    let selection = document.getElementById("selection");
    let story = document.getElementById("story");
    story.hidden = false;
    selection.hidden = true;
    let images = story.getElementsByClassName("img");
    let texts = story.getElementsByClassName("text");
    let btns = story.getElementsByClassName("btn");
    images[0].src = data.img;
    texts[0].innerHTML = data.texto;
    btns[0].value = data.siguiente;
}

function loadDecision(data){
    let selection = document.getElementById("selection");
    let story = document.getElementById("story");
    story.hidden = true;
    selection.hidden = false;
    let images = selection.getElementsByClassName("img");
    let texts = selection.getElementsByClassName("text");
    let btns = selection.getElementsByClassName("btn");
    for(let i = 0; i < 2; i++){
        images[i].src = data.opc[i].img;
        texts[i].innerHTML = data.opc[i].texto;
        btns[i].value = data.opc[i].siguiente;
    }
}

function load(indexName){
    let data = StoryLine[indexName];
    if(indexName=="end"){
        // TODO load firebase charts
        print("acabaste");
    }
    else if(data instanceof Evento){
        loadIndividualEvent(data);
    }
    else{
        loadDecision(data)
    }
}


function print(something){
    console.log(something);
}