import styles from "./Card.module.css"
import { formatNumberToRupiah } from "@/helpers/formatNumber"
import Image from "next/image"

interface CardProps {
  image: string
  title: string
  actualPrice?: number
  discount?: number
  price: number
}
export default function Card({
  price,
  actualPrice,
  discount,
  image,
  title,
}: CardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={image} alt={title} className={styles.imageClass} />
      </div>
      <div className={styles.listText}>
        <h3>{title}</h3>
        <p>{formatNumberToRupiah(price)}</p>
        {discount && (
          <div className={styles.discountText}>
            <p className={styles.actualPrice}>
              {formatNumberToRupiah(actualPrice!)}
            </p>
            <p className={styles.discount}>{discount * 100}%</p>
          </div>
        )}
      </div>
    </div>
  )
}
