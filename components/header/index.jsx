import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";

export default function index() {
  return (
    <header className={styles.Header}>
      <Link href="/contact-me">צרי קשר</Link>
      <h1>Style By Avigail</h1>
    </header>
  );
}
