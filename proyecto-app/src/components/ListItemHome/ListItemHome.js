import {Link} from "react-router-dom";
import "./ListItemHome.css"

export default function ListItemHome ({dato,infoPath}){
  


    return(
        <li  className="nav-item" >
            <Link to={infoPath} className="nav-link active m-2 p-3 botones">{dato}</Link>
        </li>
    )
} 
