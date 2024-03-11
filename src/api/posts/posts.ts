import { createEffect } from "effector";

export const getAllPostsFX = createEffect(async () => {
  try {
    const responce = await fetch('http://localhost:3100/api/post/all');
    return responce.json();
  } 
  catch (error) {
    console.log(error);
  }
});