'use client'

import styles from './BurgerMenu.module.scss';

import { useState } from 'react';
import { navLinks } from '@/constans/constants';
import { usePathname } from 'next/navigation';

import Link from 'next/link';
import Image from 'next/image';
import { ISocialsImages } from '@/interfaces/interfaces';
import Facebook from '/public/svg/facebook-black.svg';
import Instagramm from '/public/svg/inst.svg';
import Youtube from '/public/svg/youtube.svg';

export default function BurgerMenu() {
  const images: ISocialsImages = {
    facebook: Facebook,
    inst: Instagramm,
    youtube: Youtube
  }

  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const pathName = usePathname();

  const className = {
    active: 'active',
    default: ''
  };

  return (
    <>
      <div className={styles.mobile_menu}>
        <div
          className={`${styles.burger} ${openMenu ? styles.open : ''}`}
          onClick={(): void => setOpenMenu(!openMenu)}>
          <span className={styles.burger__line}></span>
          <span className={styles.burger__line}></span>
          <span className={styles.burger__line}></span>
        </div>
      </div>
      <div
        style={openMenu ? { transform: 'translateY(0%)' } : { transform: 'translateY(-100%)' }}
        className={styles.menu}>
        <ul className={styles.list}>
          {navLinks.map(link => {
            const isActive = pathName === link.href;
            return (
              <li key={link.href} className={styles.item}>
                <Link className={isActive ? styles.active : styles.link} href={link.href}>
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
        <div className={styles.content}>
          <span className={styles.title}>Мы в соц. сетях</span>
          <div className={styles.bottomBox}>
            <div className={styles.socials}>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <Link className={styles.link} href={'/'}>
                    <Image className={styles.img} src={images.facebook} alt='' />
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link className={styles.link} href={'/'}>
                    <Image className={styles.img} src={images.inst} alt='' />
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link className={styles.link} href={'/'}>
                    <Image className={styles.img} src={images.youtube} alt='' />
                  </Link>
                </li>
              </ul>
            </div>
            <span className={styles.copy}>30XSales © 2024. Все права защищены.</span>
          </div>
        </div>
      </div>
    </>
  )
}