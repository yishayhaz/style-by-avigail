import Form from "../../../components/form";
import styles from "./style.module.scss";

export default function ContactMe() {
  return (
    <section className={styles.Container}>
      <div>
        <h2>יצירת קשר</h2>
        <p>
          נשמח לשמוע ממך ולענות על כל שאלה שיש לך. אנא מלא את הטופס ונחזור אליך
          בהקדם.
        </p>
      </div>
      <br />
      <br />
      <Form
        form={[
          {
            type: "text",
            name: "name",
            placeholder: "שם",
          },
          {
            type: "text",
            name: "email",
            placeholder: "אימייל",
          },
        ]}
      ></Form>
    </section>
  );
}
