import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from 'react-router-dom';
import logo from '../../public/images/homepage/whiteLogo.svg';

/* eslint-disable jsx-a11y/accessible-emoji */

export default function HeaderContactUs() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
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
    <header className="HeaderContactUs">
      <img src={logo} className="LogoContactUs" alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="NavContactUs">
          <a href="/">Home</a>
          <a href="/about-us">About us</a>
          <a href="/advisory">Advisory</a>
          <a href="/jobseeker/register">Register</a>
          <a href="/login">Login</a>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="BurgerContactUs">
        <i className="fas fa-bars fa-lg"></i>
      </button>
    </header>
  );
}
