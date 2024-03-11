'use client'

import styles from './BurgerMenu.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import { useState } from 'react';

export default function BurgerMenu() {

  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className={styles.mobile_menu}>
      <div className={`${styles.burger} ${openMenu ? styles.open : ''}`} onClick={(): void => setOpenMenu(!openMenu)}>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
      </div>
    </div>
  )
}