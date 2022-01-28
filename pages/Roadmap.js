import styles from "../styles/Roadmap.module.css";
import Image from "next/image";
import BG_IMG from "../public/roadmap/background.png";
import ROADMAP_IMG from "../public/roadmap/ROADMAP.png";
import HAT_IMG from "../public/roadmap/hat.svg";
import GRASS_IMG from "../public/third/grass.png";
import GREEN_HAT_IMG from "../public/roadmap/green_hat.svg";
import KROSS_IMG from "../public/roadmap/kross.svg";
import { useState, useEffect, useRef } from "react";
import KROSS_RIGHT_IMG from "../public/roadmap/kross_right.svg";
import RIGHT_HAT_IMG from "../public/roadmap/right_hat.svg";

const Roadmap = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [offsetYRoadmap, setOffsetYRoadmap] = useState(0);
  const ref = useRef();
  const roadmapRef = useRef();

  const handleScrollBackground = () =>
    setOffsetY(ref?.current?.getBoundingClientRect()?.top);
  const handleScrolRoadmap = () =>
    setOffsetYRoadmap(roadmapRef?.current?.getBoundingClientRect()?.top);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollBackground);
    window.addEventListener("scroll", handleScrolRoadmap);

    return () => {
      window.removeEventListener("scroll", handleScrollBackground);
      window.removeEventListener("scroll", handleScrolRoadmap);
    };
  }, []);

  const renderContent = () => (
    <div className={styles.stepContent} id="roadmap">
      <div className={styles.roadmapContainer}>
        <div style={{ maxWidth: 960, height: 160 }}>
          <Image src={ROADMAP_IMG} />
        </div>
        <div className={styles.hat}>
          <Image src={HAT_IMG} />
        </div>
      </div>
      <div className={styles.stepElement}>
        <span>1 STEP</span>
        <p>
          lorem poshelnahuilorem polorem poshelnahuishelnahuilorem poshellorem
          poshelorem poshelnahuilnahuinahuilorem poshelnahui
        </p>
      </div>
      <div className={styles.stepElement}>
        <span>2 STEP</span>
        <p>
          lorem poshelnahuilorem polorem poshelnahuishelnahuilorem poshellorem
          poshelorem poshelnahuilnahuinahuilorem poshelnahui
        </p>
      </div>
      <div className={styles.stepElement}>
        <span>3 STEP</span>
        <p>
          lorem poshelnahuilorem polorem poshelnahuishelnahuilorem poshellorem
          poshelorem poshelnahuilnahuinahuilorem poshelnahui
        </p>
      </div>
      <div className={styles.stepElement}>
        <span>4 STEP</span>
        <p>
          lorem poshelnahuilorem polorem poshelnahuishelnahuilorem poshellorem
          poshelorem poshelnahuilnahuinahuilorem poshelnahui
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
        overflowY: "hidden",
      }}
      ref={ref}
    >
      <section className={styles.Parallax}>
        <div
          className={styles.background}
          style={{ transform: `translateY(-${offsetY * 0.1}px)` }}
        >
          <Image src={BG_IMG} layout="responsive" />
        </div>

        <div
          className={styles.roadmapFrame}
          style={{ transform: `translateY(-${offsetYRoadmap * 0.15}px)` }}
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
              <div className={styles.rightHatContainer} ref={roadmapRef}>
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
