import * as Sections from "../screens/home";
import Header from "../components/header";
import styles from "./style.module.scss";

// export default function Page() {
//   return (
//     <div className={styles.Container}>
//       <Header />
//       <Sections.Hero />
//       <Sections.AboutMe />
//       {/* <Sections.Plans /> */}
//     </div>
//   );`
// }
export default function Page() {
  return (
    <div className={styles.Container}>
      <Header />
      <Sections.Hero />
      <Sections.AboutMe />
      <Sections.Plans />
    </div>
  );
}
