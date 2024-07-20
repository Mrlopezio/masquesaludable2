import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Bienvenido a MasQueSaludable</h1>
      <Link href="/tarifa">Ir a la tarifa</Link>
      <Link href="/form">Ir al formulario</Link>
    </main>
  );
}
