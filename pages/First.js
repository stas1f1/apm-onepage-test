import Image from "next/image";
import styles from "../styles/First.module.css";
import LOGO_T_BR from "../public/first/logo_t_br.png";
import Header from "./Header";
import DuckSeason from "./DuckSeason";

export default function First() {
  return (
    <div>
      <div className={styles.firstContainer}>
        <div className={styles.firstBackground}>
          <Header />

          <div className={styles.firstTitle}>
            <Image src={LOGO_T_BR} />
          </div>
          <DuckSeason />
        </div>
      </div>
    </div>
  );
}
