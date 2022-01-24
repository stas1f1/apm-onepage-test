import Image from "next/image";
import { useState, useLayoutEffect, useEffect } from "react";
// import  from "../public/krutilka/";
import styles from "../styles/Krutilka.module.css";

const images = Array.from({ length: 21 }, (v, k) => k + 1);

export default function Krutilka() {
  const [visibleImagesMap, setVisibleImagesMap] = useState(
    images.reduce((map, image) => {
      map[image] = false;
      return map;
    }, {})
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;
      console.log(scrollTop);
      const newVisibleImagesMap = images.reduce((map, image) => {
        map[image] = scrollTop >= image * viewportHeight;
        return map;
      }, {});

      setVisibleImagesMap(newVisibleImagesMap);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={styles.sticky}>
      <div className={styles.frame}>
        {images.map((image) => (
          <div
            className={[
              styles.image,
              styles[`image_${image}`],
              visibleImagesMap[image] && styles.image_visible,
            ].join(" ")}
            key={image}
          />
        ))}
      </div>
    </div>
  );
}
