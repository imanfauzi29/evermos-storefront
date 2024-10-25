import Icon from "@/components/icon"
import style from "./Collapsible.module.css"
import React, { useRef, useState } from "react"

interface CollapsibleProps {
  defaultOpen?: boolean
}
export default function Collapsible({
  defaultOpen,
  children,
}: React.PropsWithChildren<CollapsibleProps>) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleCollapse = () => setIsOpen(!isOpen)

  return (
    <div>
      <button
        className={style.btnCollapsible}
        type="button"
        onClick={toggleCollapse}
      >
        <span>menu</span> <Icon name="chevron-down" size="18px" />
      </button>
      <div
        ref={menuRef}
        className={style.menu}
        style={{
          height: isOpen ? `${menuRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <div>{children}</div>
      </div>
    </div>
  )
}
