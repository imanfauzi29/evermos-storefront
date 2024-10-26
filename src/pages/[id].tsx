import { useRouter } from "next/router"
import { ReactElement } from "react"
import Layout from "@/components/layout"
import SliderCustomPaging from "@/components/slider/customPaging"
import Button from "@/components/button"
import styles from "@/styles/Detail.module.css"
import Rating from "@/components/rating"
import Price from "@/components/price"
import Variant from "@/components/variant"
import ProductDetail from "@/components/productDetail"

const details = {
  id: 1,
  product_name: "Sony PlayStation 5 DualSense Wireless Controller",
  actual_price: 1000000,
  price: 950000,
  discount: 0.05,
  total_sold: 4500,
  rating: {
    average_rating: 4.8,
    total_reviews: 1800,
  },
  stocks: 150,
  category: "gaming",
  product_detail: {
    description:
      "DualSense Wireless Controller untuk PlayStation 5 dilengkapi dengan teknologi haptic feedback dan adaptive triggers yang memberikan pengalaman bermain yang lebih mendalam dan realistis. Kontroler ini kompatibel dengan PS5 dan beberapa game yang ada di PC. Desain ergonomisnya dirancang agar nyaman digunakan dalam waktu lama, dengan tombol yang mudah dijangkau. Dilengkapi dengan port USB-C untuk pengisian daya cepat dan jack headphone 3.5mm. Pengguna dapat menikmati permainan multiplayer atau single-player dengan respons yang lebih presisi.",
    specs: {
      brand: "Sony",
      warranty_type: "Garansi Resmi",
      condition: "Baru",
    },
    variants: [
      {
        color: "Putih",
        stock: 100,
      },
      {
        color: "Midnight Black",
        stock: 50,
      },
    ],
    image_url: [
      "https://m.media-amazon.com/images/I/61DLYxmpZlL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61UZbAmP0kL._SL1500_.jpg",
    ],
  },
}

export default function DetailCatalog() {
  const router = useRouter()
  return (
    <section className={styles.container}>
      <div className="flex justify-center">
        {/*image */}
        <div>
          <SliderCustomPaging images={details.product_detail.image_url} />
        </div>
        {/*content*/}
        <div className="flex-col gap-normal">
          <div>
            <h1 className={styles.title}>{details.product_name}</h1>

            <Rating
              averageRating={details.rating.average_rating}
              totalReviews={details.rating.total_reviews}
            />
          </div>

          <div
            className="horizontal-divider"
            style={{ marginBlock: "var(--sm-gap)" }}
          />

          <div>
            <Price
              price={details.price}
              actualPrice={details.actual_price}
              discount={details.discount}
            />

            <Variant variants={details.product_detail.variants} />
          </div>

          <div
            className="horizontal-divider"
            style={{ marginBlock: "var(--sm-gap)" }}
          />

          <div>
            <ProductDetail specs={details.product_detail.specs} />

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
                {details.product_detail.description}
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
