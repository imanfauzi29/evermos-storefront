import React from "react"
import Footer from "@/components/layout/footer"
import HeadPage, { MetaData } from "@/components/layout/head"
import Navbar from "@/components/layout/navbar"

interface LayoutProps {
  pageTitle: string
  meta?: Partial<MetaData>
}

export default function Layout({
  children,
  pageTitle,
  meta,
}: React.PropsWithChildren<LayoutProps>) {
  return (
    <>
      <HeadPage pageTitle={pageTitle} meta={meta} />
      <div className="flex-col" style={{ gap: "24px", height: "100vh" }}>
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
