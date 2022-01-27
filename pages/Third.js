import Image from "next/image";
import styles from "../styles/Third.module.css";
import { useState } from "react";

import HEY_IMG from "../public/third/HEY.png";
import INV_IMG from "../public/third/inv.png";
import BOOK_IMG from "../public/third/BOOK.png";
import LAPKA_IMG from "../public/third/lapka.png";
import GRASS_IMG from "../public/third/grass.png";
import TICKET_LEFT_IMG from "../public/third/TICKET.png";
import TICKET_RIGHT_IMG from "../public/third/TICKET2.png";

const Third = () => {
  const [ticketClicked, updateTicket] = useState(false);

  const handleTicketClick = () => {
    updateTicket(true);
  };

  return (
    <div className={styles.background}>
      <div className={styles.row}>
        <p style={{ fontSize: "29px", textAlign: "center" }}>
          We don&apos;t know who you are. We don&apos;t know where you come
          from. <br />
          But we&apos;re sure to make you&nbsp;
          <span className={styles.textHighlight}>quack</span> to the beat with
          us.
        </p>
      </div>
      <div className={styles.row}>
        <div className={styles.button}>TRY TO QUACK!</div>
      </div>

      <div style={{ display: "flex", marginTop: 71 }}>
        <div className={styles.leftColumn}>
          <div data-aos="fade-up" data-aos-duration="1000">
            <Image src={HEY_IMG} alt={"Hey!"} />
          </div>

          <div data-aos="fade" data-aos-duration="3000" data-aos-delay="1000">
            <div className={styles.textUpper}>
              <p className={styles.textHighlight}>
                Young ducklings have flown in from <br /> faraway lands with
                gifts!
              </p>

              <p>
                <span>
                  The aperolmami duck club gives you the most comfortable seats
                  on our flight. It will be very fast with&nbsp;
                  <span className={styles.textHighlight}>
                    999 uniquely generated duckies
                  </span>
                  &nbsp;999 uniquely generated duckies and soft with the
                  sneakers the duckies have brought for each of you.
                </span>
              </p>

              <p>
                A crazy Collection of cozy ducks on solana blockchain with the
                first-ever real-life sneaker airdrop. Will you be able to grab
                them all?
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
              <p>
                Our history goes back many years of fruitful work, in an effort
                to turn the world around us and bring joy to people.
              </p>
              <p className={styles.textHighlight}>
                We are on our way. we&apos;re racing toward the suN! And we
                invite you into our adventure.
              </p>
            </div>

            <div
              className={
                ticketClicked
                  ? styles.ticketContainer
                  : styles.animatedTicketContainer
              }
              onClick={handleTicketClick}
            >
              <Image src={TICKET_LEFT_IMG} alt={"ticket"} />
              <div
                className={
                  ticketClicked ? styles.ticketStart : styles.imageWrapper
                }
              >
                <Image src={TICKET_RIGHT_IMG} alt={"ticket"} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.invite}>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="1000"
            >
              <Image src={INV_IMG} alt={"invite message"} />
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="1000"
            className={styles.bookWrapper}
          >
            <Image
              src={BOOK_IMG}
              alt={"Family book"}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      <div className={styles.grass}>
        <Image src={GRASS_IMG} alt={"grass!"} layout="responsive" />
      </div>
    </div>
  );
};

export default Third;
