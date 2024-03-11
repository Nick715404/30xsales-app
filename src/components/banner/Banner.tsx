'use client'

import styles from './Banner.module.scss';
import Button from '../button/Button';

import { IBrand } from '@/interfaces/interfaces';
import { brands } from '@/constans/constants';
import { useState } from 'react';

export default function Banner() {

  const [brand, setBrand] = useState({
    brandTitle: '',
    isHover: false
  });

  const handleMouseEnter = (id: string) => {
    setBrand({
      brandTitle: id,
      isHover: true
    });
  };

  const handleMouseLeave = () => {
    setBrand({
      brandTitle: '',
      isHover: false
    });
  };

  return (
    <div
      id={brand.isHover ? `${brand.brandTitle}-bg` : `banner`}
      className={styles.banner}>
      {brands.map(({ id, name, description }: IBrand) => (
        <div
          key={id}
          id={id}
          onMouseEnter={() => handleMouseEnter(id)}
          onMouseLeave={handleMouseLeave}
          className={styles.column}
        >
          <h2 className={styles.title}>{name}</h2>
          <p className={styles.text}>{description}</p>
          <div className={styles.btn_box}>
            <Button text='Подробнее о бренде' href='#' />
          </div>
        </div>
      ))}
    </div>
  );
}
