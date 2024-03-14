'use client'

import styles from './Socials.module.scss';

import Image from 'next/image';
import Link from "next/link"

import Facebook from '/public/svg/facebook-black.svg';
import Instagramm from '/public/svg/inst.svg';
import Youtube from '/public/svg/youtube.svg';

import { ISocialsImages } from '@/interfaces/interfaces';
import { usePathname } from 'next/navigation';

type Props = {
  mode?: boolean
}

export default function Socials({ mode }: Props) {

  const pathUrl = usePathname();

  const images: ISocialsImages = {
    facebook: Facebook,
    inst: Instagramm,
    youtube: Youtube
  }

  const handleStyleChange = () => {
    if (pathUrl != '/' && pathUrl != '/contacts' && pathUrl != '/post') {
      return styles.filtered;
    } else {
      return styles.socials
    }
  }

  return (
    <div className={handleStyleChange()}>
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
  )
}