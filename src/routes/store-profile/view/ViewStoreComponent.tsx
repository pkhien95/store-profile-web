import React, { Component } from 'react'
import './styles.scss'
import { StoreInfo } from '../../../shared/constants/types'

export interface ViewStoreComponentProps extends StoreInfo {}

class ViewStoreComponent extends Component<ViewStoreComponentProps> {
  render() {
    return (
      <div className={'container'}>
        <div className={'header'}>
          <span className={'header-title'}>Store Information</span>
          <div className={'header-divider'} />
        </div>
        <div className={'content'}>
          <div className={'left-column'}>
            <img className={'photo'} />
            <div className={'store-info'}></div>
            <div className={'red-invoice-info'}></div>
          </div>
          <div className={'right-column'}>
            <span></span>
          </div>
        </div>
      </div>
    )
  }
}

export default ViewStoreComponent
