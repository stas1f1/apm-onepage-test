import Image from "next/image";
import styles from "../styles/Header.module.css";
import LOGO_TOP_BR from "../public/header/logo_top_br.png";
import DISCORD_BR from "../public/header/discord_br.png";
import TWITTER_BR from "../public/header/twitter_br.png";

const handleAbout = () => {
  document
    .getElementById("about")
    .scrollIntoView({ block: "start", behavior: "smooth" });
};

const handleLegendaries = () => {
  document
    .getElementById("legendaries")
    .scrollIntoView({ block: "start", behavior: "smooth" });
};

const handleRoadmap = () => {
  document
    .getElementById("roadmap")
    .scrollIntoView({ block: "start", behavior: "smooth" });
};

const handleTeam = () => {
  document
    .getElementById("team")
    .scrollIntoView({ block: "start", behavior: "smooth" });
};

const handleFaq = () => {
  document
    .getElementById("faq")
    .scrollIntoView({ block: "end", behavior: "smooth" });
};

export default function Header() {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image src={LOGO_TOP_BR} />
        </div>
        <div className={styles.nav}>
          <div className={styles.navItem} onClick={handleAbout}>
            about
          </div>
          <div className={styles.navItem} onClick={handleLegendaries}>
            legendaries
          </div>
          <div className={styles.navItem} onClick={handleTeam}>
            team
          </div>
          <div className={styles.navItem} onClick={handleRoadmap}>
            roadmap
          </div>
          <div className={styles.navItem} onClick={handleFaq}>
            faq
          </div>
        </div>
        <div className={styles.social}>
          <Image className={styles.discord} src={DISCORD_BR} />
          <Image className={styles.twitter} src={TWITTER_BR} />
        </div>
      </div>
    </div>
  );
}
