import Link from "next/link";
import styles from "../../styles/Posts.module.css";

export default function Posts({ posts }) {
  return (
    <div className={styles.cardsContainer}>
      {posts.map((post) => {
        return (
            <Link href={`/posts/${post.id}`} passHref key={post.id}>
              <div className={styles.card}>
                  <h3>{post.title}</h3>
                  <p>{post.body.slice(0, 100)}...</p>
                  <Link href={`/posts/${post.id}`} passHref>
                      <a className={styles.expand}>See More</a>
                  </Link>
              </div>
            </Link>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();

  return {
    props: {
      posts: data.slice(0,10),
    },
  };
}
