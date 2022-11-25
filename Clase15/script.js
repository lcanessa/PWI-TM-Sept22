//metodos
//querySelector() --> solo me trae el primero que encuentra con esa condicion

let h2 = document.querySelector("#titulo");//ubica al elemento de html con id "titulo"
let texto = document.querySelector("p");
let ul = document.querySelector('ul');
let main = document.querySelector('main');

console.log(h2);
console.dir(h2);

//innerText/textContent --> texto interno que contiene un tag
console.log(h2.innerText);
h2.innerText = "Titulo 2";
texto.textContent = "El texto fue cambiando desde JS";


let todosLostextos = document.querySelectorAll("p"); //me trae todos los 'p'
for(parrafo of todosLostextos){
    parrafo.textContent = "hola";
}

//le agrego la class css decorado al elemento 'u'
ul.classList.add("decorado");

//para eleminar
h2.classList.remove("titulo");

//toggle: si ya tiene la clase, la elimina, sino la agrega
todosLostextos[1].classList.toggle("item-lista");

console.dir(h2.style);
h2.style.backgroundColor = "red";

//innerHtml --> accedemos a la estructura html del elemento
let seccion = document.querySelector("section");
seccion.innerHTML =  `<h2>Soy una seccion</h2>`


//crear elementos - nodos para agregar al html
let textoCreado = document.createElement("p");
//crear su contenido
textoCreado.textContent = "texto creado";
//adjuntarlo al html --> appendChild()
main.appendChild(textoCreado);

//manipular atributos
let navegador = document.querySelector('nav');
navegador.setAttribute("id","navegacion")