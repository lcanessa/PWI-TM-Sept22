import Navegation from "../Navegation/Navegation"
import Filters from "../Filters/Filters"
import SectionCards from "../SectionCards/SectionCards"
import {useState, useEffect} from 'react';

export default function Characters(props){

    let [datos, setDatos] = useState([])
    let [infoCompleta, setInfoCompleta] = useState([])

    const mostrarValor = (event) =>{
        if(event.target.checked){
            let datoFiltro = event.target.value;
            if(datoFiltro === "Alive" || datoFiltro === "Dead"){
                let resultado = datos.filter((ch)=>ch.status === datoFiltro)//nuevo array con solo los elementos filtrados
                setDatos(resultado)
            }

            if(datoFiltro === "Female" || datoFiltro === "Male"){
                let resultado = datos.filter((ch)=>ch.gender === datoFiltro)//nuevo array con solo los elementos filtrados
                setDatos(resultado)
            }

            if(datoFiltro === "unknown"){
                let resultado = datos.filter((ch)=>ch.origin.name === datoFiltro)//nuevo array con solo los elementos filtrados
                setDatos(resultado)
            }
        }
        else{
            setDatos(infoCompleta)
        }
    }
   
   const traerInfo = async () => {
        let info = await fetch("https://rickandmortyapi.com/api/character")
                    .then(respuesta => respuesta.json())                
                    .catch(error => console.log("Hay un errorrr" + error))
        return info
    }
    
    const mostrarInfo = async () =>{
            let dato = await traerInfo()        
            let infoPersonajes = dato.results            
            setDatos(infoPersonajes)   
            setInfoCompleta(infoPersonajes) 
        }  
    useEffect(()=>{
          
    
        mostrarInfo()
    }, [])

    return(
        <div>
            <Navegation />
            <section className="bg-success d-flex p-2">
                <Filters nombreFiltro="Character Alive" datoFiltro="Alive" muestraValor={mostrarValor}/>
                <Filters nombreFiltro="Character Dead" datoFiltro="Dead" muestraValor={mostrarValor} />
                <Filters nombreFiltro="Female" datoFiltro="Female" muestraValor={mostrarValor}/>
                <Filters nombreFiltro="Male" datoFiltro="Male" muestraValor={mostrarValor}/>
                <Filters nombreFiltro="Origin Unknown" datoFiltro="unknown" muestraValor={mostrarValor}/>
            </section>
            <SectionCards datos={datos} />
            
        </div>
    )
}