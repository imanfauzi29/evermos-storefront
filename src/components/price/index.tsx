import { formatNumberToRupiah } from "@/helpers/formatNumber"
import styles from "./Price.module.css"

interface PriceProps {
  price: number
  actualPrice?: number
  discount?: number
}
export default function Price({ price, actualPrice, discount }: PriceProps) {
  return (
    <div>
      <h1>{formatNumberToRupiah(price)}</h1>
      {discount && (
        <p>
          <span className="text-through text-sm">
            {formatNumberToRupiah(actualPrice!)}
          </span>
          <span className={styles.discount}>discount {discount * 100}%</span>
        </p>
      )}
    </div>
  )
}
