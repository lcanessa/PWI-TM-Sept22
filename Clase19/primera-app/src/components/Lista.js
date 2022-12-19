export default function Lista(props){
    const mostrar = () =>{
        console.log(props.infoItems)
    }
    return(
        <ul className="my-4">
            {props.infoItems.map((i)=>{
                return <li key={i} className="btn btn-primary">{i}</li>
            })}
        </ul>
    )
}