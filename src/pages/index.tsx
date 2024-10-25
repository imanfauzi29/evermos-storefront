import styles from "@/styles/Home.module.css"
import { ReactElement } from "react"
import Layout from "@/components/layout"
import cn from "@/helpers/cn"
import Slider from "@/components/slider"
import FilterMenu from "@/components/filterMenu"

export default function Home() {
  return (
    <>
      <div className={cn(styles.page)}>
        <Slider />

        <div className={styles.content}>
          <div style={{ width: "25%" }}>
            <FilterMenu />
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
