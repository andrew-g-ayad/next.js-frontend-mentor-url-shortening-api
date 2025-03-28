import React from 'react';
import Link from 'next/link';

import styles from './AuthLinks.module.scss';
import utilityClasses from '../../../../../styles/utility.module.scss';
export default function AuthLinks(props) {
  return (
    <ul className={`${styles.authLinks} ${props.className}`}>
      <li>
        <Link href='/login' className={` ${styles.btnLogin}`}>
          Login
        </Link>
      </li>
      <li>
        <Link
          href='/register'
          className={`   ${styles.btnRegister}`}
          data-shape='round-borders'
        >
          Sign Up
        </Link>
      </li>
    </ul>
  );
}
