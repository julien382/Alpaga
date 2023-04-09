import './Header.css'

import { Link } from "react-router-dom";
import logoAlpaga from "../../assets/logoAlpaga.png";

const Header = () => {


    return (
        <header className='header'>
            <Link to="/" className='logo'>
                <img className='logoAlpaga' src={logoAlpaga} alt="logoAlpaga" />
                <p className='logotexte font color2'>Alpaga</p>
            </Link>
            <div className='containerNav'>
                <nav>
                    <Link className='link' to="/alimentation">Alimentation</Link>
                    <Link className='link' to="/race">Race</Link>
                    <Link className='link' to="/elevage">L'élevage</Link>
                    <Link className='link' to="/production">Production</Link>

                    <Link className='linkLama' to="lama">Lama</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header