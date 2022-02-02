const input = document.getElementById("input");
const boton1 = document.getElementById("1");
const boton2 = document.getElementById("2");
const boton3 = document.getElementById("3");
const boton4 = document.getElementById("4");
let text;

boton1.addEventListener('click',botones1);
boton2.addEventListener('click',botones2);
boton3.addEventListener('click',botones3);
boton4.addEventListener('click',botones4);


function botones1(){
    text = input.value;
    document.getElementById("input").value = text.toUpperCase();
}

function botones2(){
    text = input.value;
    document.getElementById("input").value = text.toLowerCase();
}

function botones3(){
    text = input.value;
    document.getElementById("input").value = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase(); 
}

function botones4(){
    text = "";
    document.getElementById("input").value = text;
}
