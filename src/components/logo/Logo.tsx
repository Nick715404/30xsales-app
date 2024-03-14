'use client'

import styles from './Logo.module.scss';

import Link from 'next/link';
import Image from 'next/image';
import logoImg from '/public/svg/30XSales.svg'
import { usePathname } from 'next/navigation';

type Props = {
  mode?: boolean
}

export default function Logo({ mode }: Props) {

  const alt = 'Логотип сайта 30Xsales'
  const currentUrl = usePathname();

  return (
    <div
      className={styles.logo}>
      <Link className={styles.link} href={'/'}>
        <Image
          className={styles.img}
          src={logoImg}
          alt={alt}
          priority
          style={mode ? {filter: 'invert(100%)'} : {}}
        />
      </Link>
    </div>
  )
}