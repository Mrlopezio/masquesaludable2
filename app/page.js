"use client"
// import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Bienvenido a MasQueSaludable</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Link href="/tarifa">Tarifa</Link>
        <Link href="/form">Formulario</Link>
        <Link href="/pedido">Formulario de pedido</Link>
      </div>
    </main>
  );
}
