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
            q: OK, WHAT IS APEROLMAMI DUCK CLUB?
          </div>
          <div className={styles.faqTextBasic}>
            a: Aperolmami Ducks Club is a generative NFT collection of 654 goofy
            duck NFTs and a matching amount of Aperolmami Duck Duck sneakers
            that will be sent to every holder of our ducks.
          </div>
          <div className={styles.faqTextBlack}>q: Wait, to everyone?</div>
          <div className={styles.faqTextBasic}>
            a: Yes! You may have heard of awesome 1/1 custom projects on
            etherium by guys like RTFKT, but we approach it differently.{" "}
            <br></br>
            This sneaker is our dream project that took more than 1,5 years of
            trials and errors to come to life, has already been manufactured in
            sample batch and is ready to be produced and shipped to all the
            awesome guys you are!
          </div>

          <div className={styles.faqTextBlack}>
            q: It reminds me of something?
          </div>
          <div className={styles.faqTextBasic}>
            a: That is the point! Aperolmami Duck Duck is a bootleg sneaker,
            which means it uses shape and familiar fragments from sneaker world
            icons we love and adore, knitted together with aesthetic vision and
            constructed with amazing quacklity materials.<br></br>
            We have great admiration for good sneaker stories and thematic
            releases, stuffed with awesome details, story and easter eggs. Check
            out fit pics with them in our discord and instagram!
          </div>
          <div className={styles.faqTextBlack}>q: how much?</div>
          <div className={styles.faqTextBasic}>
            a: TBA, expect it to be around 200 USD in SOL equivalent. We ask you
            to treat this with understanding as production, packaging and
            shipping of the sneakers needs to be included in this price.
          </div>
          <div className={styles.faqTextBlack}>q: how to get the sneakers?</div>
          <div className={styles.faqTextBasic}>
            a: Few days after mint we will be doing the Reservation event that
            will happen in our discord with the help of bots. For each held
            (including bought on secondary markets) Duck NFT you will be offered
            to submit size and shipping info for one sneaker.
          </div>
          <div className={styles.faqTextBlack}>q: what about shipping?</div>
          <div className={styles.faqTextBasic}>
            a: No additional payment, worldwide delivery.
          </div>
          <div className={styles.faqTextBlack}>q: how many can we mint?</div>
          <div className={styles.faqTextBasic}>
            a: 1 per transaction, no wallet limit.
          </div>
          <div className={styles.faqTextBlack}>
            q: what chain will the collection be launched on?
          </div>
          <div className={styles.faqTextBasic}>
            a: Aperolmami duckies live on Solana blockchain.
          </div>
          <div className={styles.faqTextBlack}>
            q: where can i buy ducky nfts?
          </div>
          <div className={styles.faqTextBasic}>
            a: for the initial release, you will be able to mint our NFTs here
            on this website.<br></br>
            once those sell out, you will be able to purchase the them on the
            secondary markets like Magic EDEN.
          </div>
          <div className={styles.footer}>
            <div className={styles.logoTBr}>
              <Image src={LOGO_T_BR} width={185} height={115} />
            </div>
            <div className={styles.footerText}>
              ©powered by solana, vercelapp, APEROLMAMI ducks club team and
              friends.
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
