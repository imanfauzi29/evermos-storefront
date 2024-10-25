import styles from "./Slider.module.css"

export default function Slider() {
  return (
    <div className={styles.slider}>
      <img src="./img/slider1.webp" alt="bg-image" className={styles.bgImage} />

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
        <img src="./img/pumpkin-image.png" alt="pumpkin" />
      </div>
    </div>
  )
}
