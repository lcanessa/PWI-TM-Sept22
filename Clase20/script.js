//1 cambiar el tema del sitio (noche- dia)
//2 colocar una tarjeta por cada objeto de los productos del JSON
//3 que al hacer click en "comprar" nos sume el producto al chango
//4 que no importa si salgo del sitio y vuelvo a entrar, permanezca la tematica del sitio (Web Storage)

//function nombre (params){}
//const nombre = (params) => {}

const bodySitio = document.querySelector("body");
const botones = document.getElementsByClassName("btn");
let contador = 0;


const aTemaDia = () => {
    //botones tienen que tener la propiedad btn-primary
    console.dir(bodySitio.classList.length)
    if(bodySitio.classList.length != 0){
        bodySitio.classList.remove('fondo-noche')
    }

    for (boton of botones) {
        let arrayDeClases = boton.classList.value;
        console.log(arrayDeClases)

        if(arrayDeClases == 'btn-primary'){
            boton.classList.remove(boton.classList[1])
            boton.classList.add('btn-primary')
        }
        
        
    }
    console.log(botones)
}


const aTemaNoche = () => {

    bodySitio.classList.toggle("fondo-noche")
    for (boton of botones) {
        boton.classList.toggle('btn-noche');
        boton.classList.toggle('btn-primary');
    }
    // botones.forEach(boton => {
    //     boton.classList.toggle('btn-noche');
    //     boton.classList.toggle('btn-primary');
    // });
    //body tengo la clase fondo-noche
    //botones saque el btn-primary y lo reemplace con btn-noche
}

//carrito
if(localStorage.getItem("cantidad"))
{
    contador = parseInt(localStorage.getItem("cantidad"))
}
document.querySelector(".circulo").textContent = contador;

const agregarAChango=()  => {
    contador = contador+1;
    document.querySelector(".circulo").textContent = contador;
    localStorage.setItem("cantidad", contador);
}