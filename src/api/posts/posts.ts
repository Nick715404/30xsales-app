export const getAllPosts = async () => {
  try {
    const responce = await fetch('http://localhost:3100/api/post/all');
    return responce.json();
  }
  catch (error) {
    console.log(error);
  }
}

export const getCurrentPost = async (id: string) => {
  try {
    const responce = await fetch(`http://localhost:3100/api/post/${id}`);
    console.log(responce);
    return responce.json();
  }
  catch (error) {
    console.log(error);
  }
}