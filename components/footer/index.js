import styles from "./style.module.scss";

import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

import { GrWorkshop } from "react-icons/gr";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { AiOutlineDingtalk } from "react-icons/ai";

export default function Footer() {
  return (
    <section>
      <footer className={styles.Footer}>
        <div className={styles.AboutMe}>
          <h2>אביגיל חזן - סטייליסטית אישית</h2>
          <p>
            קוראים לי אביגיל חזן ואני עוסקת בסטיילינג אישי, בהעברת סדנאות
            סטיילינג לנשים וביצירת תוכן במדיה. בסטיילינג אני מגשימה את החלום
            והתשוקה לעסוק באופנה ו"לשחק
          </p>
        </div>
        <nav className={styles.Menu}>
          <ul>
            <li>
              <a href="#">
                <GrWorkshop />
                סדנאות סטיילינג
              </a>
            </li>
            <li>
              <a href="#">
                <MdOutlinePersonalInjury />
                סטיילינג אישי
              </a>
            </li>
            <li>
              <a href="#">
                <AiOutlineDingtalk />
                יצירת קשר
              </a>
            </li>
          </ul>
        </nav>
        <nav className={styles.Socials}>
          <a href="https://www.instagram.com/avigailhazan/">
            <BsInstagram />
          </a>
          <a href="https://www.facebook.com/avigailhazan">
            <BsFacebook />
          </a>
          <a href="https://www.linkedin.com/in/avigailhazan/">
            <BsWhatsapp />
          </a>
        </nav>
      </footer>
    </section>
  );
}
