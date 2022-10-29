import React from "react";
import styles from "./style.module.scss";

export default function Hero() {
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.Content}>
          <h1>
            כאן נמצא הסלוגן <span>המגניב</span> שלי
          </h1>

          <p>
            היי, אני אביגיל וברוכה הבאה לחלקת האינטרנט הקטנה שלי סטיילינג אישי,
            סדנאות, פרויקטים ועוד מינימליזם וסטיילינג עם קצת פוליטיקה
          </p>
          <button>בואי ונכיר!</button>
        </div>
        <div className={styles.Image}></div>
      </div>
      <div style={{ height: "100vh" }}></div>
    </>
  );
}
