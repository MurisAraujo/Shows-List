import { MODOPEN, MODCLOSE } from './editModalTypes';

export const openEdModal = () => {
  return{
    type: MODOPEN
  }
}

export const closeEdModal = () => {
  return{
    type: MODCLOSE
  }
}