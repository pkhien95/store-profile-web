export interface Address {
  id: number
  street_address: string
  district: string
  city: string
}

export interface CompanyInfo {
  id: number
  name: string
  tax_code: string
  address: Address
}

export interface StoreInfo {
  id: number
  name: string
  phone: string
  image: string
  address: Address
  company: CompanyInfo
}

export interface DefaultAction {
  type: string
  payload: any
}
