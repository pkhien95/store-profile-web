import {
  UPDATE_STORE_FAILURE,
  UPDATE_STORE_REQUEST,
  UPDATE_STORE_SUCCESS,
  UPLOAD_IMAGE_FAILURE,
  UPLOAD_IMAGE_REQUEST,
  UPLOAD_IMAGE_SUCCESS
} from './action-types'
import update from 'immutability-helper'
import { DefaultAction } from '../../../../shared/constants/types'
import { FETCH_STORE_SUCCESS } from '../../view/state/action-types'

const initialState = {
  uploadingImage: false,
  uploadedImageUrl: '',
  needReload: false,
  updating: false,
  error: ''
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

    case FETCH_STORE_SUCCESS:
      return update(state, {
        needReload: { $set: true }
      })

    case UPDATE_STORE_REQUEST:
      return update(state, {
        updating: { $set: true },
        error: { $set: '' }
      })

    case UPDATE_STORE_SUCCESS:
      return update(state, {
        updating: { $set: false },
        error: { $set: '' }
      })

    case UPDATE_STORE_FAILURE:
      const {
        payload: { error }
      } = action
      return update(state, {
        updating: { $set: false },
        error: { $set: error }
      })

    default:
      return state
  }
}

export default reducer
