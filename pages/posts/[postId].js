import styles from "../../styles/Home.module.css";

export async function getServerSideProps(context) {
  const { params } = context;
  const postResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}?userId=1`
  );
  const postData = await postResponse.json();
  const userResponse = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.postId}`
  );
  const userData = await userResponse.json();
  return {
    props: {
      post: postData,
      user: userData,
    },
  };
}

export default function Post({ post, user }) {
  return (
    <div className={styles.postContainer}>
      <h1>{user.name}</h1>
      <div className={styles.info}>
        <p>@{user.username}</p>
        <p>{user.email}</p>
      </div>
      <hr></hr>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
