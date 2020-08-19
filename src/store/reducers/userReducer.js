import * as actionsTypes from '../actions/actionTypes'

const initialState = {
  test: ''
}

export default userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.GET_USER:
      return {
        ...state,
        test: action.payload
      }
    default:
      return state
  }
}