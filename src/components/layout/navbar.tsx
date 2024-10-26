import { JetBrains_Mono } from "next/font/google"
import cn from "@/helpers/cn"
import Button from "@/components/button"
import Style from "./Layout.module.css"
import Icon from "@/components/icon"
import Link from "next/link"

const jetbrainMono = JetBrains_Mono({
  variable: "--font-jetbrain",
  subsets: ["latin"],
})

export default function Navbar() {
  return (
    <nav className={cn(Style.navContainer)}>
      <Link href="/">
        <h1 className={cn(jetbrainMono.className)}>FSTORE</h1>
      </Link>
      <div className={Style.profile}>
        <Button variant="outline" size="xs" className={Style.btnCart}>
          my cart
          <Icon name={"handbag"} size="12px" />
        </Button>
        <div
          className={"vertical-divider"}
          style={{ height: "60%", margin: "auto 0" }}
        />
        <div className={Style.profileImage}>
          <img src="./img/profile-image.png" alt="profile" />
        </div>
      </div>
    </nav>
  )
}
