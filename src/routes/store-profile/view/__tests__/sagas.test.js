import viewStoreSaga, { fetchStoreAsync } from '../state/sagas'
import { fetchStoreRequest } from '../state/actions'
import { call, takeLatest } from 'redux-saga/effects'
import { FETCH_STORE_REQUEST } from '../state/action-types'
import { fetchStore } from '../../../../services/api/store'

jest.mock('../../../../services/api/imageUpload', () => ({
  uploadImage: jest.fn()
}))

jest.mock('../../../../services/api/store', () => ({
  fetchStore: jest.fn()
}))

describe('Test viewStoreSaga', () => {
  it('should watch fetchStoreRequest', () => {
    const gen = viewStoreSaga()
    expect(gen.next().value).toEqual(
      takeLatest(FETCH_STORE_REQUEST, fetchStoreAsync)
    )
  })

  it('fetchStoreAsync should run correctly', () => {
    fetchStore.mockReturnValueOnce('https://image.jpg')
    const action = fetchStoreRequest(1)
    const gen = fetchStoreAsync(action)
    expect(gen.next().value).toEqual(call(fetchStore, 1))
  })
})
