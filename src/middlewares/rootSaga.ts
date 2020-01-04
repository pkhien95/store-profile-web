import { all } from 'redux-saga/effects'
import { viewStoreSaga, editStoreSaga } from '../routes/store-profile'

export default function* rootSaga() {
  yield all([viewStoreSaga(), editStoreSaga()])
}
