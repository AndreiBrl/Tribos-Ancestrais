'use client';
import Image from "next/image";
import styles from "./home.module.css";
import { useEffect, useState } from 'react';
// import { Potta_One } from 'next/font/google';
import { motion } from 'framer-motion';
import Link from "next/link";

// const potta = Potta_One({
//   subsets: ['latin'],
//   weight: ['400']
// })

export default function Home() {


  const [menu, setMenu] = useState(false)
  const [Component, setComponent] = useState(null);
  const [pagina, setPagina] = useState(0);
  const [capitulo, setCapitulo] = useState({ numero: 'I', titulo: 'O Eco do Irmão Perdido' });
  const [primeiraRender, setPrimeiraRender] = useState(true);



  const incrementarPagina = () => {
    if (pagina < 6) {
      setPagina(prevPagina => prevPagina + 1);
    }

  };
  const decrementarPagina = () => {
    if (pagina > 0) {

      setPagina(prevPagina => prevPagina - 1);
    }
  };

  useEffect(() => {

    import('../../components/paginas/pag_' + pagina + '').then((module) => {
      setComponent(() => module.default);
    });
    if (primeiraRender) {
      setPrimeiraRender(false)
    }
    else {

      localStorage.setItem('pagina', pagina);
    }
    if (pagina === 0) {
      setCapitulo({ numero: '', titulo: '' });
    } else if (pagina > 0 && pagina <= 6) {
      setCapitulo({ numero: 'I', titulo: 'O Eco do Irmão Perdido' });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });

  }, [pagina])

  useEffect(() => {
    const paginaSalva = localStorage.getItem('pagina');
    setPagina(paginaSalva ? Number(paginaSalva) : 1);
  }, []);

  const handleCapituloChange = (numero, titulo) => {
    setCapitulo({ numero, titulo });
    if (numero == 'I') {
      setPagina(Number(1))
    }
    setMenu(false);

  };



  return (
    <div className={styles.container}>
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
            <h1 onClick={() => handleCapituloChange('I', 'O Eco do irmão Perdido')}>I</h1>
            <h2 onClick={() => handleCapituloChange('I', 'O Eco do irmão Perdido')}>O Eco do Irmão Perdido</h2>
          </div>
          <div>
            <h1  /* onClick={() => handleCapituloChange('II', 'A Dor que Desperta')} */>II</h1>
            <h2  /* onClick={() => handleCapituloChange('II', 'A Dor que Desperta')} */>A Dor que Desperta</h2>
          </div>
          <div>
            <h1  /* onClick={() => handleCapituloChange('III', 'Um Banquete para Porcos')} */>III</h1>
            <h2  /* onClick={() => handleCapituloChange('III', 'Um Banquete para Porcos')} */>Um Banquete para Porcos</h2>
          </div>
          <div>
            <h1  /* onClick={() => handleCapituloChange('IV', 'O Caminho Revelado')} */>IV</h1>
            <h2  /* onClick={() => handleCapituloChange('IV', 'O Caminho Revelado')} */>O Caminho Revelado</h2>
          </div>
          <div>
            <h1  /* onClick={() => handleCapituloChange('V', 'A Cabana na Clareira')} */>V</h1>
            <h2  /* onClick={() => handleCapituloChange('V', 'A Cabana na Clareira')} */>A Cabana na Clareira</h2>
          </div>
          <div>
            <h1  /* onClick={() => handleCapituloChange('VI', 'Sangue e Sacrifício')} */>VI</h1>
            <h2  /* onClick={() => handleCapituloChange('VI', 'Sangue e Sacrifício')} */>Sangue e Sacrifício</h2>
          </div>
          <div>
            <h1  /* onClick={() => handleCapituloChange('VII', 'Xa’ru Xaruna')} */>VII</h1>
            <h2  /* onClick={() => handleCapituloChange('VII', 'Xa’ru Xaruna')} */>Xa’ru Xaruna</h2>
          </div>
          <div>
            <h1  /* onClick={() => handleCapituloChange('VIII', 'Um Sonho Impossível')} */>VIII</h1>
            <h2  /* onClick={() => handleCapituloChange('VIII', 'Um Sonho Impossível')} */>Um Sonho Impossível</h2>
          </div>
          <div>
            <h1  /* onClick={() => handleCapituloChange('IX', 'Obsidiana Vermelha')} */>IX</h1>
            <h2  /* onClick={() => handleCapituloChange('IX', 'Obsidiana Vermelha')} */>Obsidiana Vermelha</h2>
          </div>
          <div>
            <h1  /* onClick={() => handleCapituloChange('X', 'Torokar')} */>X</h1>
            <h2  /* onClick={() => handleCapituloChange('X', 'Torokar')} */>Torokar</h2>
          </div>
          <div>
            <h1  /* onClick={() => handleCapituloChange('XI', 'O Verdadeiro Propósito')} */>XI</h1>
            <h2  /* onClick={() => handleCapituloChange('XI', 'O Verdadeiro Propósito')} */>O Verdadeiro Propósito</h2>
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
      <div className={styles.aviso}>
        <h1> Modo Leitura disponível apenas para formato Celular</h1>

      </div>


      <Link href="/" className={styles.voltar} style={{
        filter: menu ? 'blur(10px)' : 'none',
      }}>

        <h1>Voltar</h1>

      </Link>
      <div className={styles.controlaPaginas} style={{
        filter: menu ? 'blur(10px)' : 'none',
      }}>
        <Image src='/img/setaDireita.png' loading='lazy'
          width={30}
          height={30}
          onTouchEnd={decrementarPagina}
          style={{ transform: 'rotate(180deg)' }}
        >

        </Image>
        <input type="number" value={pagina} onChange={(e) => setPagina(Number(e.target.value))} />
        <Image src='/img/setaDireita.png' loading='lazy'
          width={30}
          height={30}
          onTouchEnd={incrementarPagina}
          style={{

            filter: 'grayscale(100%)'
          }}

        >

        </Image>

      </div>
      <div className={styles.conteudoLeitura} onTouchEnd={() => setMenu(false)} style={{
        filter: menu ? 'blur(10px)' : 'none',
      }}>
        <div>

          <h1 style={{
            fontSize: pagina != 1 || 0 ? '5vw' : '12vw'
          }}>{capitulo.numero}</h1>
          <h2 style={{
            fontSize: pagina != 1 || 0 ? '5vw' : '10vw'
          }}>{capitulo.titulo}</h2>
        </div>
        <motion.div

          drag="x" // Detecta o arrastar horizontalmente
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(event, info) => {
            if (info.offset.x < -100) {
              setPagina(prevPagina => prevPagina + 1);
            } else if (info.offset.x > 100) {
              setPagina(prevPagina => prevPagina - 1);
            }

          }}
        >

          {Component ? <Component /> : ''}
        </motion.div>
      </div>



    </div>
  );
}
