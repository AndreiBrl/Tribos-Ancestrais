'use client';
import Image from "next/image";
import styles from "./home.module.css";
import { useEffect, useState } from 'react';
import { Potta_One } from 'next/font/google';

const potta = Potta_One({
  subsets: ['latin'],
  weight: ['400']
})

export default function Home() {


  const [menu, setMenu] = useState(false)

  const [Component, setComponent] = useState(null);


  const [pagina, setPagina] = useState(0)


  const incrementarPagina = () => {
    setPagina(prevPagina => prevPagina + 1);
  };
  const decrementarPagina = () => {
    setPagina(prevPagina => prevPagina - 1);
  };

  useEffect(() => {

    import('../../components/paginas/pag_'+pagina).then((module) => {
      setComponent(() => module.default);
    });


  }, [pagina])





  return (
    <div className={styles.container}>
      <div className={styles.aviso}>
        <h1> Modo Leitura disponível apenas para formato Celular</h1>

      </div>

      <div className={menu ? styles.menuLeituraAberto : styles.menuLeituraFechado}  >

        <Image

          src="/img/galhoSeco.png"
          width={100}
          height={150}
          loading='lazy'
          quality={100}
          className={menu ? styles.galhoOff : styles.galhoOn}
          onTouchEnd={() => setMenu(true)}

        >

        </Image>

        <img
          src="/img/galhoEnergia2.png"
          width={120}
          height={180}
          className={menu ? styles.galhoOn : styles.galhoOff}
          onTouchEnd={() => setMenu(false)}
        >
        </img>
        <div className={`${styles.capitulos} ${menu ? styles.ativado : styles.desativado}`}>

          <div>
            <h1>I</h1>
            <h2>Um sonho impossível</h2>
          </div>
          <div>
            <h1>I</h1>
            <h2>Um sonho impossível</h2>
          </div>
          <div>
            <h1>I</h1>
            <h2>Um sonho impossível</h2>
          </div>
          <div>
            <h1>I</h1>
            <h2>Um sonho impossível</h2>
          </div>
          <div>
            <h1>I</h1>
            <h2>Um sonho impossível</h2>
          </div>
          <div>
            <h1>I</h1>
            <h2>Um sonho impossível</h2>
          </div>
          <div>
            <h1>I</h1>
            <h2>Um sonho impossível</h2>
          </div>
          <div>
            <h1>I</h1>
            <h2>Um sonho impossível</h2>
          </div>
          <div>
            <h1>I</h1>
            <h2>Um sonho impossível</h2>
          </div>
          <div>
            <h1>I</h1>
            <h2>Um sonho impossível</h2>
          </div>
          <div>
            <h1>I</h1>
            <h2>Um sonho impossível</h2>
          </div>
          <div>
            <h1>I</h1>
            <h2>Um sonho impossível</h2>
          </div>
        </div>

        {/* <Image
          src="/img/galhoMenuFinal2.png"
          width={100}
          height={150}
          loading='lazy'
          quality={100}
          className={styles.galhoMenuFinal}

        ></Image> */}
        <img

          src="/img/galhoMenuFinal2.png"

          className={styles.galhoMenuFinal}
        >


        </img>

      </div>
      <div className={styles.controlaPaginas
      }>
        <h1 onTouchEnd={decrementarPagina}>-</h1>
        <input type="number" value={pagina} onChange={(e)=>setPagina(e.target.value)}  />
        <h1 onTouchEnd={incrementarPagina}>+</h1>
      </div>
      <div onTouchEnd={() => setMenu(false)}>
        {Component ? <Component menu={menu} /> : ''}
      </div>

    </div>
  );
}
