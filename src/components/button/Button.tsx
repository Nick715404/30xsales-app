import styles from './Button.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import arrow from '/public/svg/white-arrow.svg'

type Props = {
  text: string,
  href: string,
  style?: any
}

export default function Button({ text, href, style }: Props) {

  return (
    <Link style={style} className={styles.btn} href={`${href}`}>
      <span className={styles.text}>{text}</span>
      <Image className={styles.arrow} src={arrow} alt='' />
    </Link>
  )
}