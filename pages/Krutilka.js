import { useState, useEffect, useRef } from "react";
import styles from "../styles/Krutilka.module.css";

const TOTAL_NUMBER_OF_PICTURES = 21;
const images = Array.from(
  { length: TOTAL_NUMBER_OF_PICTURES },
  (v, k) => k + 1
);

export default function Krutilka() {
  const [visibleImagesMap, setVisibleImagesMap] = useState(
    images.reduce((map, image) => {
      map[image] = false;
      return map;
    }, {})
  );
  const ref = useRef();

  useEffect(() => {
    const { current: element } = ref;
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const { top, bottom, height } = element.getBoundingClientRect();
      const step = height / (2 * TOTAL_NUMBER_OF_PICTURES);

      const topBorder = top - viewportHeight;
      const bottomBorder = bottom - viewportHeight; // 100 - высота подкладки для крутилки

      const newVisibleImagesMap = images.reduce((map, image) => {
        map[image] = Math.abs(topBorder) - height + 500 >= (image + 1) * step;
        return map;
      }, {});
      // фиксация картинки до
      if (topBorder < 0) {
        newVisibleImagesMap[1] = true;
      }

      setVisibleImagesMap(newVisibleImagesMap);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={{ display: "flex" }}>
      <div className={styles.sticky} ref={ref}>
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
      <div className={styles.emptyBlock} />
    </div>
  );
}
