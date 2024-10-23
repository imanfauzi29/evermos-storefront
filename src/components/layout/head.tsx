import Head from "next/head"

export type MetaData = {
  description: string
}

interface HeadPageProps {
  pageTitle: string
  meta?: Partial<MetaData>
}

export default function HeadPage({ pageTitle, meta }: HeadPageProps) {
  const {
    description = "Temukan dan beli produk terbaik dengan mudah dan cepat. Nikmati pengalaman belanja online yang praktis dengan katalog lengkap dan detail produk yang informatif.",
  } = meta

  return (
    <Head>
      <title>{pageTitle} | MarketApp</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
