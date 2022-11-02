import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";

const plans = [
  {
    title: "כותרת לסדנה דוגמה",
    description:
      "תיאור לסדנה דוגמה, כאן אני מתארת מה יש בסדנה, מה היא עושה וכו",
    thumbnail: "https://picsum.photos/500/500",
  },
];

export default function Plans() {
  return (
    <div className={styles.Container}>
      {plans.map((plan, index) => (
        <div key={index} className={styles.plan}>
          <div className={styles.plan__thumbnail}>
            <img src={plan.thumbnail} alt={plan.title} />
          </div>
          <div className={styles.plan__content}>
            <h2>{plan.title}</h2>
            <p>{plan.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
