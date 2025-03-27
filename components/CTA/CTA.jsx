import React from 'react';
import Link from 'next/link';
import style from './CTA.module.scss';
export default function CTA() {
  return (
    <section className={style.section}>
      <h2 className={style.title}>Boost your links today</h2>
      <Link className={style.btn_cta} href='#'>
        Get Started
      </Link>
    </section>
  );
}
