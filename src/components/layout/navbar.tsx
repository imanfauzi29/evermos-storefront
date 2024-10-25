import { JetBrains_Mono } from "next/font/google"
import cn from "@/helpers/cn"
import Button from "@/components/button"
import Style from "./Layout.module.css"
import Icon from "@/components/icon"

const jetbrainMono = JetBrains_Mono({
  variable: "--font-jetbrain",
  subsets: ["latin"],
})

export default function Navbar() {
  return (
    <nav className={cn(Style.navContainer)}>
      <h1 className={cn(jetbrainMono.className)}>FSTORE</h1>
      <div className={Style.profile}>
        <Button variant="outline" size="xs" className={Style.btnCart}>
          my cart
          <Icon name={"handbag"} size="12px" />
        </Button>
        <div style={{ paddingBlock: "8px", height: "100%" }}>
          <div className={"vertical-divider"} />
        </div>
        <div className={Style.profileImage}>
          <img src="./img/profile-image.png" alt="profile" />
        </div>
      </div>
    </nav>
  )
}
