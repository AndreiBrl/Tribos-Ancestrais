import styles from "../../app/leitura/home.module.css";
import { Potta_One } from 'next/font/google';

const potta = Potta_One({
    subsets: ['latin'],
    weight: ['400']
})

const Page = () => (


    <div className={styles.sub_container_1} >
      
        <div >

            <h1 className={potta.className}>Capítulo X</h1>
        </div>
        <img className={styles.capaEdit} src="img/cap1/paku_1.png" />

        <p>Perguntou Paku2.</p>
        <p>Abak lançou-lhe um olhar seco, esporou o cavalo, afastandose. Paku o acompanhou.</p>
        <p> — O que foi agora, Paku? — Rebateu, com a voz baixa
            abafada.</p>
        <p>  — Antigamente não era assim, Fakuri errou em aceitá-lo. —
            Os dois trotavam em seus cavalos a frente do grupo em uma
            estrada tortuosa cercada por densa floresta. Naquele momento, o
            sol afinava-se no horizonte e seus raios se esparramavam cedendo
            ao crepúsculo que adentrava a floresta.</p>
        <p>     Um silvo leve e contínuo rasgou o ar, chegando ao ouvido dos
            dois. Lá de trás, Fakuri assobiava, sinal de que era hora de montar
            acampamento.</p>
        <p> — Esqueça o passado. — Cortou Abak, puxando as rédeas até
            o cavalo parar. — Fakuri aceitou trazê-lo. — Completou ele. Paku
            franziu o cenho irreverente e puxou o cavalo para dar meia volta.</p>
        <p>
            O primeiro dia de cavalgada terminava.</p>
        <p>   Enquanto isso, atrás deles estavam Fakuri, Kizuno e Akin.
            Fakuri imponente em seu cavalo marrom ornado com couros
            tingidos. Na lateral direita, o cavalo ostentava a marca da tribo em
            vermelho sangue, mostrando sua posição de líder tribal. A marca </p>




    </div>

);

export default Page;
