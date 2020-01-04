import { combineReducers } from 'redux'
import { editStoreReducer, viewStoreReducer } from '../routes/store-profile'
import toastReducer from '../shared/components/Toast/state/reducer'

const rootReducer = combineReducers({
  viewStore: viewStoreReducer,
  editStore: editStoreReducer,
  toast: toastReducer
})

export default rootReducer
