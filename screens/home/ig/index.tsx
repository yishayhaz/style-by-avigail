import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import Link from "next/link";

export function IgScreen() {
  return (
    <section className={styles.ig}>
      <h2>
        האינסטגרם שלי{" "}
        <Link href="https://www.instagram.com/avigailhaz" target="blank">
          @avigailhaz
        </Link>
      </h2>
      <div className={styles.grid}>
        <div>
          <Image src="/IG/1.png" alt="" width={200} height={200} />
        </div>
        <div>
          <Image src="/IG/2.png" alt="" width={200} height={200} />
        </div>
        <div>
          <Image src="/IG/3.png" alt="" width={200} height={200} />
        </div>
        <div>
          <Image src="/IG/4.png" alt="" width={200} height={200} />
        </div>
        <div>
          <Image src="/IG/5.png" alt="" width={200} height={200} />
        </div>
        <div>
          <Image src="/IG/6.png" alt="" width={200} height={200} />
        </div>
      </div>
    </section>
  );
}
