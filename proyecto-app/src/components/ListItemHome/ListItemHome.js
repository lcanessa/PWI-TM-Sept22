
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