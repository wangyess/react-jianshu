const defaultValue = {
   list:[
      'Racing car sprays burning fuel into crowd.',
      'Japanese princess to wed commoner.',
   ]
}

function todos( state = defaultValue,action){
   switch(action.type){
    case 'add-item':
      const newState = JSON.parse(JSON.stringify(state))
      newState.list.push(action.data)
      return newState
    default:
      return state
   }
}

export default todos