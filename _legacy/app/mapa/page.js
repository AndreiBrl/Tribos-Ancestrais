'use client';

import styles from "./home.module.css";
import Link from "next/link";


export default function Home() {




  return (
    <>
      <div className={styles.containerMapa}>

        <h1 className={styles.titulo}>Mapa</h1>
        <Link href='/leitura'>
          <img

            className={styles.volta}
            src="/img/setaVolta.png" />
        </Link>
        <img className={styles.mapa} src="/img/mapOri.jpg"></img>
      </div>
    </>

  );
}
