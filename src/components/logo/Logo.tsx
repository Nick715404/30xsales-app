import styles from './Logo.module.scss';

import Link from 'next/link';
import Image from 'next/image';
import logoImg from '/public/svg/30XSales.svg'

export default function Logo() {

  const alt = 'Логотип сайта 30Xsales'

  return (
    <div className={styles.logo}>
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