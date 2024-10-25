import styles from "@/styles/Home.module.css"
import { ReactElement } from "react"
import Layout from "@/components/layout"
import cn from "@/helpers/cn"

export default function Home() {
  return (
    <>
      <div className={cn(styles.page)}>
        <div className={styles.slider}>
          <img
            src="./img/slider1.webp"
            alt="bg-image"
            className={styles.bgImage}
          />

          <div className={styles.contentSlider}>
            <div>
              <h1>🎃 HALLOWEEN SALE! 20% OFF ON ALL ITEMS 👻</h1>
              <p>
                Spooky savings await! Get 20% OFF on all items this Halloween
                season. Use coupon code <strong>HALLOWEEN20</strong> at checkout
                to claim your discount!
              </p>
              <p>No tricks, just treats!</p>
            </div>
            <img src="./img/pumpkin-image.png" alt="pumpkin" />
          </div>
        </div>
      </div>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout pageTitle="Home Page">
      <>{page}</>
    </Layout>
  )
}
