import React from 'react';
import styles from './ShortenListItem.module.scss';
export default function ShortenListItem(props) {
  return (
    <div className={styles.short_item_container}>
      <li className={styles.short_item}>
        <p className={styles.link}>{props.link}</p>
        <div className={styles.flex_group}>
          <p className={styles.short_link}>{props.shortLink}</p>
          <button className={styles.copy_btn}>copy</button>
        </div>
      </li>
    </div>
  );
}
