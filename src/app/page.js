import Nav from "@/components/nav";
import styles from "@/styles/home.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.hero}>
        <h1 className={styles.title}>CRLS Investment Club</h1>
        <a className={styles.subtitle} href="https://docs.google.com/forms/d/e/1FAIpQLSfjblcwqPDct85ekPHnXPI4L4DA2P3jWPPNX6KQAj4U14iNLQ/viewform?usp=sf_link" target="_blank">Join Now</a>
        {/* <p>
          wednesdays at 8 - room 4401
          - 1st meeting 9/18
          - Boost your financial literacy
          - Learn about investing
          - Stock Trading Competiions
          - Market discussions and analysis
          - and snacks
        </p> */}
      </main>
    </>
  );
}
