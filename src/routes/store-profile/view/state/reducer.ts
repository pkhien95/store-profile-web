import {
  Address,
  CompanyInfo,
  DefaultAction,
  StoreInfo
} from '../../../../shared/constants/types'
import { FETCH_STORE_SUCCESS } from './action-types'
import update from 'immutability-helper'

const initialAddress: Address = {
  street_address: '01 Nguyen Thi Minh Khai',
  district: '1',
  city: 'Ho Chi Minh'
}

const initialCompany: CompanyInfo = {
  name: 'Kamero Inc.',
  tax_code: '123456',
  address: initialAddress
}

const initialState: StoreInfo = {
  name: 'Store 01',
  phone: '84975542248',
  image:
    'https://www.imore.com/sites/imore.com/files/styles/mediumplus/public/field/image/2019/11/catlina-photo.jpeg',
  address: initialAddress,
  company: initialCompany
}

const reducer = (state = initialState, action: DefaultAction) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_STORE_SUCCESS:
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
