import styles from './page.module.scss';

import Image from 'next/image';

import Button from '@/components/button/Button';
import Banner from '@/components/banner/Banner';
import Catalog from '@/components/catalog/Catalog';

import aboutImg from '/public/png/about.png';

export default function Home() {

  return (
    <main id='home'>

      <section id='home-hero' className={styles.hero}>
        <div className="container">
          <div className={styles.hero__wrapper}>
            <div className={styles.hero__content}>
              <h1 className={styles.hero__title}>Уверенность <br /> и смелость - это в вашем стиле </h1>
              <p className={styles.hero__text}>Одежда, которая никогда не подведет и вы будете чувствовать <br /> себя в ней уверенно и комфортно</p>
            </div>
            <Button text='В каталог' href='/catalog' />
          </div>
        </div>
      </section>

      <div className={styles.white_box}>

        <section id='home-about' className={styles.about}>
          <div className="container-small">
            <div className={styles.about__wrapper}>
              <div className={styles.about__text_box}>
                <h2 className={styles.about__title}>Мы — команда 30XSales</h2>
                <p className={styles.about__text}>До выхода на wb собстенник работал  в партнёрстве, совместно реализовывали одежду для фитнеса, был создан бренд "smithfit".  После было принято решение выходить самостоятельно  уже на Wildberries, расширять ассортимент стоковых позиций</p>
                <div className={styles.about__btn_box}>
                  <Button text='Подробнее о нас' href='/about' />
                </div>
              </div>
              <div className={styles.about__img_box}>
                <Image className={styles.about__img} src={aboutImg} alt='О компании 30XSales' />
              </div>
            </div>
          </div>
        </section>

        <section id='home-banner'>
          <Banner />
        </section>

        <section id='home-catalog' className={styles.catalog}>
          <div className="container">
            <Catalog />
          </div>
        </section>

      </div>
    </main>
  );
}
