import axios from "axios"
import { Catalog } from "@/services/types"

const base_url =
  "https://my-json-server.typicode.com/imanfauzi29/evermos-storefront"

export const getCatalogs = async (): Promise<Catalog[]> => {
  const response = await axios.get(`${base_url}/catalogs`)
  return response.data
}

export const getCatalogById = async (id: number): Promise<Catalog> => {
  const response = await axios.get(`${base_url}/catalogs/${id}`)
  return response.data
}
