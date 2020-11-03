import { OPENCREATEMODAL, CLOSECREATEMODAL } from './createModalTypes';

export const openCreateModal = () => {
  return {
    type: OPENCREATEMODAL
  }
}

export const closeCreateModal = () => {
  return {
    type: CLOSECREATEMODAL
  }
}