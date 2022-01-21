import Image from "next/image";
import styles from "../styles/Header.module.css";
import LOGO_TOP_BR from '../public/header/logo_top_br.png'
import DISCORD_BR from '../public/header/discord_br.png'
import TWITTER_BR from '../public/header/twitter_br.png'

export default function Header() {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image src={LOGO_TOP_BR} />
        </div>
        <div className={styles.nav}>
          <div className={styles.navItem}>about</div>
          <div className={styles.navItem}>legendaries</div>   
          <div className={styles.navItem}>team</div> 
          <div className={styles.navItem}>roadmap</div> 
          <div className={styles.navItem}>faq</div>        
        </div>
        <div className={styles.social}>
          <Image className = {styles.discord} src={DISCORD_BR}  />
          <Image className = {styles.twitter} src={TWITTER_BR}  />
        </div>
      </div>
    </div>
  );
}