import styles from "../styles/Roadmap.module.css";
import Image from "next/image";
import BG_IMG from "../public/roadmap/background.png";
import ROADMAP_IMG from "../public/roadmap/ROADMAP.png";
import HAT_IMG from "../public/roadmap/hat.svg";
import GREEN_HAT_IMG from "../public/roadmap/green.png";
import KROSS_IMG from "../public/roadmap/kross.svg";
import { useState, useEffect, useRef } from "react";
import KROSS_RIGHT_IMG from "../public/roadmap/kross_right.svg";
import RIGHT_HAT_IMG from "../public/roadmap/right_hat.svg";

const MAX_TRANSLATE = 760;
const Roadmap = () => {
  const [offsetYRoadmap, setOffsetYRoadmap] = useState(0);
  const roadmapRef = useRef();

  const handleScrolRoadmap = () =>
    setOffsetYRoadmap(roadmapRef?.current?.getBoundingClientRect()?.top);

  useEffect(() => {
    window.addEventListener("scroll", handleScrolRoadmap);

    return () => {
      window.removeEventListener("scroll", handleScrolRoadmap);
    };
  }, []);

  const renderContent = () => (
    <div className={styles.stepContent}>
      <div className={styles.roadmapContainer}>
        <div style={{ maxWidth: 960, height: 160 }}>
          <Image src={ROADMAP_IMG} />
        </div>
        <div className={styles.hat}>
          <Image src={HAT_IMG} />
        </div>
      </div>
      <div className={styles.stepElement}>
        <span>Phase 1: Pre-mint</span>
        <p>
          Gather community together, give out all sneak-peeks, make sure
          everyone understands the process of getting their sneakers via NFTs.
        </p>
      </div>
      <div className={styles.stepElement}>
        <span>Phase 2: Mint</span>
        <p>
          Minting will be launched on our website for presale and later for
          public sale. After the Mint, collection will be listed on Solana
          marketplaces.
        </p>
      </div>
      <div className={styles.stepElement}>
        <span>Phase 3: Reservation</span>
        <p>
          Holders are free to submit a reservation for a pair of sneakers in
          exchange for each held NFT from our collection.
        </p>
      </div>
      <div className={styles.stepElement}>
        <span>Phase 4: Prod + delivery</span>
        <p>
          Resolving any issues with submitting errors, production of kicks with
          regular updates about the process. Sneakers will be shipped worldwide
          with trackings provided.
        </p>
      </div>
      <div className={styles.stepElement}>
        <span>Phase 5: Onwards</span>
        <p>
          Making community stronger with online (and maybe offline) events, cozy
          merch line like no other project, Duck universe expansion and
          mysteries that are unknown yet... (but already in the works)
        </p>
      </div>
    </div>
  );
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingTop: "5%",
        maxHeight: "2000px",
        overflowY: "hidden"
      }}
      id="roadmap"
      ref={roadmapRef}
    >
      <section className={styles.Parallax}>
        <div className={styles.background}>
          <Image src={BG_IMG} layout="responsive" />
        </div>

        <div
          className={styles.roadmapFrame}
          style={{
            transform: `translateY(-${
              offsetYRoadmap < MAX_TRANSLATE
                ? Math.abs(offsetYRoadmap) * 0.5
                : MAX_TRANSLATE * 0.5
            }px)`
          }}
        >
          <div className={styles.parallaxGrid}>
            <div className={styles.firstParallaxColumn}>
              <div className={styles.greenHatContainer}>
                <div>
                  <Image src={GREEN_HAT_IMG} />
                </div>
              </div>
              <div className={styles.krossContainer}>
                <div>
                  <Image src={KROSS_IMG} />
                </div>
              </div>
            </div>
            <div className={styles.secondParallaxColumn}>
              <div className={styles.krossRightContainer}>
                <div>
                  <Image src={KROSS_RIGHT_IMG} />
                </div>
              </div>
              <div className={styles.rightHatContainer}>
                <div>
                  <Image src={RIGHT_HAT_IMG} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {renderContent()}
    </div>
  );
};

export default Roadmap;
