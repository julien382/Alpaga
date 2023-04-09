import './Header.css'

import { Link } from "react-router-dom";
import logo from "../../assets/mainAlpaga.png";

const Header = () => {


    return (
        <header className='header'>
            <Link to="/"><img className='logo' src={logo} alt="logo Wealth Health" /></Link>
            <div className='containerNav'>
                <nav>
                    <Link className='link' to="/">Accueil</Link>
                    <Link className='link' to="/alimentation">Alimentation</Link>
                    <Link className='link' to="/race">Race</Link>
                    <Link className='link' to="/elevage">L'élevage</Link>
                </nav>

            </div>
        </header>
    )
}

export default Header