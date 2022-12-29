import Navegation from '../Navegation/Navegation'
import {useState} from 'react';
import { Fragment } from "react";

export default function Contact(){

    // let[inputNombre, setInputNombre]=useState("")

    // const registerData = (event) =>{
    //     setInputNombre(event.target.value)
        
    // }

    // const mostrar = () => {
    //     console.log(inputNombre)
    // }

    return(
        <Fragment>
            <Navegation />
            <div>
                <h2>Contact</h2>
                <h3>Leave us your information so we can contact you</h3>
                <form className="row g-3 mx-4">
                    <div className="col-md-6">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre"></input>
                        {/* <input type="text" className="form-control" id="nombre" value={inputNombre} onChange={registerData} onBlur={mostrar}/> */}
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="correo" className="form-label">Email</label>
                        <input type="email" className="form-control" id="correo"/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="msj" className="form-label">Mensaje</label>
                        <textarea type="text" className="form-control" id="msj" placeholder="Escriba aqui..." />
                    </div>  
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </div>
                </form>  
            </div>          
        </Fragment>        
    )
}