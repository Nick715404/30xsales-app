import styles from './Catalog.module.scss';

import Link from 'next/link';
import Filter from '../filter/Filter';
import Products from '../products/Products';

export default function Catalog() {
  return (
    <div className={styles.catalog}>
      <h2 className={styles.title}>каталог</h2>
      <Filter />
      <Products />
    </div>
  )
}