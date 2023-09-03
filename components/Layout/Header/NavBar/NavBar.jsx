import React from 'react';

import Logo from '../Logo/Logo';
import NavLinks from './NavLinks/NavLinks';
import AuthLinks from './AuthLinks/AuthLinks';

import style from './NavBar.module.scss';
export default function NavBar(props) {
  return (
    <nav className={`${style.navBar} ${props.className}`}>
      <Logo />
      <NavLinks className={`${style.navLinks}`} />
      <AuthLinks className={`${style.auhLinks}`} />
    </nav>
  );
}
