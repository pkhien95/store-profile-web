import {
  UPDATE_STORE_FAILURE, UPDATE_STORE_REQUEST,
  UPDATE_STORE_SUCCESS,
  UPLOAD_IMAGE_FAILURE,
  UPLOAD_IMAGE_REQUEST,
  UPLOAD_IMAGE_SUCCESS
} from './action-types'
import { StoreInfo } from '../../../../shared/constants/types'

export const uploadImageRequest = (imageData: any) => ({
  type: UPLOAD_IMAGE_REQUEST,
  payload: { imageData }
})

export const uploadImageSuccess = (imageUrl: string) => ({
  type: UPLOAD_IMAGE_SUCCESS,
  payload: { imageUrl }
})

export const uploadImageFailure = (error: any) => ({
  type: UPLOAD_IMAGE_FAILURE,
  payload: { error }
})

export const updateStoreRequest = (store: StoreInfo) => ({
  type: UPDATE_STORE_REQUEST,
  payload: { store }
})

export const updateStoreSuccess = (store: string) => ({
  type: UPDATE_STORE_SUCCESS,
  payload: { store }
})

export const updateStoreFailure = (error: any) => ({
  type: UPDATE_STORE_FAILURE,
  payload: { error }
})
