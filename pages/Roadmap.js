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
// export const Roadmap = () => {
//   const [offsetY, setOffsetY] = useState(0);
//   const handleScroll = () => setOffsetY(window.pageYOffset);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section style={{ position: "relative" }}>
// <div className={styles.grass}>
//   <Image src={GRASS_IMG} alt={"grass!"} layout={"responsive"} />
// </div>
//       <div
//         style={{
//           transform: `translateY(${offsetY * 0.8}px)`,
//           objectFit: "fill",
//           height: "1000px",
//           width: "1000px",
//         }}
//       >
//         <Image src={BG_IMG} />
//       </div>
//       <div className={styles.frame}>
//         <div className={styles.roadmap_container}>
//           <div className={styles.flex_center}>
//             <div className={styles.imageWrapper}>
//               <Image src={ROADMAP_IMG} />
//               <div className={styles.hat}>
//                 <Image src={HAT_IMG} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

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
  // console.log(ref?.current?.getBoundingClientRect()?.top, offsetY);
  return (
    <>
      <div
        style={{ position: "relative", width: "100%", paddingTop: "5%" }}
        ref={ref}
      >
        <section className={styles.Parallax} ref={roadmapRef}>
          <div
            className={styles.background}
            style={{ transform: `translateY(-${offsetY * 0.1}px)` }}
          >
            <Image src={BG_IMG} alt={"grass!"} layout="responsive" />
          </div>
          <div
            className={styles.grass}
            style={{ transform: `translateY(-${offsetY * 0.1}px)` }}
          >
            <Image src={GRASS_IMG} alt={"grass!"} layout="responsive" />
          </div>
          <div
            className={styles.roadmapFrame}
            style={{ transform: `translateY(-${offsetYRoadmap * 0.2}px)` }}
          >
            <div className={styles.roadmapContainer}>
              <div style={{ maxWidth: 960, height: 160 }}>
                <Image src={ROADMAP_IMG} />
              </div>
              <div className={styles.hat}>
                <Image src={HAT_IMG} />
              </div>
            </div>
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
    </>
  );
};

export default Roadmap;
