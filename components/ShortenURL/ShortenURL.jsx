import React from 'react';
import styles from './ShortenURL.module.scss';
import utilityClasses from './../../styles/utility.module.scss';

export default function ShortenURL() {
  function handleSubmitFormURLShorten(e) {
    e.preventDefault();
  }
  return (
    <section className={styles.section}>
      <div className={utilityClasses.container}>
        <div className={styles.shorten_box}>
          <form onSubmit={handleSubmitFormURLShorten} className={styles.form}>
            <input placeholder='Shorten a link here...' type='text' />
            <p className={`${styles.error_message} ${styles.error_hidden}`}>
              Please add a link
            </p>
          </form>
          <button
            type='submit'
            className={`${styles.btn} ${styles.btn_shorten}`}
          >
            Shorten It!
          </button>
        </div>
      </div>
    </section>
  );
}
