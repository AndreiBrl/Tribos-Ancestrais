'use client';
import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";


export default function Home() {




  return (
    <>
      <div className={styles.containerSobre}>
        <div className={styles.titulosSobre}>
          <img className={styles.autor} src="/img/autor-idealizador.png" />
          <img className={styles.nome} src="/img/nomeAbout.png" />
          <img className={styles.perfil} src="/img/perfil.png" />
        </div>
        <div className={styles.redesSociais}>
          <a href='https://www.instagram.com/tribos_ancestrais?igsh=MWwybzNtZ3dyd2I5dQ==' target='blank'>
            <img className={styles.insta} src="/img/insta.png" />
          </a>
          <img className={styles.gmail} src="/img/gmail.png" />
        </div>
      </div>
      <div className={styles.containerSobreTexto}>
        <Link href='/'>
          <img
            style={{ position: "absolute", top: '5vw', zIndex: 5 }}
            className={styles.volta}
            src="/img/setaVolta.png"

          />
        </Link>
        <img className={styles.barraSobre} src="/img/barraSobre.png" />
        <div className={styles.textoSobre}>
          <div className={styles.textoSobre2}>
            <p>Olá! Meu nome é Andrei, e vou contar aqui como me tornei apaixonado por histórias! Tudo começou com os desenhos animados que assistia todos os dias e as idas ao cinema com meus pais. Cresci influenciado pelo Goku de DBZ e por inúmeros filmes de Hollywood. Hoje, sou um consumidor de histórias de todos os tipos, como livros, mangás, séries e filmes. Histórias sempre me ajudaram a entender melhor o mundo, e por isso as admiro. </p>
            <p>Nunca me canso de assistir a um personagem brilhando na tela depois de ter batalhado tanto. É sempre inspirador absorver uma boa história.</p>
            <p>Atualmente, estudo para me tornar programador e, nas horas vagas, me dedico a escrever minha primeira narrativa, &quot;Tribos Ancestrais&quot;. A história nasceu de muitas caminhadas pelas ruas com o fone de ouvido no máximo e aquela boa música de ação. Não sei ao certo quando comecei a querer escrever, e mesmo que soubesse, no início, minhas ideias eram apenas personagens malucos pulando por aí. Comecei a escrever os primeiros capítulos de &quot;Tribos Ancestrais&quot; durante a pandemia, enquanto fazia alguns cursos de criação literária, juntamente com muitos vídeos do YouTube. Todo esse processo sempre foi divertido para mim, e, apesar das dificuldades, é isso que me move até hoje!  </p>
            <p><b>Bom... é isso. Espero que gostem de &quot;Tribos Ancestrais&quot;!</b></p>
          </div>
        </div>
      </div>
    </>

  );
}
