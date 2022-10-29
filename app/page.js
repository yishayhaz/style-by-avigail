import * as Sections from "@/screens/home";
import Header from "@/components/header";

export default async function Page() {
  return (
    <>
      <Header />
      <Sections.Hero />
    </>
  );
}
