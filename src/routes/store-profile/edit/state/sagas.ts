import { takeLatest, call, put } from 'redux-saga/effects'
import { UPDATE_STORE_REQUEST, UPLOAD_IMAGE_REQUEST } from './action-types'
import { DefaultAction } from '../../../../shared/constants/types'
import { uploadImage } from '../../../../services/api/imageUpload'
import {
  updateStoreFailure,
  updateStoreSuccess,
  uploadImageFailure,
  uploadImageSuccess
} from './actions'
import { isEmpty } from 'lodash'
import { updateStore } from '../../../../services/api/store'

export function* uploadImageAsync(action: DefaultAction) {
  try {
    const {
      payload: { imageData }
    } = action
    const link = yield call(uploadImage, imageData)
    if (!isEmpty(link)) {
      yield put(uploadImageSuccess(link))
    }
  } catch (error) {
    yield put(uploadImageFailure(error))
  }
}

export function* updateStoreAsync(action: DefaultAction) {
  const {
    payload: { store }
  } = action
  try {
    const updatedStore = yield call(updateStore, store)
    yield put(updateStoreSuccess(updatedStore))
  } catch (error) {
    yield put(updateStoreFailure(error.message || 'Cannot update store'))
  }
}

function* editStoreSaga() {
  yield takeLatest(UPLOAD_IMAGE_REQUEST, uploadImageAsync)

  yield takeLatest(UPDATE_STORE_REQUEST, updateStoreAsync)
}

export default editStoreSaga
