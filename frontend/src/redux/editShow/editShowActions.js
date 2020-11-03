import {UPSHOW} from './editShowTypes';

export const upShow = data => {
  return {
    type: UPSHOW,
    payload: data
  }
}