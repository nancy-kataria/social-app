import styles from "../styles/Home.module.css";
import { Button } from "@material-ui/core";
import { ArrowRight } from "@material-ui/icons";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>SCL for a better virtual experience.</h1>
      <h1>Influence and Inspire.</h1>
      <Link href="/posts" passHref>
        <Button variant="text">
          See What Others are doing <ArrowRight />
        </Button>
      </Link>
      <br/>
      <Link href="/gallery" passHref>
        <Button variant="text">
          Visit the Gallery <ArrowRight />
        </Button>
      </Link>
    </div>
  );
}
