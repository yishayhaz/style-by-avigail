import styles from "./style.module.scss";
import { BubleSvg } from "../../../svgs";

export default function AboutMe() {
  return (
    <section className={styles.Container}>
      <article>
        <img src="/img_hero.jpeg" alt="Hero" />
        <h2>סטייליסטית אישית</h2>
        <p>
          {" "}
          קוראים לי אביגיל חזן ואני עוסקת בסטיילינג אישי, בהעברת סדנאות סטיילינג
          לנשים וביצירת תוכן במדיה.
          <br />
          בסטיילינג אני מגשימה את החלום והתשוקה לעסוק באופנה ו"לשחק" בבגדים עם
          הרובד העמוק של מפגש עם נשים ועם השאלה:
          <b>האם אני אוהבת את מה שאני רואה במראה?</b>
          המטרה שלי היא לתת לך ולכמה שיותר נשים את הביטחון והכלים לדעת להתלבש
          נכון, לקנות נכון, ואיך לבנות מלתחה חכמה ומשמחת שתשרת אותך ותעבוד
          בשבילך (ולא להיפך).
          <br />
          <br />
          החזון שלי הוא לגרום לשינוי בתרבות הצריכה (יותר קלאסיקה, פחות טרנדים)
          ובתרבות ה"העתק-הדבק" (עצרתי לחשוב אם זה בכלל מתאים לי?), להצליח להטמיע
          את המסרים שמנחים אותי ולעזור לנערות ונשים להרגיש בטוחות בעצמן בכל גיל,
          עיסוק, סגנון ואורח חיים. החלטת שהגיע הזמן להשקיע בעצמך ולקבל ייעוץ
          סטיילינג אישי מסטייליסטית מקצועית? רוצה להתפנק או לפנק בסדנא חווייתית,
          מעשירה ומעצימה?
        </p>
        <br />
        <div className={styles.welcome}>
          <BubleSvg />
          <span>!Welcome</span>
        </div>
      </article>
    </section>
  );
  return (
    <section className={styles.Container}>
      <article>
        <img src="/img_hero.jpeg" alt="Hero" />
        <h2>סטייליסטית אישית</h2>
        <p>
          קוראים לי אביגיל חזן ואני עוסקת בסטיילינג אישי, בהעברת סדנאות סטיילינג
          לנשים וביצירת תוכן במדיה.
          <br />
          בסטיילינג אני מגשימה את החלום והתשוקה לעסוק באופנה ו"לשחק" בבגדים עם
          הרובד העמוק של מפגש עם נשים ועם השאלה:
          <h3>האם אני אוהבת את מה שאני רואה במראה?</h3>
          המטרה שלי היא לתת לך ולכמה שיותר נשים את הביטחון והכלים לדעת להתלבש
          נכון, לקנות נכון, ואיך לבנות מלתחה חכמה ומשמחת שתשרת אותך ותעבוד
          בשבילך (ולא להיפך).
          <br />
          <br />
          החזון שלי הוא לגרום לשינוי בתרבות הצריכה (יותר קלאסיקה, פחות טרנדים)
          ובתרבות ה"העתק-הדבק" (עצרתי לחשוב אם זה בכלל מתאים לי?), להצליח להטמיע
          את המסרים שמנחים אותי ולעזור לנערות ונשים להרגיש בטוחות בעצמן בכל גיל,
          עיסוק, סגנון ואורח חיים. החלטת שהגיע הזמן להשקיע בעצמך ולקבל ייעוץ
          סטיילינג אישי מסטייליסטית מקצועית? רוצה להתפנק או לפנק בסדנא חווייתית,
          מעשירה ומעצימה?
          <br />
          <br />
          <div className={styles.welcome}>
            <BubleSvg />
            <span>!Welcome</span>
          </div>
        </p>
      </article>
    </section>
  );
}
