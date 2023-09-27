import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import { AiOutlineGift } from "react-icons/ai";

const plans = [
  {
    title: "פגישת ייעוץ",
    label: "המתנה המושלמת",
    path: "#contact",
    description: `בפגישת ייעוץ של שעה וחצי, תוכלי לקבל כלים לאבחון מבנה הגוף שלך, התאמת צבעים, סגנונות מתאימים, טרנדים עדכניים ועוד.
    בסיום הפגישה, תצאי עם ידע, השראה ורשימת פריטים שמותאמת אישית לך!`,
    thumbnail: "/coffee.jpeg",
  },
  {
    title: "סטיילינג אישי - בניית מלתחה חכמה",
    path: "/personal-styling",
    description: `נמאס לך מהמלתחה שלך? את שוברת את הראש בכל בוקר מה ללבוש? את מתעבת קניונים ויציאה לקניות בגדים? ואולי את מאלו שמזמינות אונליין מכל הבא ליד?
    אם את כאן, סימן שאת רוצה שינוי.`,
    thumbnail: "/me.jpg",
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
              {plan.label && (
                <div className={styles.plan__content__label}>
                  <span>{plan.label}</span> <AiOutlineGift />
                </div>
              )}
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
