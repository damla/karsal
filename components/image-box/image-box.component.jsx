import "./image-box.styles.scss";
import Image from "next/image";

export default function ImageBox() {
  return (
    <div className="image-container">
      <Image
        className="image"
        src="/assets/images/section-1.jpg"
        alt="Picture of the fabric"
        layout="fill"
        objectFit="cover"
        priority="true"
      />
    </div>
  );
}
