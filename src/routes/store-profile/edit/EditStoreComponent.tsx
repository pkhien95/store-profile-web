import React, { Component } from 'react'
import styles from './EditStore.module.scss'
import { RouteComponentProps } from 'react-router-dom'
import { StoreInfo } from '../../../shared/constants/types'
import { cloneDeep, head, isEmpty } from 'lodash'
import ReactLoading from 'react-loading'
import DefaultInput from '../../../shared/components/DefaultInput/DefaultInput'
import update from 'immutability-helper'
import { ToastType } from '../../../shared/components/Toast/Toast'

export interface EditStoreProps extends StoreInfo {
  uploadingImage: boolean
  uploadedImageUrl: string
  needReload: boolean
  updating: boolean
  error: string
  uploadImage: (imageData: any) => void
  updateStore: (store: StoreInfo) => void
  fetchStore: (id: number) => void
  showToast: (type: ToastType, message: string) => void
}

interface State extends StoreInfo {
  imageHash: number
}

type PropsWithRouter = EditStoreProps & RouteComponentProps

class EditStoreComponent extends Component<PropsWithRouter, State> {
  constructor(props: PropsWithRouter) {
    super(props)

    this.state = { ...cloneDeep(this.props), imageHash: Date.now() }
  }

  reloadState = () => {
    this.setState({
      ...cloneDeep(this.props),
      imageHash: Date.now()
    })
  }

  componentDidUpdate(
    prevProps: Readonly<PropsWithRouter>,
    prevState: Readonly<State>,
    snapshot?: any
  ): void {
    const {
      uploadingImage,
      uploadedImageUrl,
      needReload,
      updating,
      error
    } = this.props
    const {
      uploadingImage: prevUploadingImage,
      uploadedImageUrl: prevUploadedImageUrl,
      needReload: prevNeedReload,
      updating: prevUpdating,
      error: prevError
    } = prevProps
    const { image } = this.state
    if (
      !uploadingImage &&
      !isEmpty(uploadedImageUrl) &&
      uploadedImageUrl !== image &&
      prevUploadingImage !== uploadingImage &&
      prevUploadedImageUrl !== uploadedImageUrl
    ) {
      this.setState({
        image: uploadedImageUrl
      })
    }

    if (needReload && prevNeedReload !== needReload) {
      this.reloadState()
    }

    if (!updating && isEmpty(error) && updating !== prevUpdating) {
      this.props.showToast(ToastType.INFO, 'Updated store info successfully')
    }

    if (
      !updating &&
      !isEmpty(error) &&
      updating !== prevUpdating &&
      error !== prevError
    ) {
      this.props.showToast(ToastType.ERROR, error)
    }
  }

  componentDidMount(): void {
    if (isEmpty(this.props.name)) {
      this.props.fetchStore(1)
    }
  }

  //region handlers
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
    const newPhoneNumber = event.target.value
    this.setState({
      phone: newPhoneNumber
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

  isPhoneNumberValid = (phone: string) => {
    const regex = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i
    return !isEmpty(phone) && phone.match(regex)
  }

  saveOnClick = () => {
    const { id, name, image, address, phone, company } = this.state

    let isValid = this.isPhoneNumberValid(phone)
    if (!isValid) {
      this.props.showToast(ToastType.ERROR, 'Phone number is not valid')
      return
    }

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

  removeOnClick = () => {
    console.log(this.state.image)
    console.log(this.props.image)
    this.setState({
      image: this.props.image,
      imageHash: Date.now()
    })
  }

  cancelOnClick = () => {
    this.props.history.goBack()
  }
  //endregion

  render() {
    const {
      image,
      imageHash,
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

    const { uploadingImage, updating } = this.props

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.headerTitle}>Edit Store Profile</span>
          <div className={styles.headerDivider} />
        </div>
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <div className={styles.photoContainer}>
              <img
                className={styles.photo}
                src={`${image}?${imageHash}`}
                alt={'store'}
              />
              {uploadingImage && (
                <ReactLoading
                  className={styles.loading}
                  type={'bubbles'}
                  color={'#54A46E'}
                />
              )}
            </div>

            <div className={styles.buttonContainer}>
              <button className={styles.removeBtn} onClick={this.removeOnClick}>
                Remove
              </button>
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

            <div className={styles.saveButtonContainer}>
              {updating ? (
                <ReactLoading
                  className={styles.saveButtonLoading}
                  type={'bubbles'}
                  color={'white'}
                />
              ) : (
                <button
                  className={styles.saveButton}
                  onClick={this.saveOnClick}
                  disabled={updating}
                >
                  Save
                </button>
              )}
            </div>
            <button className={styles.cancelButton} onClick={this.cancelOnClick}>Cancel</button>
          </div>
        </div>
      </div>
    )
  }
}

export default EditStoreComponent
