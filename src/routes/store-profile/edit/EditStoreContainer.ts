import { connect } from 'react-redux'
import EditStoreComponent from './EditStoreComponent'
import { withRouter } from 'react-router-dom'
import { compose, Dispatch } from 'redux'
import React from 'react'
import { updateStoreRequest, uploadImageRequest } from './state/actions'
import { fetchStoreRequest } from '../view/state/actions'
import { ToastType } from '../../../shared/components/Toast/Toast'
import { showToast } from '../../../shared/components/Toast/state/actions'

const mapStateToProps = (state: any) => {
  return {
    ...state.viewStore,
    ...state.editStore
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    uploadImage: (imageData: any) => dispatch(uploadImageRequest(imageData)),

    updateStore: (store: any) => dispatch(updateStoreRequest(store)),

    fetchStore: (id: number) => dispatch(fetchStoreRequest(id)),

    showToast: (type: ToastType, message: string) =>
      dispatch(showToast(type, message))
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(EditStoreComponent) as React.ComponentType
