export const getAllPosts = async () => {
  try {
    const response = await fetch('http://localhost:3100/api/post/all');
    return response.json();
  }
  catch (error) {
    console.log(error);
  }
}

export const getSinglePost = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:3100/api/post/${id}`, {
      method: 'GET'
    });
    return response.json();
  }
  catch (error) {
    console.log('Ошибка в запросе');
  }
}