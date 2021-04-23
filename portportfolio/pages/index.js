import Head from "next/head";
import Footer from "../comps/footer";
import Navbar from "../comps/navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link"

export default function Home() {
  return (
    <>
    <Head>
      <title>Chris Wing | Home</title>
      <meta name="keywords" content="Chris Wing"/>
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed
        eleifend leo, sit amet ultrices eros. Donec at ipsum eget purus aliquam
        sagittis. Duis id lectus sed ligula interdum ultrices.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed
        eleifend leo, sit amet ultrices eros. Donec at ipsum eget purus aliquam
        sagittis. Duis id lectus sed ligula interdum ultrices.
      </p>
      <Link href="/projects"><a className={styles.btn}>Projects</a></Link>
    </div>
    </>
  );
}
