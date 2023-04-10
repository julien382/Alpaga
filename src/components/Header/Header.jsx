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
                    <Link className='linkHeader' to="/alimentation">Alimentation</Link>
                    <Link className='linkHeader' to="/race">Race</Link>
                    <Link className='linkHeader' to="/elevage">L'élevage</Link>
                    <Link className='linkHeader' to="/production">Production</Link>

                    <Link className='linkLama' to="lama">Lama</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header