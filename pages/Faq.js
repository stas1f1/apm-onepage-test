import Image from "next/image";
import styles from "../styles/Faq.module.css";
import CLOUDS from "../public/faq/clouds.png";
import FAQ from "../public/faq/FAQ.png";
import LOGO_T_BR from "../public/faq/logo_t_br.png";
import MICRO_DUCK from "../public/faq/micro-duck.png";

export default function Faq() {
  return (
    <div id="faq">
      <div className={styles.faqClouds}>
        <div className={styles.triangles}></div>

        <div className={styles.cloudsImg}>
          <Image src={CLOUDS} layout="responsive" />
        </div>
      </div>
      <div className={styles.faqContainer}>
        <div className={styles.faqLogo}>
          <Image src={FAQ} />
        </div>
        <div className={styles.faqText}>
          <div className={styles.faqTextBlack}>
            q: okay so what’s this project about?
          </div>
          <div className={styles.faqTextBasic}>
            a: check our our manifestoe to learn more about the littles humble
            beginnings
          </div>
          <div className={styles.faqTextBlack}>q: wen mint?</div>
          <div className={styles.faqTextBasic}>
            a: our littles will be starting their adventures on friday, nov 25
            <br></br>
            whitelist mint begins on Thurs, Nov 25 at 6PM PST (24 hour mint
            window)<br></br>
            public mint begins on Fri, Nov 26 at 6PM PST<br></br>
            (you can mint 2 with WL and 2 more via public sale)
          </div>
          <div className={styles.faqTextBlack}>q: how much?</div>
          <div className={styles.faqTextBasic}>a: 0.125E</div>
          <div className={styles.faqTextBlack}>q: how many can we mint?</div>
          <div className={styles.faqTextBasic}>
            a: 2 per transaction, 4 max per wallet
          </div>
          <div className={styles.faqTextBlack}>
            q: what chain will the littles be launched on?
          </div>
          <div className={styles.faqTextBasic}>
            a: we live on ethereum as a ERC-721 token standard
          </div>
          <div className={styles.faqTextBlack}>
            q: where can i buy the littles?
          </div>
          <div className={styles.faqTextBasic}>
            a: for the initial release, you will be able to mint the littles
            here on this website.<br></br>
            once those sell out, you will be able to purchase the littles on the
            secondary market on OpenSea.io
          </div>
          <div className={styles.faqTextBlack}>
            q: can I mint from contract?
          </div>
          <div className={styles.faqTextBasic}>
            a: our littles will only be available to mint directly on our
            website.<br></br>
            after initial mint, contract will be made available for review.
          </div>
          <div className={styles.footer}>
            <div className={styles.logoTBr}>
              <Image src={LOGO_T_BR} width={185} height={115} />
            </div>
            <div className={styles.footerText}>
              ©powered by solana, vercelapp, APEROLMAMI ducks club team and
              friends
              <br></br>
              2020-2022
            </div>
            <div className={styles.microDuck}>
              <Image src={MICRO_DUCK} width={75} height={73} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
