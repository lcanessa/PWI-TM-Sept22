import './Filters.css';

export default function Filters(props){
    return(
        /*cambiamos class por className y for por htmlFor, y cerramos la </> -- asi lo necesita react (jsx)*/
        <div className="d-flex justify-content-between flex-wrap">
            <div className="form-check form-switch px-5 py-2">
                <input className="form-check-input" type="checkbox" role="switch" id={props.datoFiltro} value={props.datoFiltro} onChange={props.muestraValor} />
                <label className="form-check-label" htmlFor={props.datoFiltro}>{props.nombreFiltro}</label>
            </div>
        </div>
    )
}