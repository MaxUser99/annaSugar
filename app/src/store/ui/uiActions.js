export const OPEN_MODAL = 'OPEN_MODAL';

export const openModal = (modalName, state = null) => ({type: OPEN_MODAL, payload: {modalName, state}});