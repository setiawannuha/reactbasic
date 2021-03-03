import { createStore, applyMiddleware } from 'redux'
import rootReducers from './reducers/root'
import reduxPromise from 'redux-promise-middleware'

const middleware = applyMiddleware(
  reduxPromise
)

const storeRedux = createStore(rootReducers, middleware)

export default storeRedux