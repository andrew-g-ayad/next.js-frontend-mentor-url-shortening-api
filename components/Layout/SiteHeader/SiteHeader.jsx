import styles from './SiteHeader.module.scss';
import Logo from './Logo/Logo';
import NavBar from './NavBar/NavBar';
import { useEffect, useState } from 'react';

export default function SiteHeader() {
  const [showMenu, setShowMenu] = useState(false);
  function toggleMenuHandler(event) {
    console.log('toggle on');
    event.preventDefault();
    event.stopPropagation();
    setShowMenu((oldState) => {
      return !oldState;
    });
  }

  useEffect(() => {
    function handleClickOutside(event) {
      console.log('moving');
      if (showMenu === true) {
        setShowMenu(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('scroll', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('scroll', handleClickOutside);
    };
  }, [showMenu]);
  return (
    <header className={styles.site_header}>
      <div className={styles.container}>
        <Logo />
        <NavBar showMenu={showMenu} />
      </div>
      <div onClick={toggleMenuHandler} className={styles.burger_menu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
