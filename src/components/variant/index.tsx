import styles from "./Variant.module.css"
import { Variant as VariantType } from "@/services/types"
import { useMemo, useState } from "react"
import cn from "@/helpers/cn"

interface VariantProps {
  variants: VariantType[]
}
export default function Variant({ variants: variantProps }: VariantProps) {
  const [variants] = useState(variantProps)
  const [indexSelected, setIndexSelected] = useState<null | number>(null)

  const variantSelected = useMemo(() => {
    if (indexSelected === null) return null

    return variants[indexSelected].color
  }, [indexSelected, variants])

  return (
    <div className={styles.variantContainer}>
      <p className="text-smx">variant: {variantSelected}</p>
      <div className="flex flex-wrap gap-normal">
        {variants.map((variant, index) => (
          <button
            key={index}
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
