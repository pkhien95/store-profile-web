import React, { Component } from 'react'
import './styles.scss'
import { StoreInfo } from '../../../shared/constants/types'
import { combineAddress } from '../../../shared/utils'
import DefaultButton from '../../../shared/components/DefaultButton/DefaultButton'
import { RouteComponentProps } from 'react-router-dom'

export interface ViewStoreComponentProps extends StoreInfo {
  fetchStore: (id: number) => void
}

class ViewStoreComponent extends Component<
  ViewStoreComponentProps & RouteComponentProps
> {
  componentDidMount() {
    const { fetchStore } = this.props
    fetchStore(1)
  }

  editProfileOnClick = () => {
    this.props.history.push('/edit')
  }

  render() {
    const {
      name,
      phone,
      address,
      image,
      company: {
        name: companyName,
        address: companyAddress,
        tax_code: companyTaxCode
      }
    } = this.props
    const combinedStoreAddress = combineAddress(address)
    const combinedCompanyAddress = combineAddress(companyAddress)

    return (
      <div className={'container'}>
        <div className={'header'}>
          <span className={'header-title'}>Store Information</span>
          <div className={'header-divider'} />
        </div>
        <div className={'content'}>
          <div className={'left-column'}>
            <img className={'photo'} src={image} />
            <div className={'store-info'}>
              <span className={'block-title'}>Store Info.</span>
              <div className={'row'}>
                <span className={'label'}>Name</span>
                <span className={'text'}>{name}</span>
              </div>
              <div className={'row'}>
                <span className={'label'}>Address</span>
                <span className={'text'}>{combinedStoreAddress}</span>
              </div>
              <div className={'row'}>
                <span className={'label'}>Phone #</span>
                <span className={'text'}>{phone}</span>
              </div>
            </div>
            <div className={'red-invoice-info'}>
              <span className={'block-title'}>Red Invoice Info</span>
              <div className={'row'}>
                <span className={'label'}>Company Name</span>
                <span className={'text'}>{companyName}</span>
              </div>
              <div className={'row'}>
                <span className={'label'}>Address</span>
                <span className={'text'}>{combinedCompanyAddress}</span>
              </div>
              <div className={'row'}>
                <span className={'label'}>MST</span>
                <span className={'text'}>{companyTaxCode}</span>
              </div>
            </div>
            <DefaultButton
              className={'edit-profile-btn'}
              text={'Edit Profile'}
              onClick={this.editProfileOnClick}
            />
          </div>
          <div className={'right-column'}>
            <span className={'block-title'}>Deliver default message</span>
            <span>This will not be implemented as in the requirements</span>
            <span>
              Please note that I dont use cloud storage for images, so your
              images will be cleared when the application restart
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default ViewStoreComponent
