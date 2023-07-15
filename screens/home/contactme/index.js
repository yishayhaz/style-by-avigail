import Form from "../../../components/form";
import styles from "./style.module.scss";
import { useState } from "react";

export default function ContactMe({ subject = "" }) {
  const [form, setForm] = useState([
    {
      type: "text",
      name: "name",
      placeholder: "שם",
    },
    {
      type: "select",
      name: "subject",
      value: subject || "כללי",
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
    היי! אני ${form[0].value || "אנונימית"} ואני מעוניינת לקבל עוד מידע על ${
      form[1].value
    }.
    ${" ".repeat(96)}
    הודעה: ${form[2].value || "<הודעה ריקה>"}
    `;

    window.open(`https://wa.me/972544661543?text=${message}`, "_blank");
  };

  return (
    <section className={styles.Container} id="contact">
      <div>
        <h2>יצירת קשר</h2>
        <p>מעוניינת לשמוע עוד? מלאי את הפרטים ואחזור אלייך בהקדם!</p>
      </div>
      <br />
      <br />
      <Form onSubmit={onSubmit} form={form} setForm={setForm} />
    </section>
  );
}
