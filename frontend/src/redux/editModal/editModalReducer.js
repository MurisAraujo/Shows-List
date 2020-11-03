import { MODOPEN, MODCLOSE } from './editModalTypes';

const initialState = false;

const editModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODOPEN:
      return state = true
    case MODCLOSE:
      return state = false
    default:
      return state
  }
}

export default editModalReducer;