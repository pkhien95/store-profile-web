import { combineReducers } from 'redux'
import { viewStoreReducer } from '../routes/store-profile'

const rootReducer = combineReducers({
  viewStore: viewStoreReducer
})

export default rootReducer
