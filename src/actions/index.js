import * as types from '../constans'
export const addItemTodo = (data)=>{
  return{
      type: types.ADDITEM,
      data
  }
}
