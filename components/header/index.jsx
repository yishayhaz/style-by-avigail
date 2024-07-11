import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./style.module.scss";
import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const routes = [
  {
    name: "דף הבית",
    path: "/",
  },
  {
    name: "סטיילינג אישי",
    path: "/personal-styling",
  },
  {
    name: "סדנאות",
    path: "/workshops",
  },
  {
    name: "יצירת קשר",
    path: "/contact-me",
  },
];

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router]);

  return (
    <>
      <div className={styles.nav_wrraper} aria-expanded={isMenuOpen}>
        <nav>
          {routes.map((route) => (
            <Link href={route.path} key={route.name}>
              {route.name}
            </Link>
          ))}
        </nav>
        <button onClick={() => setIsMenuOpen(false)}>
          <IoClose />
        </button>
      </div>

      <header className={styles.Header}>
        <button className={styles.MenuBtn} onClick={() => setIsMenuOpen(true)}>
          <CgMenuRight />
          <div className="sr-only">Menu</div>
        </button>
        <Link href="/">
          <img src={"/logo.jpg"} alt="logo" />
        </Link>
      </header>
    </>
  );
}
