import axios from 'axios'
import config from '../../shared/config'

export const fetchStore = async (id: number) => {
  console.log(config)
  const url = `${config.API_URL}/stores/${id}`
  return await axios.get(url)
}