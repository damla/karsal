import "./image-box.styles.scss";
import Image from "next/image";

export default function ImageBox({src, alt}) {
  return (
    <div className="image-container">
      <Image
        className="image"
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        priority="true"
      />
    </div>
  );
}
