import { fetchStore } from '../../../../services/api/store'
import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_STORE_REQUEST } from './action-types'
import { fetchStoreFailure, fetchStoreSuccess } from './actions'

export function* fetchStoreAsync(action: any) {
  const {
    payload: { id }
  } = action
  try {
    const { data } = yield call(fetchStore, id)
    yield put(fetchStoreSuccess(data))
  } catch (error) {
    yield put(fetchStoreFailure(error))
  }
}

function* viewStoreSaga() {
  yield takeLatest(FETCH_STORE_REQUEST, fetchStoreAsync)
}
export default viewStoreSaga
