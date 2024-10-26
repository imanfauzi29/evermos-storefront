import { Specs } from "@/services/types"

interface ProductDetailProps {
  specs: Specs
}

export default function ProductDetail({
  specs: { condition, warranty_type, brand },
}: ProductDetailProps) {
  return (
    <div className="flex-row text-sm gap-normal">
      <div className="flex-col" style={{ color: "var(--bg-tertiary)" }}>
        <span>Brand</span>
        <span>Warranty type</span>
        <span>Condition</span>
      </div>
      <div className="flex-col font-semibold">
        <span>{brand}</span>
        <span>{warranty_type}</span>
        <span>{condition}</span>
      </div>
    </div>
  )
}
