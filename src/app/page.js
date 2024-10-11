import Image from "next/image";
import styles from "./home.module.css";
import Link from 'next/link';


export default function Home() {
  return (
    <div className={styles.containerHome}>
      <div className={styles.vilage}>



        <img className={styles.mDesk} src="img/tituloHome.png" />

      </div>

      <div className={styles.menu}>



        <img className={styles.mDesk} src="img/menuDesk.png" />
        <img className={styles.palavraMenu} src="img/palavraMenu.png" />
        <img className={styles.mMobile} src="img/menu.png" />
        <Link  href="/leitura">
          <img className={styles.livroAkin} src="img/livroAkin.png" />
        </Link>
        <img className={styles.homenzin} src="img/homenzin.png" />
        <img className={styles.saco} src="img/saco.png" />

        {/* <h1 className="emBreve">EM BREVE</h1> */}

        {/* div de clica em cima da imagem */}
        {/* <div onClick={() => { navega('/Sobre') }} className="about"></div>
        <div onClick={() => { navega('/Leitura') }} className="book"></div> 
        <div className="catarse"></div>
        */}
      </div>
    </div>
  );
}
