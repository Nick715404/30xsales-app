import { createEffect } from "effector";

export const getAllProductsFX = createEffect(async () => {
  try {
    const responce = await fetch('http://localhost:3100/api/product/all');
    return responce.json();
  } 
  catch (error) {
    console.log(error);
  }
})