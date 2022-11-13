import React from "react";
import styles from "./style.module.scss";
import Form from "../../components/form";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { ContactMe } from "../../screens/home";

export default function Page() {
  return (
    <>
      <Header />
      <ContactMe />
      <Footer />
    </>
  );
}
