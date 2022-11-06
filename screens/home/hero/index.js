import React from "react";
import styles from "./style.module.scss";

export default function Hero() {
  return (
    <>
      <section className={styles.Container}>
        <div className={styles.Content}>
          <h1>
            הדרך למלתחה חכמה <span>ומשמחת</span> מתחילה כאן
          </h1>

          <p>
            היי, אני אביגיל וברוכה הבאה לחלקת האינטרנט הקטנה שלי סטיילינג אישי,
            סדנאות, פרויקטים ועוד מינימליזם וסטיילינג עם קצת פוליטיקה
          </p>
          <button className="btn">בואי ונכיר!</button>
        </div>
        <div className={styles.Image}></div>
      </section>
    </>
  );
}
