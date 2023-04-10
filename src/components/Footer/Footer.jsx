import './Footer.css'

import { Link } from "react-router-dom";

const Footer = () => {


    return (
        <footer className='footer'>
            <Link to="/mentionsLegales" className='mentionsLegales'>Mentions légales</Link>
            <Link to="/copyright" className='copyright'>2023 © Alpaga</Link>
            <Link to="https://www.linkedin.com/in/julien-hermain/" className='contact'>Contact</Link>
        </footer>
    )
}

export default Footer