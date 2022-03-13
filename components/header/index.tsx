import type { NextPage } from "next";
import Link from "next/link";
import styles from "./styles.module.scss";

const Header: NextPage = () => {
  return (
    <nav className={styles.desktopHeader}>
      <ul className={styles.headerItems}>
        <li>
          <Link href="/shop">
            <a>shop</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>men</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>women</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>salve</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>collections</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>search</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>cart</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
