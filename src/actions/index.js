import * as types from '../count'
export const addItemTodo = (data)=>{
  return{
      type: types.ADDITEM,
      data
  }
}
