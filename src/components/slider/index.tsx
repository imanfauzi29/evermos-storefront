import styles from "./Slider.module.css"
import Image from "next/image"

export default function Slider() {
  return (
    <div className={styles.slider}>
      <Image
        src="/img/slider1.webp"
        alt="bg-image"
        className={styles.bgImage}
        layout="fill"
        objectFit="cover"
        priority
      />

      <div className={styles.contentSlider}>
        <div>
          <h1>🎃 HALLOWEEN SALE! 20% OFF ON ALL ITEMS 👻</h1>
          <p>
            Spooky savings await! Get 20% OFF on all items this Halloween
            season. Use coupon code <strong>HALLOWEEN20</strong> at checkout to
            claim your discount!
          </p>
          <p>No tricks, just treats!</p>
        </div>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            scale: ".8",
          }}
        >
          <Image
            src="/img/pumpkin-image.png"
            alt="pumpkin"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </div>
  )
}
