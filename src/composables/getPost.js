import { ref } from "@vue/reactivity";

const getPost = () => {
  const post = ref([]);
  const error = ref(null);

  const load = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/posts/${id}`);
      if (!res.ok) {
        throw Error("No Data Available");
      }
      const data = await res.json();

      post.value = data;
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { post, error, load };
};

export default getPost;
