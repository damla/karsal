import "./image-box.module.scss";
import Image from "next/image";
import classNames from "classnames";

export default function ImageBox({ src, alt, objectFit, wider, priority }) {
  return (
    <div
      className={classNames("image-container", {
        "image-container__wider": wider,
      })}
    >
      <Image
        className="image"
        src={src}
        alt={alt}
        layout="fill"
        objectFit={objectFit}
        priority={priority ? true : false}
      />
    </div>
  );
}
