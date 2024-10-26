import Collapsible from "@/components/collapsible"
import styles from "./FilterMenu.module.css"
import Checkbox from "@/components/checkbox"
import Button from "@/components/button"
import React, { useState } from "react"

interface FilterMenuProps {
  categories: string[]
  onChange: (category: string[]) => void
}

export default function FilterMenu({ categories, onChange }: FilterMenuProps) {
  const [category, setCategory] = useState<string[]>([])
  const handleCheckValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target

    console.log(checked)

    if (checked) {
      setCategory((prev) => [...prev, value])
    } else {
      setCategory((prev) => prev.filter((cat) => cat !== value))
    }
  }

  const handleSave = () => {
    onChange(category)
  }

  const handleReset = () => {
    setCategory([])
    onChange([])
  }
  return (
    <form>
      <div className={styles.container}>
        <h2>Filter Product</h2>
        <Collapsible defaultOpen={true}>
          <ul>
            {categories.map((item, id) => (
              <li key={id}>
                <Checkbox text={item} onChange={handleCheckValue} />
              </li>
            ))}
          </ul>
        </Collapsible>

        <div className={styles.btnSubmit}>
          <Button variant="primary" size="sm" onClick={handleSave}>
            Save
          </Button>
          <Button
            variant="outline"
            size="sm"
            type="reset"
            onClick={handleReset}
          >
            Reset
          </Button>
        </div>
      </div>
    </form>
  )
}
