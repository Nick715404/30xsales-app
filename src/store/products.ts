import { createStore } from "effector";
import { IProducts } from "@/interfaces/interfaces";
import { getAllProductsFX } from "@/api/products/products";

export const $products = createStore<IProducts[]>([]);

$products.on(getAllProductsFX.doneData, (_, product) => product);