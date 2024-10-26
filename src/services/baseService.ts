import axios from "axios"
import { Catalog } from "@/services/types"

const base_url =
  "https://my-json-server.typicode.com/imanfauzi29/evermos-storefront"

export const getCatalogs = async (query?: string): Promise<Catalog[]> => {
  const response = await axios.get(`${base_url}/catalogs?${query}`)
  return response.data
}

export const getCatalogById = async (id: number): Promise<Catalog> => {
  const response = await axios.get(`${base_url}/catalogs/${id}`)
  return response.data
}
