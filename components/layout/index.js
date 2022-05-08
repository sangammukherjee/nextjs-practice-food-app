import Link from "next/link";
import { Fragment } from "react";
import styles from './layout.module.css';
export default function Layout({ children }) {
  return (
    <Fragment>
      <header className={styles.header}>
        <div className={styles.div}>
            <Link href="/">Home</Link>
        </div>
        <ul className={styles.ul}>
          <li>
          <Link href="/items">Items</Link>
          </li>
        </ul>
      </header>
      <main>{children}</main>
    </Fragment>
  );
}
