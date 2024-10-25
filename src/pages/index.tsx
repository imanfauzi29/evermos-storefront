import styles from "@/styles/Home.module.css"
import { ReactElement } from "react"
import Layout from "@/components/layout"
import { NextPageWithLayout } from "@/pages/_app"
import cn from "@/helpers/cn"

const Home: NextPageWithLayout = () => {
  return (
    <>
      <div className={cn(styles.page)}></div>
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

export default Home
