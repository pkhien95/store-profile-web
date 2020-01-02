import { connect, DispatchProp } from 'react-redux'
import ViewStoreComponent from './ViewStoreComponent'
import { StoreInfo } from '../../../shared/constants/types'
import { fetchStoreRequest } from './state/actions'
import { Dispatch } from 'redux'

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

export default connect(mapStateToProps, mapDispatchToProps)(ViewStoreComponent)
