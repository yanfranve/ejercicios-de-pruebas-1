import Head from "next/head";
import Image from "next/image";
import Resumen from "../components/ui/Resumen";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Resumen de Venta</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>IPCOM Resumen de Venta</h1>

        <Resumen />
      </main>
    </div>
  );
}
