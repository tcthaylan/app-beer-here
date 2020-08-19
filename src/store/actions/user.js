import * as actionTypes from './actionTypes'

export const getUser = () => dispatch => {
  dispatch({
    type: actionTypes.GET_USER,
    payload: 'teste'
  })
}