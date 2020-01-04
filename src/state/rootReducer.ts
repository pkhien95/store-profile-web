import { combineReducers } from 'redux'
import { editStoreReducer, viewStoreReducer } from '../routes/store-profile'

const rootReducer = combineReducers({
  viewStore: viewStoreReducer,
  editStore: editStoreReducer
})

export default rootReducer
