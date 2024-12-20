import style from "./Checkbox.module.css"
import React from "react"

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  text: string
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ text, ...props }, ref) => {
    return (
      <label className={style.checkboxLabel}>
        <input ref={ref} {...props} value={text} type="checkbox" />
        <span>{text}</span>
      </label>
    )
  },
)

Checkbox.displayName = "Checkbox"

export default Checkbox
