import { applyMiddleware, createStore } from 'redux'
import rootReducer from './rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../middlewares/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store
