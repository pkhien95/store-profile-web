import editStoreSaga, {
  updateStoreAsync,
  uploadImageAsync
} from '../state/sagas'
import { updateStoreRequest, uploadImageRequest } from '../state/actions'
import { takeLatest, call } from 'redux-saga/effects'
import {
  UPDATE_STORE_REQUEST,
  UPLOAD_IMAGE_REQUEST
} from '../state/action-types'
import { uploadImage } from '../../../../services/api/imageUpload'
import { updateStore } from '../../../../services/api/store'

jest.mock('../../../../services/api/imageUpload', () => ({
  uploadImage: jest.fn()
}))

jest.mock('../../../../services/api/store', () => ({
  updateStore: jest.fn()
}))

describe('Test editStoreSaga', () => {
  it('should watch uploadImageRequest and updateStoreRequest', () => {
    const gen = editStoreSaga()
    expect(gen.next().value).toEqual(
      takeLatest(UPLOAD_IMAGE_REQUEST, uploadImageAsync)
    )
    expect(gen.next().value).toEqual(
      takeLatest(UPDATE_STORE_REQUEST, updateStoreAsync)
    )
  })

  it('uploadImageAsync should run correctly', () => {
    uploadImage.mockReturnValueOnce('https://image.jpg')
    const action = uploadImageRequest({})
    const gen = uploadImageAsync(action)
    expect(gen.next().value).toEqual(call(uploadImage, {}))
  })

  it('updateStoreAsync should run correctly', () => {
    updateStore.mockReturnValueOnce({})
    const action = updateStoreRequest({})
    const gen = updateStoreAsync(action)
    expect(gen.next().value).toEqual(call(updateStore, {}))
  })
})
