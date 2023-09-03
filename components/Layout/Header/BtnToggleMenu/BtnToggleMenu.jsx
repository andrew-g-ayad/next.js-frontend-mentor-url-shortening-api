import React from 'react';
import styles from './BtnToggleMenu.module.scss';

export default function Navbar(props) {
  return (
    <button
      id='mobile-menu-toggle'
      aria-label='Toggle Mobile Menu'
      aria-expanded='false'
      aria-controls='mobile-menu'
      className={`${styles.burgerMenu} ${props.ClassName}`}
    >
      <div></div>
      <div></div>
      <div></div>
      <span className={styles.visuallyHidden}>Menu</span>
    </button>
  );
}
