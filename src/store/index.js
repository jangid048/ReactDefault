import { applyMiddleware, } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import reducer from '../reducers'
import logger from 'redux-logger';
import rootSaga from '../saga/index'


const sagaMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({
  immutableCheck: { warnAfter: 128 },
  serializableCheck: { warnAfter: 128 },
  thunk: false, serializableCheck: false,
  immutableCheck: true
}),
  sagaMiddleware];
// middleware.push(logger);

const store = configureStore(
  {
    reducer,
    middleware

  })
sagaMiddleware.run(rootSaga)
export default store