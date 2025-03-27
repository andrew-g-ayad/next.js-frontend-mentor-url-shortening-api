import Image from 'next/image';
import React from 'react';
import style from './FeaturesItem.module.scss';
export default function FeaturesItem({ id, title, content, image }) {
  return (
    <div className={style.card}>
      <li key={id}>
        <div className={style.image_container}>
          <Image className={style.image} src={image} height={50} width={50} />
        </div>
        <h2 className={style.title}>{title}</h2>
        <p className={style.content}>{content}</p>
      </li>
    </div>
  );
}
