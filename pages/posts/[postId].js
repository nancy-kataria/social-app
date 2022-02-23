import styles from "../../styles/Home.module.css";

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

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const paths = data.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const postResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
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
