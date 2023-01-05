import Navegation from '../Navegation/Navegation'
import {useState} from 'react';
import { Fragment } from "react";
import './Contact.css';

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
            <main className='container-fluid main-contact'>
                <div className=' main-contact-div d-flex flex-column justify-content-center align-items-center m-auto mt-5 w-75 h-75'>
                    <h1 className='row colorBLue'>Contact</h1>
                    <h3 className='row colorBLue'>Leave us your information so we can contact you</h3>
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
            </main> 
        </Fragment>        
    )
}