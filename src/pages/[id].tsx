import { ReactElement } from "react"
import Layout from "@/components/layout"
import SliderCustomPaging from "@/components/slider/customPaging"
import Button from "@/components/button"
import styles from "@/styles/Detail.module.css"
import Rating from "@/components/rating"
import Price from "@/components/price"
import Variant from "@/components/variant"
import ProductDetail from "@/components/productDetail"
import { Catalog } from "@/services/types"
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { getCatalogById } from "@/services/baseService"

type PageProps = {
  data: Catalog
}

export default function DetailCatalog({ data }: PageProps) {
  const {
    rating,
    product_detail,
    product_name,
    price,
    actual_price,
    discount,
  } = data
  return (
    <section className={styles.container}>
      <div className="flex justify-center">
        {/*image */}
        <div>
          <SliderCustomPaging images={product_detail.image_url} />
        </div>
        {/*content*/}
        <div className="flex-col gap-normal">
          <div>
            <h1 className={styles.title}>{product_name}</h1>

            <Rating
              averageRating={rating.average_rating}
              totalReviews={rating.total_reviews}
            />
          </div>

          <div
            className="horizontal-divider"
            style={{ marginBlock: "var(--sm-gap)" }}
          />

          <div>
            <Price
              price={price}
              actualPrice={actual_price}
              discount={discount}
            />

            <Variant variants={product_detail.variants} />
          </div>

          <div
            className="horizontal-divider"
            style={{ marginBlock: "var(--sm-gap)" }}
          />

          <div>
            <ProductDetail specs={product_detail.specs} />

            <div
              className={styles.description}
              style={{ marginTop: "var(--default-gap)" }}
            >
              <p
                className="font-semibold"
                style={{ marginBottom: "var(--sm-gap)" }}
              >
                About this product
              </p>
              <p data-classname="description-text">
                {product_detail.description}
              </p>
            </div>
          </div>

          <div>
            <Button>Buy Now</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

DetailCatalog.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout pageTitle="Detail Page">
      <>{page}</>
    </Layout>
  )
}

export async function getServerSideProps(
  context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<PageProps>> {
  const { id } = context.params as { id: string }
  const details = await getCatalogById(Number(id))

  return {
    props: {
      data: details,
    },
  }
}
