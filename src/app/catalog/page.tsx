import styles from './page.module.scss';

import Catalog from '@/components/catalog/Catalog';

export default function CatalogPage() {
  return (
    <div className='catalog'>
      <div className={styles.whiteBox}>
        <section className={styles.catalog}>
          <div className="container">
            <Catalog sortMode={false} />
          </div>
        </section>
      </div>
    </div>
  )
}