
function reducer(state, action){
  switch (action.type) {
    case "testing":
      return {...state, age: state.age + 1}
      break;
  
    default:
      break;
  }

}

export default reducer;