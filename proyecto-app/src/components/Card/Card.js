import { useState } from "react";

export default function Card({info}){

    const [ocultar,setOcultar] = useState(true);

    const mostrar =() =>{
        console.log(info)
        setOcultar(false)

    }

    const ocultarInfo = () =>{
        setOcultar(true)
    }

    return(
        <div className="bg-primary my-5 d-flex">
            <div>
                <img src={info.image} alt={info.name} />
                <h2>{info.name}</h2>
                <button onClick={mostrar} className={ocultar?"bg-success":"d-none"}>Know more</button>
                {/* { ocultar  ? <button onClick={mostrar}>Know more</button>:''} */}
            </div>  

            { ocultar === false ?
                <div>
                    <button className="bg-warning" onClick={ocultarInfo}>X</button>
                    <ul className="list-group">
                        <li className="list-group-item">Character Status {info.status}</li>
                        <li className="list-group-item">Species {info.species}</li>
                        <li className="list-group-item">Origin{info.origin.name}</li>
                        <li className="list-group-item">Gender{info.gender}</li>
                    </ul>
                </div>     
            :''}
            
        </div> 
    )
}