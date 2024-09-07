import Nav from "@/components/nav";
import styles from "@/styles/home.module.css";

export default function Home() {
  return (
    <>
      <Nav slideDown={true}/>
      <main className={styles.hero}>
        <h1 className={styles.title}>CRLS Investment Club</h1>
        <a className={styles.subtitle} href="/join">Join Now</a>
      </main>
    </>
  );
}
