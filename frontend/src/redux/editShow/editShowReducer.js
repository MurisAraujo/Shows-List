import { UPSHOW } from './editShowTypes';

const initialState = {};

const editShowReducer = (state = initialState, action) => {
  if(action.type === UPSHOW){
    return action.payload;
  }
  else{
    return state;
  }
}

export default editShowReducer;