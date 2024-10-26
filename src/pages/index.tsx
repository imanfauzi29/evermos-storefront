import styles from "@/styles/Home.module.css"
import React, { ReactElement, useMemo, useState } from "react"
import Layout from "@/components/layout"
import cn from "@/helpers/cn"
import FilterMenu from "@/components/filterMenu"
import Card from "@/components/card"
import { Catalog } from "@/services/types"
import { GetServerSidePropsResult } from "next"
import { getCatalogs } from "@/services/baseService"
import Link from "next/link"
import { debounce } from "@/helpers/debounce"
import Slider from "@/components/slider"
import Button from "@/components/button"

type PageProps = {
  data: Catalog[]
  slider_image: string
}
export default function Home({ data, slider_image }: PageProps) {
  const [catalogs, setCatalogs] = useState<Catalog[]>(data)
  const [q, setQ] = useState("")
  const [category, setCategory] = useState<string[]>([])
  const [showModal, setShowModal] = useState(false)

  const filterMenuCatalogs = useMemo(() => {
    if (!catalogs.length) return []

    return [
      ...new Set(catalogs.map(({ category }) => category).filter(Boolean)),
    ]
  }, [])

  const getCatalog = async (query: string) => {
    const res = await getCatalogs(query)
    setCatalogs(res)
    setShowModal(false)
  }

  const handleSearchChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target

    const searchQuery = value ? `product_name_like=^${value}` : ""
    await getCatalog(searchQuery)
    setQ(value)
  }

  const handleFilterChange = async (cat: string[]) => {
    if (cat.length === 0) {
      await getCatalog("")
      setCategory([])
      return
    }
    let query = cat.map((item) => `category=${item}`).join("&")
    query = q ? `${q}&${query}` : query

    await getCatalog(query)
    setCategory(cat)
  }

  return (
    <>
      <div className={cn(styles.page)}>
        <Slider slider={slider_image} />

        <div className={styles.content}>
          <div className={styles.filterMenu}>
            <FilterMenu
              categories={filterMenuCatalogs}
              onChange={handleFilterChange}
            />
          </div>
          <div style={{ flex: "1 1 0%" }}>
            <div className={styles.filterContainer}>
              <div>
                {q && (
                  <div>
                    result search:{" "}
                    <strong>
                      {q} ({catalogs.length})
                    </strong>
                  </div>
                )}

                {category.length > 0 && (
                  <div>
                    <span>filter by: </span>
                    {category.map((cat, i) => (
                      <span
                        key={i}
                        className={styles.category}
                        style={{ marginLeft: i !== 0 ? ".5rem" : "0" }}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className={styles.filterAction}>
                <Button
                  variant="outline"
                  size="xs"
                  onClick={() => setShowModal(true)}
                >
                  Filter
                </Button>
                <input
                  type="text"
                  placeholder="Search..."
                  className={styles.input}
                  onChange={debounce(handleSearchChange, 500)}
                />
              </div>
            </div>
            <div className={styles.contentList}>
              {catalogs.length > 0 ? (
                catalogs.map(
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
                )
              ) : (
                <div className="flex justify-center">No result found!</div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={cn(styles.modal, showModal ? styles.show : "")}>
        <div>
          <button type="button" onClick={() => setShowModal(false)}>
            &times;
          </button>
          <FilterMenu
            categories={filterMenuCatalogs}
            onChange={handleFilterChange}
          />
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
      slider_image: "/img/Banner1.png",
    },
  }
}
