import { ReactSVG } from "react-svg"

const iconList = {
  handbag: "./handbag.svg",
  close: "./close.svg",
  discount: "./discount.svg",
  "chevron-down": "./chevron-down.svg",
}

interface IconProps {
  name: keyof typeof iconList
  size?: string
  fill?: string
  stroke?: string
}
export default function Icon({ name, stroke, size = "24px", fill }: IconProps) {
  return (
    <ReactSVG
      src={iconList[name]}
      beforeInjection={(svg) => {
        svg.setAttribute(
          "style",
          `width: ${size}; height: ${size}; fill: ${fill}; stroke: ${stroke}`,
        )
      }}
    />
  )
}
