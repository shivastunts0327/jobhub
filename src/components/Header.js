/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import logo from '../../public/images/homepage/orangeLogo.svg';
import { CSSTransition } from "react-transition-group";
import india from '../../public/images/india.svg';

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 800px)");
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
    <header className="Header">
      <img src={logo} className="Logo" alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <a href="/about-us">About us</a>
          <a href="/blog-grid">Blog</a>
          <a href="/advisory">Advisory</a>
          <a href="/contact-us">Contact us</a>
          <a href="/login">Login</a>
          <i className="fas fa-bell"></i>
          <img src={india} className="india"></img>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        <i className="fas fa-bars fa-lg"></i>
      </button>
    </header>
  );
}
