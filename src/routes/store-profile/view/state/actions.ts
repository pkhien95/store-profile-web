import {
  FETCH_STORE_FAILURE,
  FETCH_STORE_REQUEST,
  FETCH_STORE_SUCCESS
} from './action-types'
import { StoreInfo } from '../../../../shared/constants/types'

export const fetchStoreRequest = (id: number) => ({
  type: FETCH_STORE_REQUEST,
  payload: { id }
})

export const fetchStoreSuccess = (result: StoreInfo) => ({
  type: FETCH_STORE_SUCCESS,
  payload: { result }
})

export const fetchStoreFailure = (error: any) => ({
  type: FETCH_STORE_FAILURE,
  payload: { error }
})
