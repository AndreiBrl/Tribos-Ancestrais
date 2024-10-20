import styles from "./home.module.css";
import Link from 'next/link';



export default function Home() {
  return (
    <>
      <div className={styles.containerApoie}>
        <div className={styles.titulosApoie}>
          <img className={styles.ola} src="/img/ola.png" alt="Ola" />
          <img className={styles.estaCurtindo} src="/img/estaCurtindo.png" alt="Curtindo" />
          <img className={styles.pixelArt} src="/img/pixelArt.png" alt="Pixel Art" />
        </div>

        <img className={styles.apoie} src="/img/apoie.png" alt="Apoie" />
      </div>

      <div className={styles.containerApoieTexto}>
        <Link href="/">

          <img
            style={{ position: "absolute", top: '5vw', zIndex: 5 }}
            className={styles.volta}
            src="/img/setaVolta.png"
            alt="Voltar"

          />
        </Link>
        <img className={styles.barraApoie} src="/img/comoFunciona.png" alt="Como Funciona" />

        <div className={styles.textoApoie}>
          <div className={styles.textoApoie2}>
            <p>Iniciamente, criei a história de &quot;Tribos ancestrais&quot; para ser no formato de livro, totalmente escrita e sem imagens. Um tempo depois, comecei a criar imagens com IA e mudei completamente de ideia. A história começou a fazer muito mais sentido se fosse um mangá do que um livro. Então, decidi que começaria a aprender a desenhar para transformar essa obra em um mangá.</p>
            <p>Se você está curtindo todo o conteúdo e quer ver essa história virar um mangá de verdade, pode fazer uma doação para me ajudar a aprender a desenhar e continuar criando mais!</p>
            <p><b>Obrigado por tudo galera!!</b></p>
            <p><b>PIX:</b> contatoandreibr@gmail.com</p>
            <p>Titular: Andrei Barbuto Romanelli Lopes</p>
          </div>
        </div>
      </div>
    </>
  );
}
