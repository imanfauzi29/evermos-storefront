import styles from "@/styles/Home.module.css"
import { ReactElement } from "react"
import Layout from "@/components/layout"
import cn from "@/helpers/cn"
import Slider from "@/components/slider"
import FilterMenu from "@/components/filterMenu"
import Card from "@/components/card"

export default function Home() {
  return (
    <>
      <div className={cn(styles.page)}>
        <Slider />

        <div className={styles.content}>
          <div style={{ flexBasis: "25%" }}>
            <FilterMenu />
          </div>
          <div style={{ flex: "1 1 0%" }}>
            <div></div>
            <div className={styles.contentList}>
              <Card />
              <Card />
              <Card />
            </div>
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
