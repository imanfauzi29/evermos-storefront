import React from "react"
import Footer from "@/components/layout/footer"
import HeadPage, { MetaData } from "@/components/layout/head"

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
      <main>{children}</main>

      <Footer />
    </>
  )
}
