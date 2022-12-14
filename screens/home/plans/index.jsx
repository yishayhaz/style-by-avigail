import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";

const plans = [
  {
    title: "סטיילינג אישי - בניית מלתחה חכמה",
    path: "/personal-styling",
    description: `נמאס לך מהמלתחה שלך? את שוברת את הראש בכל בוקר מה ללבוש? את מתעבת קניונים ויציאה לקניות בגדים? ואולי את מאלו שמזמינות אונליין מכל הבא ליד?
    אם את כאן, סימן שאת רוצה שינוי.`,
    thumbnail: "/personal_styling.jpg",
  },
  {
    title: "סדנאות סטיילינג",
    path: "/workshops",
    description: `מעוניינת להזמין סדנת סטיילינג חווייתית ומעשירה?
    הסדנאות שלי מיועדות לבנות ונשים מגיל בת מצווה ועד 120.
    כל סדנא עוברת התאמה אישית בהתאם לקהל היעד ולדרישות הספציפיות של מזמינת הסדנא.`,
    thumbnail: "/workshops.jpeg",
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
              <p>{plan.description}</p>
              <Link className="btn" href={plan.path}>
                עוד פרטים
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
