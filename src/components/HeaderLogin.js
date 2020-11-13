import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from 'react-router-dom';
import logo from '../../public/images/homepage/whiteLogo.svg';


export default function HeaderLogin() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 400px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="HeaderLogin">
      <img src={logo} className="LogoLogin" alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="NavLogin">
          <a href="/">Home</a>
          <a href="/about-us">About us</a>
          <a href="/contact-us">Contact us</a>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="BurgerLogin">
        <i className="fas fa-bars fa-lg"></i>
      </button>
    </header>
  );
}
