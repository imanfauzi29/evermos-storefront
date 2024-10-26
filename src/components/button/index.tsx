import React from "react"
import cn from "@/helpers/cn"
import ButtonStyle from "./Button.module.css"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline"
  size?: "xs" | "sm" | "md" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "md", className, type = "button", ...rest },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          className,
          ButtonStyle.button,
          ButtonStyle[variant],
          ButtonStyle[size],
        )}
        {...rest}
      />
    )
  },
)

Button.displayName = "Button"

export default Button
