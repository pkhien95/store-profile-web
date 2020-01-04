import React, { Component } from 'react'
import styles from './EditStore.module.scss'
import { RouteComponentProps } from 'react-router-dom'
import { StoreInfo } from '../../../shared/constants/types'
import { cloneDeep, isEmpty, head } from 'lodash'
import ReactLoading from 'react-loading'
import DefaultInput from '../../../shared/components/DefaultInput/DefaultInput'
import update from 'immutability-helper'

export interface EditStoreProps extends StoreInfo {
  uploadingImage: boolean
  uploadedImageUrl: string
  uploadImage: (imageData: any) => void
  updateStore: (store: StoreInfo) => void
}

interface State extends StoreInfo {}

type PropsWithRouter = EditStoreProps & RouteComponentProps

class EditStoreComponent extends Component<PropsWithRouter, State> {
  constructor(props: PropsWithRouter) {
    super(props)

    this.state = cloneDeep(this.props)
  }

  componentDidUpdate(
    prevProps: Readonly<PropsWithRouter>,
    prevState: Readonly<State>,
    snapshot?: any
  ): void {
    const { uploadingImage, uploadedImageUrl } = this.props
    const { image } = this.state
    if (
      !uploadingImage &&
      !isEmpty(uploadedImageUrl) &&
      uploadedImageUrl !== image
    ) {
      this.setState({
        image: uploadedImageUrl
      })
    }
  }

  onImageSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const image = head(event.target.files)
    if (image) {
      this.props.uploadImage(image)
    }
  }

  storeNameOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: event.target.value
    })
  }

  storeStreetAddressOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(
      update(this.state, {
        address: {
          street_address: {
            $set: event.target.value
          }
        }
      })
    )
  }

  storeDistrictOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(
      update(this.state, {
        address: {
          district: {
            $set: event.target.value
          }
        }
      })
    )
  }

  storeCityOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(
      update(this.state, {
        address: {
          city: {
            $set: event.target.value
          }
        }
      })
    )
  }

  storePhoneOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      phone: event.target.value
    })
  }

  companyNameOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(
      update(this.state, {
        company: {
          name: {
            $set: event.target.value
          }
        }
      })
    )
  }

  companyStreetAddressOnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState(
      update(this.state, {
        company: {
          address: {
            street_address: {
              $set: event.target.value
            }
          }
        }
      })
    )
  }

  companyDistrictOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(
      update(this.state, {
        company: {
          address: {
            district: {
              $set: event.target.value
            }
          }
        }
      })
    )
  }

  companyCityOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(
      update(this.state, {
        company: {
          address: {
            city: {
              $set: event.target.value
            }
          }
        }
      })
    )
  }

  companyTaxCodeOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(
      update(this.state, {
        company: {
          tax_code: {
            $set: event.target.value
          }
        }
      })
    )
  }

  saveOnClick = () => {
    const { id, name, image, address, phone, company } = this.state
    const newStore: StoreInfo = {
      id,
      name,
      phone,
      image,
      address,
      company
    }

    this.props.updateStore(newStore)
  }

  render() {
    const {
      image,
      name,
      phone,
      address: { street_address, district, city },
      company: {
        name: companyName,
        tax_code: companyTaxCode,
        address: {
          street_address: companyStreetAddress,
          district: companyDistrict,
          city: companyCity
        }
      }
    } = this.state

    const { uploadingImage } = this.props

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.headerTitle}>Edit Store Profile</span>
          <div className={styles.headerDivider} />
        </div>
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <div className={styles.photoContainer}>
              <img className={styles.photo} src={image} alt={'store-image'} />
              {uploadingImage && (
                <ReactLoading
                  className={styles.loading}
                  type={'bubbles'}
                  color={'blue'}
                />
              )}
            </div>

            <div className={styles.buttonContainer}>
              <button className={styles.removeBtn}>Remove</button>
              <label htmlFor='upload-photo'>Upload Image</label>
              <input
                type={'file'}
                id={'upload-photo'}
                onChange={this.onImageSelected}
              />
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.block}>
              <span className={styles.blockTitle}>BASIC INFO.</span>
              <DefaultInput
                className={styles.storeNameInput}
                label={'Store Name'}
                placeholder={'Name'}
                value={name}
                onChange={this.storeNameOnChange}
              />
              <div className={styles.addressContainer}>
                <DefaultInput
                  className={styles.streetAddressInput}
                  label={'Store Address'}
                  placeholder={'Address'}
                  value={street_address}
                  onChange={this.storeStreetAddressOnChange}
                />
                <DefaultInput
                  className={styles.districtInput}
                  placeholder={'District'}
                  value={district}
                  onChange={this.storeDistrictOnChange}
                />
                <DefaultInput
                  className={styles.cityInput}
                  placeholder={'City'}
                  value={city}
                  onChange={this.storeCityOnChange}
                />
              </div>
              <DefaultInput
                className={styles.phoneInput}
                label={'Phone #'}
                placeholder={'Phone'}
                value={phone}
                onChange={this.storePhoneOnChange}
              />
            </div>

            <div className={styles.block}>
              <span className={styles.blockTitle}>RED INVOICE INFO.</span>
              <DefaultInput
                className={styles.companyNameInput}
                label={'Company Name'}
                placeholder={'Name'}
                value={companyName}
                onChange={this.companyNameOnChange}
              />
              <div className={styles.addressContainer}>
                <DefaultInput
                  className={styles.streetAddressInput}
                  label={'Company Address'}
                  placeholder={'Address'}
                  value={companyStreetAddress}
                  onChange={this.companyStreetAddressOnChange}
                />
                <DefaultInput
                  className={styles.districtInput}
                  placeholder={'District'}
                  value={companyDistrict}
                  onChange={this.companyDistrictOnChange}
                />
                <DefaultInput
                  className={styles.cityInput}
                  placeholder={'City'}
                  value={companyCity}
                  onChange={this.companyCityOnChange}
                />
              </div>
              <DefaultInput
                className={styles.taxCodeInput}
                label={'MST'}
                placeholder={'MST'}
                value={companyTaxCode}
                onChange={this.companyTaxCodeOnChange}
              />
            </div>

            <button className={styles.saveButton} onClick={this.saveOnClick}>
              Save
            </button>

            <button className={styles.cancelButton}>Cancel</button>
          </div>
        </div>
      </div>
    )
  }
}

export default EditStoreComponent
