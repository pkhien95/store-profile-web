import { connect } from 'react-redux'
import ViewStoreComponent from './ViewStoreComponent'
import { StoreInfo } from '../../../shared/constants/types'
import { fetchStoreRequest } from './state/actions'
import { compose, Dispatch } from 'redux'
import { withRouter } from 'react-router-dom'
import React from 'react'

const mapStateToProps = (state: any) => {
  const viewStoreData: StoreInfo = state.viewStore
  return {
    ...viewStoreData
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchStore: (id: number) => dispatch(fetchStoreRequest(id))
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ViewStoreComponent) as React.ComponentType
