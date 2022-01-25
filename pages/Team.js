import Image from "next/image";
import { useState, useLayoutEffect, useRef } from "react";
import styles from "../styles/Team.module.css";
import { Parallax, Background } from "react-parallax";
import TEAM_IMG from "../public/team/TEAM-YELLOW.png";
import CLOUD_IMG from "../public/team/clouds.png";
import TEAM1_IMG from "../public/team/team1.png";
import TEAM2_IMG from "../public/team/team2.png";
import TEAM3_IMG from "../public/team/team3.png";
import TWISTY_IMG from "../public/team/twisty.png";
import MEAT_IMG from "../public/team/meat.png";
import JOJE_IMG from "../public/team/joje.png";
import GRASS_IMG from "../public/third/grass.png";
export default function Team() {
  return (
    <div>
      <div className={styles.background}>
        <div className={styles.clouds}>
          <Image src={CLOUD_IMG} layout="fill" />
        </div>
        <div className={styles.teamTag}>
          <Image src={TEAM_IMG} />
        </div>
        <p className={styles.textHighlight}>
          Everyone on our team is a genius, and everyone has a story to tell..
        </p>
        <div className={styles.team}>
          <div className={styles.teamMember}>
            <div className={styles.imageWrapper}>
              <Image src={TEAM1_IMG} />
            </div>
            <Image src={TWISTY_IMG} />
            <div className={styles.descriptionWrapper}>
              <p className={styles.descriptionHighlighted}>
                Flying high, swimming far, knowing more than any book
              </p>
              <p className={styles.description}>
                crypto-enthusiast, sneakerhead, fisherman.
              </p>
            </div>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.imageWrapper}>
              <Image src={TEAM2_IMG} />
            </div>
            <Image src={MEAT_IMG} />
            <div className={styles.descriptionWrapper}>
              <p className={styles.descriptionHighlighted}>
                Every emotion counts and I always know how it will look
              </p>
              <p className={styles.description}>dreamer, artist, the knower</p>
            </div>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.imageWrapper}>
              <Image src={TEAM3_IMG} />
            </div>
            <Image src={JOJE_IMG} />
            <div className={styles.descriptionWrapper}>
              <p className={styles.descriptionHighlighted}>
                the whole world will know soon, and I'll be able to hook
              </p>
              <p className={styles.description}>
                adviser, developer, web 3,0 expert
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.grass}>
        <Image src={GRASS_IMG} alt={"grass!"} layout="responsive" />
      </div>
    </div>
  );
}
