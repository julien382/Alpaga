import './Header.scss'

import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import logoAlpaga from "../../assets/logoAlpaga.png";

const Header = () => {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showHeader, setShowHeader] = useState(true); // controle l'état d'affichage du header en fonction du scroll
    const [showMobileMenu, setShowMobileMenu] = useState(false); // controle l'état d'affichage du burger menu mobile/pc

    const handleLinkClick = () => {
      setShowMobileMenu(false);
    };

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
          <div className={showHeader ? "headerContainer" : "headerContainer hide"}>
            <div className='mobileMenuIcon' onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <div className={`bar ${showMobileMenu ? "active" : ""}`}></div>
              <div className={`bar ${showMobileMenu ? "active" : ""}`}></div>
              <div className={`bar ${showMobileMenu ? "active" : ""}`}></div>
            </div>
            <Link to="/" className='logo'>
              <img className='logoAlpaga' src={logoAlpaga} alt="logoAlpaga" />
              <p className='logotexte'>Alpaga</p>
            </Link>

            <div className={`mobileMenu ${showMobileMenu ? "active" : ""}`}>
              <nav>
                <Link className='linkHeader' to="/alimentation" onClick={handleLinkClick}>Alimentation</Link>
                <Link className='linkHeader' to="/race" onClick={handleLinkClick}>Race</Link>
                <Link className='linkHeader' to="/production" onClick={handleLinkClick}>Production</Link>
                <Link className='linkHeader' to="/galerie" onClick={handleLinkClick}>Galerie</Link>
                <Link className='linkLama' to="lama" onClick={handleLinkClick}>Lama</Link>
                </nav>
            </div>
            <div className='containerNav'>
              <nav>
                <Link className='linkHeader' to="/alimentation" onClick={handleLinkClick}>Alimentation</Link>
                <Link className='linkHeader' to="/race" onClick={handleLinkClick}>Race</Link>
                <Link className='linkHeader' to="/production" onClick={handleLinkClick}>Production</Link>
                <Link className='linkHeader' to="/galerie" onClick={handleLinkClick}>Galerie</Link>
                <Link className='linkLama' to="lama" onClick={handleLinkClick}>Lama</Link>
              </nav>
            </div>
            <div className={`overlay ${showMobileMenu ? "active" : ""}`}></div>
          </div>
        </header>
      );
      
}
export default Header