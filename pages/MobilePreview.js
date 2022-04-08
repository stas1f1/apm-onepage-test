import KROSS from "../public/krutilka/17.jpg";
import Image from "next/image";
import LOGO_IMG from "../public/header/logo_t_br.png";
import FRAME_IMG from "../public/mobile/ggr.gif";
import styles from "../styles/Mobile.module.css";
const MobilePreview = () => {
  return (
    <div className={styles.mobileContainer}>
      <div className={styles.logoContainer}>
        <Image src={LOGO_IMG} layout="responsive" width={194} height={120} />
      </div>
      <div className={styles.frameContainer}>
        <Image src={FRAME_IMG} layout="responsive" />
      </div>
      <div className={styles.button}  onclick="location.href='https://discord.gg/Xg6Drq5u4F';">JOIN US IN DISCORD!</div>
      <div className={styles.krossContainer}>
        <Image src={KROSS} layout="responsive" />
      </div>

      <p className={styles.text}>
        We invite you to experience the full version of the website on desktop
        browsers
      </p>
    </div>
  );
};

export default MobilePreview;
