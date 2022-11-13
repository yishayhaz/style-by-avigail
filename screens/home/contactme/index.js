import Form from "../../../components/form";
import styles from "./style.module.scss";
import { useState } from "react";

export default function ContactMe() {
  const [form, setForm] = useState([
    {
      type: "text",
      name: "name",
      placeholder: "שם",
    },
    {
      type: "select",
      name: "subject",
      value: "כללי",
      options: [
        { value: "סטיילינג אישי" },
        { value: "סדנאות" },
        { value: "כללי" },
      ],
    },
    {
      type: "textarea",
      name: "message",
      placeholder: "הודעה",
    },
  ]);

  const onSubmit = (form) => {
    const message = `
    היי! אני ${form[0].value} ואני מעוניינת לקבל עוד מידע על ${form[1].value}.
    ${" ".repeat(96)}
    הודעה: ${form[2].value}
    `;

    window.open(`https://wa.me/972546144870?text=${message}`, "_blank");
  };

  return (
    <section className={styles.Container}>
      <div>
        <h2>יצירת קשר</h2>
        <p>
          נשמח לשמוע מכם ולענות על כל שאלה. אנא מלאו את הטופס ונחזור אליכם
          בהקדם.
        </p>
      </div>
      <br />
      <br />
      <Form onSubmit={onSubmit} form={form} setForm={setForm} />
    </section>
  );
}
