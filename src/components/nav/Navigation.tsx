'use client'

import styles from './Navigation.module.scss';
import Link from 'next/link';

import { navLinks } from '@/constans/constants';
import { INavLink } from '@/interfaces/interfaces';
import { usePathname } from 'next/navigation';

export default function Navigation() {

  const pathName = usePathname();

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {navLinks.map((link: INavLink) => {
          const isActive = pathName === link.href;
          return (
            <li key={link.label} className={styles.item}>
              <Link
                className={isActive ? styles.active : styles.link}
                href={link.href}>
                {link.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}