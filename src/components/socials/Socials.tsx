import styles from './Socials.module.scss';

import Image from 'next/image';
import Link from "next/link"

import Facebook from '/public/svg/facebook-black.svg';
import Instagramm from '/public/svg/inst.svg';
import Youtube from '/public/svg/youtube.svg';

import { ISocialsImages } from '@/interfaces/interfaces';

type Props = {}

export default function Socials({ }: Props) {
  const images: ISocialsImages = {
    facebook: Facebook,
    inst: Instagramm,
    youtube: Youtube
  }

  return (
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
  )
}