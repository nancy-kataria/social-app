import { useQuery } from "react-query";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const fetchPictures = async () => {
  const response = await fetch(`https://picsum.photos/v2/list?page=2&limit=20`);
  return response.json();
};

export async function getStaticProps() {
  const data = await fetchPictures();

  return {
    props: {
      images: data,
    },
  };
}

const myLoader = ({ src }) => {
  return `https://picsum.photos/id/${src}`;
};

export default function Gallery({ images }) {
  const { data, isLoading, isFetching, isError, error } = useQuery(
    "pictures",
    fetchPictures,
    {
      initialData: images,
      staleTime: Infinity,
    }
  );

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div className={styles.gallery}>
      {data.map((image) => {
        return (
          <div key={image.id} className={styles.imgCard}>
            <Image
              loader={myLoader}
              src={`/${image.id}/${image.width}/${image.height}.jpg`}
              alt={image.author}
              width="300"
              height="320"
            />
            <p>{image.author}</p>
          </div>
        );
      })}
    </div>
  );
}
