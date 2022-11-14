import React from "react";
import styles from "./style.module.scss";

export default function Hero() {
  return (
    <>
      <section className={styles.Container}>
        <div className={styles.Content}>
          <h1>
            הדלת למלתחה <span>חכמה</span> נפתחת כאן
          </h1>

          <p>
            הי, ברוכה הבאה!
            <br />
            כאן תמצאי כל מה שאת צריכה כדי להתלבש נכון ולהרגיש במיטבך. מלתחה
            חכמה, סטיילינג אישי וסדנאות סטיילינג לכל גיל.
          </p>
          <a className="btn" href="#aboutme">
            בואי ונכיר!
          </a>
        </div>
        <div className={styles.Image}></div>
      </section>
    </>
  );
}
