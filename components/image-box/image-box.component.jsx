import styles from "./image-box.module.scss";
import Image from "next/image";
import classNames from "classnames";

export default function ImageBox({ src, alt, objectFit, wider, priority }) {
  return (
    <div
      className={classNames(styles.image_container,  wider &&
        styles.image_container__wider
      )}
    >
      <Image
        className={styles.image}
        src={src}
        alt={alt}
        layout="fill"
        objectFit={objectFit}
        priority={priority ? true : false}
      />
    </div>
  );
}
