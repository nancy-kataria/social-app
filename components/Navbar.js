import Link from "next/link";
import { Button } from "@material-ui/core";

export default function Navbar() {
  return (
    <div className="header">
      <h1 className="logo">
        <Link href="/">
          <a>SCL</a>
        </Link>
      </h1>
      <ul className="main-nav">
        <li>
          <Link href="/" passHref>
            <Button component="a" variant="text">
              Home
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/posts" passHref>
            <Button component="a" variant="text">
              Feed
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/gallery" passHref>
            <Button component="a" variant="text">
              Gallery
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/myProfile" passHref>
            <Button component="a" variant="text">
              My Profile
            </Button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
