import './Header.css'

import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import logoAlpaga from "../../assets/logoAlpaga.png";

const Header = () => {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showHeader, setShowHeader] = useState(true);

    useEffect(() => {
        function handleScroll() {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            setShowHeader(false);
        } else {
            setShowHeader(true);
        }
        setLastScrollY(currentScrollY);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);


    return (
        <header className='header'>
            <div className={showHeader  ? "headerContainer" : "headerContainer hide"}>
                <Link to="/" className='logo'>
                    <img className='logoAlpaga' src={logoAlpaga} alt="logoAlpaga" />
                    <p className='logotexte font color2'>Alpaga</p>
                </Link>
                <div className='containerNav'>
                    <nav>
                        <Link className='linkHeader' to="/alimentation">Alimentation</Link>
                        <Link className='linkHeader' to="/race">Race</Link>
                        <Link className='linkHeader' to="/production">Production</Link>
                        <Link className='linkHeader' to="/galerie">Galerie</Link>

                        <Link className='linkLama' to="lama">Lama</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header