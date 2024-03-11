import styles from './Button.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import arrow from '/public/svg/white-arrow.svg'

type Props = {
  text: string,
  href: string
}

export default function Button({ text, href }: Props) {

  return (
    <Link className={styles.btn} href={`${href}`}>
      <span className={styles.text}>{text}</span>
      <Image className={styles.arrow} src={arrow} alt='' />
    </Link>
  )
}