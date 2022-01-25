import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Third from "./Third";
import First from "./First";
import Faq from "./Faq";
import Legendaries from "./Legendaries";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <First />

      <Third />

      <Legendaries />

      <Faq />
    </div>
  );
}
