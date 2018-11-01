const addressReducer = (state, action) => {
  switch(action.type) {
    case 'GET_USER_ADDRESS':
      return {
        address: action.address
      }
    default:
      return state;
  }
}

export const rootReducer = (state = { address: {} }, action) => {
  return {
    address: addressReducer(state.address, action)
  }
}