//importar css para darle estilo al <li>
import './ListItemHome.css' 

export default function ListItemHome({dato, otraData}){
    const mostrar = () => {
        console.log(otraData)
    }

    return(
        <li onClick={mostrar}>{dato}</li>
    )    
}

//onMouseOver
//onChange
//onClick