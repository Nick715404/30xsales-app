import styles from './Products.module.scss';

import { IProducts } from "@/interfaces/interfaces";
import { getAllProductsFX } from "@/api/products/products";

import Product from "../product/Product";

export default async function Products() {
  const products = await getAllProductsFX();

  return (
    <div className={styles.grid}>
      {products && products.map((product: IProducts) =>
        <Product key={product.id} product={product} />
      )}
    </div>
  )
}