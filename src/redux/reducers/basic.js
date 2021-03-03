// state
const initialState = {
  count: 0,
  dataTambahan: 'Udin'
}

// mutations
const basicReducer = (state=initialState, action) => {
  // switch (action.type) {
  //   case "ADD_DATA":
  //     return {...state, count: state.count + action.payload}
  //   case "REDUCE_DATA":
  //     return {...state, count: state.count - action.payload}
  //   default:
  //     return state
  // }
  if(action.type === "ADD_DATA"){
    return {...state, count: state.count + action.payload}
  }
  else if(action.type === "REDUCE_DATA"){
    return {...state, count: state.count - action.payload}
  }
  else{
    return state
  }
}

export default basicReducer