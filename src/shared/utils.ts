import { Address } from './constants/types'

export const combineAddress = (address: Address) => {
  const { street_address = '', city = '', district = '' } = address
  return `${street_address}, ${district}, ${city}`
}
