import React from 'react';
import Link from 'next/link';

import styles from './NavLinks.module.scss';
export default function NavLinks(props) {
  return (
    <ul className={`${styles.navLinks}   ${props.className}`}>
      <li>
        <Link href='/features'>Features</Link>
      </li>
      <li>
        <Link href='/pricing'>Pricing</Link>
      </li>
      <li>
        <Link href='/resources'>Resources</Link>
      </li>
    </ul>
  );
}
