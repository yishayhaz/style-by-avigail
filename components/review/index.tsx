import React from "react";
import styles from "./style.module.scss";
import { FaQuoteLeft } from "react-icons/fa";

export type TReview = {
  name: string;
  label: string;
  message: string;
};

export function Review({ name, label, message }: TReview) {
  return (
    <div className={styles.review}>
      <FaQuoteLeft className={styles.quote} />
      <b>{name}</b>
      <span>{label}</span>
      <p>{message}</p>
    </div>
  );
}
