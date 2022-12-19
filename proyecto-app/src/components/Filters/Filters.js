export default function Filters(props){
    return(
        /*cambiamos class por className y for por htmlFor, y cerramos la </> -- asi lo necesita react (jsx)*/
        <div className="form-check form-switch mx-2 bg-warning">
            <input className="form-check-input" type="checkbox" role="switch" id={props.datoFiltro} value={props.datoFiltro} onChange={props.muestraValor} />
            <label className="form-check-label" htmlFor={props.datoFiltro}>{props.nombreFiltro}</label>
        </div>
    )
}