import styles from "@/styles/Home.module.css"
import { ReactElement, useMemo, useState } from "react"
import Layout from "@/components/layout"
import cn from "@/helpers/cn"
import Slider from "@/components/slider"
import FilterMenu from "@/components/filterMenu"
import Card from "@/components/card"
import { Catalog } from "@/services/types"
import { GetServerSidePropsResult } from "next"
import { getCatalogs } from "@/services/baseService"
import Link from "next/link"

type PageProps = {
  data: Catalog[]
}
export default function Home({ data }: PageProps) {
  const [catalogs, setCatalogs] = useState<Catalog[]>(data)

  const filterMenuCatalogs = useMemo(() => {
    if (!catalogs.length) return []

    return [
      ...new Set(catalogs.map(({ category }) => category).filter(Boolean)),
    ]
  }, [catalogs])
  return (
    <>
      <div className={cn(styles.page)}>
        <Slider />

        <div className={styles.content}>
          <div style={{ flexBasis: "25%" }}>
            <FilterMenu categories={filterMenuCatalogs} />
          </div>
          <div style={{ flex: "1 1 0%" }}>
            <div></div>
            <div className={styles.contentList}>
              {catalogs.map(
                (
                  {
                    id,
                    price,
                    actual_price,
                    product_detail,
                    discount,
                    product_name,
                  },
                  i,
                ) => (
                  <Link key={i} href={`/${id}`}>
                    <Card
                      price={price}
                      actualPrice={actual_price}
                      image={product_detail.image_url[0]}
                      title={product_name}
                      discount={discount}
                    />
                  </Link>
                ),
              )}
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

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<PageProps>
> {
  const details = await getCatalogs()

  return {
    props: {
      data: details,
    },
  }
}
