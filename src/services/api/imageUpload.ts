import axios from 'axios'
import config from '../../shared/config'
import { get } from 'lodash'

export const uploadImage = async (imageData: any) => {
  const url = 'https://api.imgur.com/3/upload'
  const clientID = config.IMGUR_CLIENT_ID
  const formData = new FormData()
  formData.append('image', imageData)

  const response = await axios({
    url,
    method: 'POST',
    headers: {
      Authorization: `Client-ID ${clientID}`,
      'content-type': 'multipart/form-data'
    },
    data: formData
  })
  return get(response, 'data.data.link')
}
