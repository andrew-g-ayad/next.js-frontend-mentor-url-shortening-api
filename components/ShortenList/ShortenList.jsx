import React from 'react';
import styles from './ShortenList.module.scss';
import ShortenListItem from './ShortenListItem/ShortenListItem';
export default function ShortenList() {
  const DUMMY_LIST_ITEMS = [
    {
      id: '1',
      link: 'https://www.frontendmentor.io',
      shortLink: 'https://short/4jv3k2',
    },
    {
      id: '2',
      link: 'https://twitter.com/frontendmentor',
      shortLink: 'https://short/4jv3k2',
    },
    {
      id: '3',
      link: 'https://www.linkedin.com/company-name-goes-here',
      shortLink: 'https://shxcccccccccccccccccccccccccccccccccccccort/4jv3k2',
    },
  ];
  return (
    <section className={styles.shortList_section}>
      <ul className={styles.short_list}>
        {DUMMY_LIST_ITEMS.map((item) => {
          return (
            <ShortenListItem
              id={item.id}
              link={item.link}
              shortLink={item.shortLink}
            />
          );
        })}
      </ul>
    </section>
  );
}
