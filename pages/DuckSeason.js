import Image from "next/image";
import styles from "../styles/DuckSeason.module.css";
import DUCK_SEASON_START from "../public/duckSeason/DUCK SEASON START.png";

export default function DuckSeason() {
  return (
    <div>
      <div className={styles.duckSeason}>
        <Image src={DUCK_SEASON_START} />
      </div>
      <div className={styles.emoji}>🌤 🌾 🐣</div>
    </div>
  );
}
