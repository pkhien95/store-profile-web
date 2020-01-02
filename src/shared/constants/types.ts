export interface Address {
  street_address: string
  district: string
  city: string
}

export interface CompanyInfo {
  name: string
  taxCode: string
  address: Address
}

export interface StoreInfo {
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
