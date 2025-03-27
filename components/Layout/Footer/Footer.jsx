import React from 'react';
import Image from 'next/image';
import logo from '../../../public/images/logo.svg';
import ICON_FACEBOOK from '../../../public/images/icon-facebook.svg';
import ICON_TWITTER from '../../../public/images/icon-twitter.svg';
import ICON_PINTEREST from '../../../public/images/icon-pinterest.svg';
import ICON_INSTAGRAM from '../../../public/images/icon-instagram.svg';
import style from './Footer.module.scss';
export default function Footer() {
  return (
    <div className={style.background}>
      <footer className={style.footer}>
        <div className={style.logo_container}>
          <Image className={style.logo} src={logo} height={50} width={100} />
        </div>
        <ul className={style.ul}>
          <p className={style.title}>Features</p>
          <i className={style.li}>Link Shortening</i>
          <i className={style.li}>Branded Links</i>
          <i className={style.li}>Analytics</i>
        </ul>
        <ul className={style.ul}>
          <p className={style.title}>Resources</p>
          <i className={style.li}>Blog</i>
          <i className={style.li}>Developers</i>
          <i className={style.li}>Support</i>
        </ul>
        <ul className={style.ul}>
          <p className={style.title}>Company</p>
          <i className={style.li}>About</i>
          <i className={style.li}>Our Team</i>
          <i className={style.li}>Careers</i>
          <i className={style.li}>Contact</i>
        </ul>
        <ul className={style.social_links}>
          <Image
            className={style.social_icon}
            width={50}
            height={50}
            src={ICON_FACEBOOK}
          />
          <Image
            className={style.social_icon}
            width={50}
            height={50}
            src={ICON_TWITTER}
          />
          <Image
            className={style.social_icon}
            width={50}
            height={50}
            src={ICON_PINTEREST}
          />
          <Image
            className={style.social_icon}
            width={50}
            height={50}
            src={ICON_INSTAGRAM}
          />
        </ul>
      </footer>
    </div>
  );
}
