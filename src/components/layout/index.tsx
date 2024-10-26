import React from "react"
import Footer from "@/components/layout/footer"
import { MetaData } from "@/components/layout/head"
import Navbar from "@/components/layout/navbar"
import cn from "@/helpers/cn"
import styles from "./Layout.module.css"

interface LayoutProps {
  pageTitle: string
  meta?: Partial<MetaData>
}

export default function Layout({
  children,
}: React.PropsWithChildren<LayoutProps>) {
  return (
    <>
      <div className={cn("flex-col", styles.wrapper)}>
        <Navbar />
        <main className="flex-1">
          <div style={{ marginBottom: "30px" }}>breadcrumb here</div>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
