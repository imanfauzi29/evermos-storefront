export interface Catalog {
  id: number
  product_name: string
  actual_price: number
  price: number
  discount: number
  total_sold: number
  rating: Rating
  stocks: number
  category: string
  product_detail: ProductDetail
}

export interface Rating {
  average_rating: number
  total_reviews: number
}

export interface ProductDetail {
  description: string
  specs: Specs
  variants: Variant[]
  image_url: string[]
}

export interface Specs {
  brand: string
  warranty_type: string
  condition: string
}

export interface Variant {
  color?: string
  stock: number
  storage?: string
  switch?: string
}
