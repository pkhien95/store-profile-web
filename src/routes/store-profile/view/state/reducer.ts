import {
  Address,
  CompanyInfo, DefaultAction,
  StoreInfo
} from '../../../../shared/constants/types'

const initialAddress: Address = {
  street_address: '',
  district: '',
  city: ''
}

const initialCompany: CompanyInfo = {
  name: '',
  taxCode: '',
  address: initialAddress
}

const initialState: StoreInfo = {
  name: '',
  phone: '',
  image: '',
  address: initialAddress,
  company: initialCompany
}

const reducer = (state = initialState, action: DefaultAction) => {
  // const { type, payload } = action
  // switch (type) {
  //   default:
  //     return state
  // }
  return state
}

export default reducer
