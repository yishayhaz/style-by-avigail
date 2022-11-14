import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "./style.module.scss";
import ReactMarkdown from "react-markdown";

const plans = {
  workshops: {
    thumbnail: "/me.jpg",
    title: `סדנאות`,
    description: `
סטיילינג אישי מורכב מכמה חלקים ואפשרויות:

1. סטיילינג אישי מלא 
2. סטיילינג אישי חלקי – ארון
3. סטיילינג אישי חלקי – קניות
\\
ייעוץ סטיילינג מלא:

שלב ראשון-פגישת ייעוץ בבית הלקוחה
אורך מפגש – כ-3 שעות

**עוברים על הארון וממיינים-מה נשאר, מה נתרם ומה לא ברור…**

ואז מתחילים למדוד ואני עוזרת להרכיב לוקים שונים ממה שיש ורק בסוף יוצרים ביחד רשימה מה חסר
שלב שני-
פגישה בקניון וסבב רכישות מותאם על פי הרשימה.


קיימת אפשרות של תוספת מפגש שלישי: יצירת לוקים מהמלתחה החדשה אחרי המיון והקניות.
\\
ייעוץ סטיילינג חלקי:
בחרי את החלק שהכי מתאים לצרכייך כרגע:
מיון ארון או סבב קניות?

אורך מפגש: כ-3 שעות
    `,
  },
  "personal-styling": {
    thumbnail: "/me.jpg",
    title: "סטיילינג אישי",
    description: `
מה בסדנאות?
הכרות עם מבני הגוף (מותאם גיל)
הכרות עם גלגל הצבעים
סקירת טרנדים עדכניים לעונה הנוכחית בהתאמה מקסימלית לכללי הצניעות
טיפים לבניית מלתחה חכמה
עקרונות להתאמת מטפחות לבגדים
אשליה אופטית
ועוד

המשתתפות יוצאות עם חוויה, יידע וכלים שיעזרו להן להתלבש נכון יותר ועם מזכרת קטנה ושימושית.

אורך סדנא: שעה – שעה וחצי

מחיר מיוחד לאולפנות ותיכונים!
    `,
  },
};

export const getServerSideProps = (ctx) => {
  const plan = plans[ctx.params.plan];

  if (!plan) {
    return {
      notFound: true,
    };
  }
  return { props: { plan } };
};

export default function Plan({ plan }) {
  return (
    <>
      <Header />
      <section className={styles.Container}>
        <article>
          <center>
            <img src={plan.thumbnail} alt={plan.title} />
            <h1>{plan.title}</h1>
          </center>
          <ReactMarkdown>{plan.description}</ReactMarkdown>
        </article>

        <div className={styles.BtnContainer}>
          <a href="/contact-me" className="btn">
            יצירת קשר
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
