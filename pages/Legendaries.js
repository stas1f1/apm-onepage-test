import Image from "next/image";
import styles from "../styles/Legendaries.module.css";
import LEG_BR from "../public/legendaries/leg-br.png";
import DOOM from "../public/legendaries/doom.png";
import KAN from "../public/legendaries/kan.png";
import ZIK from "../public/legendaries/zik.png";
import VIG from "../public/legendaries/vig.png";
import JOK from "../public/legendaries/jok.png";
import MET from "../public/legendaries/met.png";
import SNA from "../public/legendaries/sna.png";
import AR from "../public/legendaries/ar.png";
import PBC from "../public/legendaries/pbc.png";
import QUE from "../public/legendaries/vop.png";
// import HVOST_GRADIENT from "../public/legendaries/hvost-gradient.png";

export default function Legendaries() {
  return (
    <div className={styles.legendariesContainer} id="legendaries">
      <div className={styles.legendariesLogo}>
        <Image src={LEG_BR} width={1042} height={168} />
      </div>
      <div className={styles.legendariesDesk}>
        <div className={styles.deskRow1}>
          <div className={styles.legImg}>
            <Image src={PBC} width={350} height={393} />
          </div>

          <div className={styles.legImg}>
            <Image src={DOOM} width={350} height={393} />
          </div>

          <div className={styles.legImg}>
            <Image src={QUE} width={350} height={393} />
          </div>
        </div>
        <div className={styles.deskRow2}>
          <div className={styles.legImg}>
            <Image src={QUE} width={350} height={393} />
          </div>
          <div className={styles.legImg}>
            <Image src={QUE} width={350} height={393} />
          </div>
        </div>
        <div className={styles.deskRow3}>
          <div className={styles.legImg}>
            <Image src={QUE} width={350} height={393} />
          </div>
          <div className={styles.legImg}>
            <Image src={QUE} width={350} height={393} />
          </div>
          <div className={styles.legImg}>
            <Image src={QUE} width={350} height={393} />
          </div>
        </div>
      </div>
      <div className={styles.hvost}>
        <div className={styles.legendariesText}>
          <p className={styles.legTextBasic}>and more and more and more</p>
          <p className={styles.legTextBlack}>
            We love culture and always work for it.
          </p>
        </div>
      </div>
    </div>
  );
}
