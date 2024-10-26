import styles from "./Variant.module.css"
import { Variant } from "@/services/types"
import { useState } from "react"
import cn from "@/helpers/cn"

interface VariantProps {
  variants: Variant[]
}
export default function variant({ variants }: VariantProps) {
  const [indexSelected, setIndexSelected] = useState<null | number>(null)

  return (
    <div className={styles.variantContainer}>
      <p>variant: red</p>
      <div className="flex flex-wrap gap-normal">
        {variants.map((variant, index) => (
          <button
            type="button"
            data-classname={cn("variant-option")}
            data-selected={indexSelected === index ? "true" : "false"}
            data-variant-color={variant.color}
            data-variant-stock={variant.stock}
            onClick={() => setIndexSelected(index)}
          >
            <span>{variant.color}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
