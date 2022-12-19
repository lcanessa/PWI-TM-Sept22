import Navegation from '../Navegation/Navegation'

export default function Contact(){
    return(
        <div>
            <Navegation />
            <h2>Contact</h2>
            <h3>Leave us your information so we can contact you</h3>
            <form className="row g-3 mx-4">
                <div className="col-md-6">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre"/>
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
    )
}