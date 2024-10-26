import styles from "./Rating.module.css"

interface RatingProps {
  averageRating: number
  totalReviews: number
}

export default function Rating({ averageRating, totalReviews }: RatingProps) {
  return (
    <div className={styles.ratingContainer}>
      <div>
        <span className={styles.star}>★</span> <span>{averageRating}</span>
      </div>
      <div className="vertical-divider" />
      <div>
        <span className="font-semibold">{totalReviews}</span> reviews
      </div>
    </div>
  )
}
