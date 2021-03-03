import { combineReducers } from 'redux'
import basicReducer from './basic'
import usersReducers from './users'

const rootReducers = combineReducers({
  basic: basicReducer,
  users: usersReducers
})

export default rootReducers