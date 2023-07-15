import * as Sections from "../screens/home";
import Header from "../components/header";
import Footer from "../components/footer";
import reviews from "../public/db/reviews.json";
import styles from "./style.module.scss";

export default function Page() {
  return (
    <div className={styles.Container}>
      <Header />
      <Sections.Hero />
      <Sections.AboutMe />
      <Sections.Plans />
      <Sections.Reviews reviews={reviews["reviews"]} />
      <Sections.IgScreen />
      <Sections.ContactMe />
      <Footer />
    </div>
  );
}
