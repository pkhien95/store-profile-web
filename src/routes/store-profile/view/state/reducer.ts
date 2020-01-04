import {
  Address,
  CompanyInfo,
  DefaultAction,
  StoreInfo
} from '../../../../shared/constants/types'
import { FETCH_STORE_SUCCESS } from './action-types'
import update from 'immutability-helper'
import { UPDATE_STORE_SUCCESS } from '../../edit/state/action-types'

const initialAddress: Address = {
  id: 1,
  street_address: '',
  district: '',
  city: ''
}

const initialCompany: CompanyInfo = {
  id: 1,
  name: '',
  tax_code: '',
  address: initialAddress
}

const initialState: StoreInfo = {
  id: 1,
  name: '',
  phone: '',
  image: '',
  address: initialAddress,
  company: initialCompany
}

const reducer = (state = initialState, action: DefaultAction) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_STORE_SUCCESS:
    case UPDATE_STORE_SUCCESS:
      const { result } = payload
      return {
        ...state,
        ...result
      }
    default:
      return state
  }
}

export default reducer
