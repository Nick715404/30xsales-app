export const getAllProducts = async () => {
  try {
    const responce = await fetch('http://localhost:3100/api/product/all', {
      next: {
        revalidate: 10000
      }
    });
    return responce.json();
  }
  catch (error) {
    console.log(error);
  }
};

export const getSingleProduct = async (id: string) => {
  try {
    const responce = await fetch(`http://localhost:3100/api/product/${id}`);
    return responce.json();
  }
  catch (error) {
    throw new Error('Something wrong witch this post');
  }
}