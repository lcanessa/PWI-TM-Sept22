import './Home.css'
import ListItemHome from '../ListItemHome/ListItemHome'

export default function Home(){
    return(
        <header className="bg-primary">
            <h1>Project - Rick & Morty</h1>
            <nav className='navbar'>
                <ul className='d-flex justify-content-between'>
                    <ListItemHome dato="Characters" otraData="true" />
                    <ListItemHome dato="Contact" />
                    {/* <li>Characters</li>
                    <li>Contact</li> */}
                </ul>
            </nav>
        </header>
    )
}