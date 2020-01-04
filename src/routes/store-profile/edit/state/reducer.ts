import {
  UPLOAD_IMAGE_FAILURE,
  UPLOAD_IMAGE_REQUEST,
  UPLOAD_IMAGE_SUCCESS
} from './action-types'
import update from 'immutability-helper'
import { DefaultAction } from '../../../../shared/constants/types'

const initialState = {
  uploadingImage: false,
  uploadedImageUrl: ''
}

const reducer = (state: any = initialState, action: DefaultAction) => {
  const { type, payload } = action
  switch (type) {
    case UPLOAD_IMAGE_REQUEST:
      return update(state, {
        uploadingImage: { $set: true },
        uploadedImageUrl: { $set: '' }
      })
    case UPLOAD_IMAGE_SUCCESS:
      const { imageUrl } = payload
      return update(state, {
        uploadingImage: { $set: false },
        uploadedImageUrl: { $set: imageUrl }
      })

    case UPLOAD_IMAGE_FAILURE:
      return update(state, {
        uploadingImage: { $set: false }
      })

    default:
      return state
  }
}

export default reducer
