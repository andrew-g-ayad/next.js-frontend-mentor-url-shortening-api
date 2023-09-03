import React from 'react';
import Link from 'next/link';

import styles from './AuthLinks.module.scss';
export default function AuthLinks(props) {
  return (
    <div className={`${styles.authLinks} ${props.className}`}>
      <Link
        href='/login'
        className={`${styles.btnSecondary} ${styles.btnLogin}`}
      >
        Login
      </Link>
      <Link
        href='/register'
        className={`${styles.btnRegister}`}
        data-shape='round-borders'
      >
        Sign Up
      </Link>
    </div>
  );
}
