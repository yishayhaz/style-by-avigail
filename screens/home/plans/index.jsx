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
  {
    title: "כותרת לסדנה דוגמה",
    description:
      "תיאור לסדנה דוגמה, כאן אני מתארת מה יש בסדנה, מה היא עושה וכו",
    thumbnail: "https://picsum.photos/500/500",
  },
];

export default function Plans() {
  return (
    <section className={styles.Container}>
      {plans.map((plan, index) => (
        <div key={index} className={styles.plan_wrraper}>
          <div className={styles.plan}>
            <div
              className={styles.plan__thumbnail}
              style={{
                backgroundImage: `url(${plan.thumbnail})`,
              }}
            ></div>
            <div className={styles.plan__content}>
              <h2>{plan.title}</h2>
              <p>
                {plan.description.slice(20)}
                <br />
                {plan.description.slice(30)}
                <br />
                {plan.description.slice(15)}
                <br />
                {plan.description}
                <br />
              </p>
              <button className="btn">עוד פרטים</button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
