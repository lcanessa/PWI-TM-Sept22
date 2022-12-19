export default function Card({info}){
    const mostrar =() =>{
        console.log(info)
    }

    return(
        <div className="bg-primary my-5">
            <img src={info.image} alt={info.name} />
            <h2>{info.name}</h2>
            <button onClick={mostrar}>Know more</button>
        </div> 
    )
}