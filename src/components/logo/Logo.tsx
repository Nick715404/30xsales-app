'use client'

import styles from './Logo.module.scss';

import Link from 'next/link';
import Image from 'next/image';
import logoImg from '/public/svg/30XSales.svg'
import { usePathname } from 'next/navigation';

export default function Logo() {

  const alt = 'Логотип сайта 30Xsales'
  const currentUrl = usePathname();

  return (
    <div
      className={currentUrl != '/' ? styles.filter : styles.logo }>
      <Link className={styles.link} href={'/'}>
        <Image
          className={styles.img}
          src={logoImg}
          alt={alt}
          priority
        />
      </Link>
    </div>
  )
}