import styles from "./style.module.scss";

import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

import { GrWorkshop } from "react-icons/gr";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { AiOutlineDingtalk } from "react-icons/ai";

export default function Footer() {
  return (
    <section>
      <footer className={styles.Footer}>
        <div className={styles.AboutMe}>
          <h2>אביגיל חזן - סטייליסטית אישית</h2>
          <p>הדלת למלתחה חכמה ומשמחת נפתחת כאן</p>
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
              <a href="/contact-me">
                <AiOutlineDingtalk />
                יצירת קשר
              </a>
            </li>
          </ul>
        </nav>
        <nav className={styles.Socials}>
          <a href="https://www.instagram.com/avigailhaz/" target="_blank">
            <BsInstagram />
            <div className="sr-only">Instagram</div>
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=972544661543"
            target="_blank"
          >
            <BsWhatsapp />
            <div className="sr-only">WhatsApp</div>
          </a>
        </nav>
      </footer>
    </section>
  );
}
