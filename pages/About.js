import Image from "next/image";
import styles from "../styles/Third.module.css";
import { useState } from "react";

import HEY_IMG from "../public/third/HEY.png";
import INV_IMG from "../public/third/inv.png";
import LAPKA_IMG from "../public/third/lapka.png";
import GRASS_IMG from "../public/third/grass.png";
import TICKET_LEFT_IMG from "../public/third/TICKET.png";
import TICKET_RIGHT_IMG from "../public/third/TICKET2.png";
import classnames from "classnames";
const About = () => {
  const [ticketClicked, updateTicket] = useState(false);

  const handleTicketClick = () => {
    updateTicket(true);
    location.href = "https://discord.gg/Xg6Drq5u4F";
  };
  return (
    <>
      <div className={styles.background}>
        <div className={styles.grad}>
          <div className={styles.miniGrad}></div>
          <div className={styles.txtBtn}>
            <div className={styles.row}>
              <p className={styles.thirdText} style={{ fontSize: 29 }}>
                Welcome! Whoever you are and wherever you come from.
                <br />
                We&apos;re happy to invite you join us and&nbsp;
                <span className={styles.textHighlight}>quack</span> together!
              </p>
            </div>
            <div className={styles.row}>
              <div className={styles.button} onclick="location.href='https://discord.gg/Xg6Drq5u4F';">Join the flock!</div>
            </div>
          </div>
          <div className={styles.columns}>
            <div className={styles.leftColumn}>
              <div
                className={styles.heyLogo}
                data-aos="fade-up"
                data-aos-duration="1000"
                id="about"
              >
                <Image src={HEY_IMG} alt={"Hey!"} width={701} height={302} />
              </div>

              <div
                data-aos="fade"
                data-aos-duration="2000"
                data-aos-delay="1000"
              >
                <div className={styles.textUpper}>
                  <p className={classnames(styles.textHighlight, styles.txt)}>
                    Ducklings have flown in from <br /> faraway lands with
                    gifts!
                  </p>

                  <div className={styles.thirdText}>
                    <p className={styles.txt}>
                      <span>
                        The aperolmami duck club gives you the most comfortable
                        seats on our flight. It will be very fast with&nbsp;
                        <span
                          className={classnames(
                            styles.textHighlight,
                            styles.txt
                          )}
                        >
                          654 uniquely generated duckies
                        </span>
                        &nbsp; and custom sneakers they have brought for each of
                        you.
                      </span>
                    </p>

                    <p className={styles.txt}>
                      with this cozy collection we&apos;re doing first-ever real-life
                      sneaker airdrop where every holder counts! Will you be
                      able to grab them?
                    </p>
                  </div>
                  <div className={styles.separator}>
                    <div className={styles.separatorWrapper}>
                      <Image src={LAPKA_IMG} alt={"lapka"} layout="fill" />
                    </div>
                    <div className={styles.separatorWrapper}>
                      <Image src={LAPKA_IMG} alt={"lapka"} layout="fill" />
                    </div>
                    <div className={styles.separatorWrapper}>
                      <Image src={LAPKA_IMG} alt={"lapka"} layout="fill" />
                    </div>
                  </div>

                  <div className={styles.textLower}>
                    <p className={styles.txt}>
                      Our history goes back several years of fruitful work, in
                      an effort a perfect sneaker that reflects our passionate
                      love for iconic pairs and sneakerhead culture, delivered
                      in an unforgettable Web 3.0 experience. <br></br>
                      for the community.
                    </p>
                    <p className={classnames(styles.textHighlight, styles.txt)}>
                      We are on our way. we&apos;re racing toward the sun! And
                      we invite you into our adventure.
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-aos="fadeIn"
                data-aos-duration="1500"
                data-aos-delay="1000"
              >
                <div
                  className={
                    ticketClicked
                      ? styles.ticketFrame
                      : styles.animatedTicketFrame
                  }
                  onClick={handleTicketClick}
                >
                  <div
                    style={{
                      cursor: "pointer",
                      objectFit: "fill",
                      maxHeight: 180
                    }}
                  >
                    <Image src={TICKET_LEFT_IMG} width={280} height={160} />
                  </div>
                  <div
                    className={styles.rightTicketPart}
                    style={{
                      transform: `translateX(${ticketClicked ? 28 : 0}px)`
                    }}
                  >
                    <Image src={TICKET_RIGHT_IMG} width={100} height={160} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rightColumn}>
              <div className={styles.invite}>
                <div
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-delay="1000"
                >
                  <Image src={INV_IMG} alt={"invite message"} />
                </div>
              </div>
              <div
                style={{ position: "relative", width: "100%", height: "100%" }}
              >
                <div
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-delay="1000"
                  className={styles.bookWrapper}
                />
              </div>
            </div>
          </div>

          <div className={styles.grass}>
            <Image src={GRASS_IMG} alt={"grass!"} layout="responsive" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
