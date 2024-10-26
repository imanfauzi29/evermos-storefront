import styles from "./Slider.module.css"
import Image from "next/image"

interface SliderProps {
  slider: string
}
export default function Slider({ slider }: SliderProps) {
  return (
    <div className={styles.slider}>
      <Image
        src={slider}
        alt="bg-image"
        className={styles.bgImage}
        layout="fill"
        objectFit="contain"
        priority
      />
    </div>
  )
}
