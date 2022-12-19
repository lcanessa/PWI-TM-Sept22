import logo from './logo.svg';
import './App.css';
import Navegacion from './components/nav/Navegacion';
import {useEffect, useState} from 'react';
import Titular from './components/Titular';
import Lista from './components/Lista';

//componente funcional
function App() {
  //let nombre ="Ana"
  //valor inicial: Ana -- setNombre() para modificar nombre
  let [nombre,setNombre] = useState("Ana");

  const cambiarNombre= () =>{
    if(nombre === "Ana")
      setNombre("juan")
    else  
    setNombre("Ana")
  }

  let dato=["item1","item2","item3","asdasd"]

  useEffect(()=>{
    console.log("Se cargo/actuializo el componente")
  },[])

  useEffect(()=>{
    console.log("El estado nombre se modifico")
  },[nombre])

  return(
    <div className='componente-app'>
      <Navegacion datos={{nombre:"Productos", zona:"principal"}}/>
      <main>
        <h1>Titulo Principal</h1>
        <h2>Hola soy otro Titulo</h2>

        <Titular nombrePersona = {nombre}/>
        <button className='btn btn-success' onClick={cambiarNombre}>{nombre}</button>
      </main>

      <Lista infoItems={dato} />
    </div>  
    )

}
export default App;

