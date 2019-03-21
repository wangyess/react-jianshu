import { combineReducers } from 'redux'
import todos from './todolist'
const todoApp = combineReducers({
  todos
})

export default todoApp