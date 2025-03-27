import React from 'react';
import style from './Features.module.scss';
import FeaturesItem from './FeaturesItem/FeaturesItem';
import ICON_BRAND from '../../public/images/icon-brand-recognition.svg';
import ICON_DETAILED from '../../public/images/icon-detailed-records.svg';
import ICON_CUSTOMIZABLE from '../../public/images/icon-fully-customizable.svg';
export default function Features() {
  const FEATURES = [
    {
      id: '1',
      title: 'Brand Recognition',
      content:
        'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
      image: ICON_BRAND,
    },
    {
      id: '2',
      title: 'Detailed Records',
      content:
        'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
      image: ICON_DETAILED,
    },
    {
      id: '3',
      title: 'Fully Customizable',
      content:
        'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
      image: ICON_CUSTOMIZABLE,
    },
  ];
  return (
    <section className={style.section}>
      <h2 className={style.title}>Advanced Statistics</h2>
      <p className={style.content}>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className={style.divider}></div>
      <ul className={style.features_grid}>
        {FEATURES.map((item) => {
          return (
            <FeaturesItem
              key={item.id}
              title={item.title}
              content={item.content}
              image={item.image}
            />
          );
        })}
      </ul>
    </section>
  );
}
