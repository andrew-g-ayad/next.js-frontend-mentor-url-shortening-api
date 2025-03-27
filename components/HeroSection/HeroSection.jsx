import React from 'react';
import Image from 'next/image';
import styles from './HeroSection.module.scss';
export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.hero_content}>
          <h1 className={styles.title}>More than just shorter links</h1>
          <p className={styles.message}>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className={styles.btn_cta}>Get Started</button>
        </div>
        <div className={styles.hero_img}>
          <Image
            src='./images/illustration-working.svg'
            alt='illustration-working-on-computer'
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
