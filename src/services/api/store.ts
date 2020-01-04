import axios from 'axios'
import config from '../../shared/config'
import { StoreInfo } from '../../shared/constants/types'

export const fetchStore = async (id: number) => {
  const url = `${config.API_URL}/stores/${id}`
  return await axios.get(url)
}

export const updateStore = async (store: StoreInfo) => {
  const url = `${config.API_URL}/stores/${store.id}`
  return await axios.patch(url, store)
}
