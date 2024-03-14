export const getAllReviews = async () => {
  try {
    const responce = await fetch('http://localhost:3100/api/reviews/all', {
      next: {
        revalidate: 600
      }
    });
    return responce.json();
  }
  catch (error) {
    console.log(error);
  }
}