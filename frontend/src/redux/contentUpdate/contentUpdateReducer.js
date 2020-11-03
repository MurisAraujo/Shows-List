import { UPDATECONTENT } from "./contentUpdateTypes";

const initialState = false;

const contentUpdateReducer = (state = initialState, action) => {
  if (action.type === UPDATECONTENT) {
    return !state;
  } else {
    return state;
  }
};

export default contentUpdateReducer;
