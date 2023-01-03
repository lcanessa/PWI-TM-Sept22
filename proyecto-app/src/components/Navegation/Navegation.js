import {Link} from "react-router-dom";
import './Navegation.css';
export default function Navegation() {
    return(
       <header>
        <nav className="navbar navbar-expand-lg  w-100 bg-blue">
            <div className="container-fluid">
                <a className="navbar-brand">Rick & Morty </a>
                
                    <ul className="navbar-nav nav-pills">
                        <li className="nav-item"> 
                            <Link className="nav-link boton" to="/">Home</Link>  
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link boton" to="/characters">Characters</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link boton" to="/contact">Contact</Link>
                        </li>
                    </ul>
                
            </div>
        </nav>
       </header>
    )
}