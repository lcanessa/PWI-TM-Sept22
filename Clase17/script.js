
function funcion1(num){
    console.log(num+1);
}

//callback --> pasarle una funcion como parametro
function sumar(numero1,numero2,funcionCallback){
    let total = numero1 + numero2;
    funcionCallback(total);
}

sumar(20,40,funcion1)
/*
    let total = 20 + 40;
    funcion1(60);

    me devuelve (60+1) = 61
*/


//---------------------------------------------------------

//JSON: Javascript Object Notation
let data={
    lenguaje:"HTML",
    interpretadoNavegador: true,
    personasQueSaben: 54565
}

console.log(data.personasQueSaben)

//JSON.stringify() --> transformar a json lo que le pase
let dataJson = JSON.stringify(data)
console.log(dataJson)
//JSON.parse() --> transforma un json en objeto
console.log(JSON.parse(dataJson)) 

//GET: trae informacion -- POST: la envia

const traerInfo = async () => {
    let info = await fetch("https://rickandmortyapi.com/api/character")
                .then(respuesta => respuesta.json())                
                .catch(error => console.log("Hay un errorrr" + error))
    return info
}

const mostrarInfo = async () =>{
    let dato = await traerInfo()

    let infoPersonajes = dato.results
    console.log(infoPersonajes)

    infoPersonajes.forEach(personaje => {
        let imagen = document.createElement('img')
        imagen.setAttribute("src",personaje.image)
        document.querySelector(".container").appendChild(imagen)
    });

    // console.log(dato.results)
    // for(pokemon of dato.results){
    //     let itemLista = document.createElement('li');
    //     itemLista.innerText = pokemon.name;
    //     document.querySelector('ul').appendChild(itemLista)
    // }

}
mostrarInfo()