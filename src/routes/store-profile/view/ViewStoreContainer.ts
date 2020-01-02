import { connect } from 'react-redux'
import ViewStoreComponent from './ViewStoreComponent'
import { StoreInfo } from '../../../shared/constants/types'

const mapStateToProps = (state: any) => {
  const viewStoreData: StoreInfo = state.viewStore
  return {
    ...viewStoreData
  }
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewStoreComponent)
