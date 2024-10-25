import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { NextPage } from "next"
import { ReactElement, ReactNode } from "react"
import { Open_Sans } from "next/font/google"
import cn from "@/helpers/cn"

const OpenSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
})

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <main className={cn(OpenSans.className)}>
      {getLayout(<Component {...pageProps} />)}
    </main>
  )
}
