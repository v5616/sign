import Link from "next/link";
import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>Fresher Coders</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/news">
              <a>Jobs</a>
            </Link>
          </li>
          <li>
            <Link href="/auth/signin">
              <a className="btn-secondary">Sign in</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
