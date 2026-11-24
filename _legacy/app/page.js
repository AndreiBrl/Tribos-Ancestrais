import Image from "next/image";
import styles from "./home.module.css";
import Link from 'next/link';


export default function Home() {
  return (
    <div className={styles.containerHome}>
      <img  className={styles.backHome} src="/img/backHome.png" alt="Menu Desk"  ></img>
      <div className={styles.vilage}>



        <img className={styles.mDesk} src="img/tituloHome.png" />

      </div>

      <div className={styles.menu}>
        <img className={styles.mDesk} src="/img/menuDesk.png"></img>


        <Image width={100} height={100} className={styles.palavraMenu} src="/img/palavraMenu.png" alt="Palavra Menu" quality={100} />
        
        {/* <Image width={100} height={100} className={styles.mMobile} src="/img/menu.png" alt="Menu Mobile" quality={100} /> */}
        <img  src="/img/menu.png" className={styles.mMobile}>
        
        </img>
        <Link href="/leitura">
          <Image width={100} height={100} className={styles.livroAkin} src="/img/livroAkin.png" alt="Livro Akin" quality={100} />
        </Link>
        <Link href="/sobre">
          <Image width={100} height={100} className={styles.homenzin} src="/img/homenzin.png" alt="Homenzinho" quality={100} />
        </Link>
        <Link href="/apoie">
          <Image width={100} height={100} className={styles.saco} src="/img/saco.png" alt="Saco" quality={100} />
        </Link>

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
