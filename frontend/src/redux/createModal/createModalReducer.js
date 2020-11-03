import { OPENCREATEMODAL, CLOSECREATEMODAL } from './createModalTypes';

const initialState = false;

const createModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPENCREATEMODAL:
      return state = true;
    case CLOSECREATEMODAL:
      return state = false;
    default: 
      return state
  }
}

export default createModalReducer;