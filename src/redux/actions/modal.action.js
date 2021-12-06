import { useSelector } from 'react-redux';
import { MODAL_OPEN, MODEL_CLOSED } from '../actionType';
import { modalReducer } from '../reducers/modal.reducer';


export const openModal = () => async dispatch=>{
    dispatch({
        type:MODAL_OPEN
    })
} 

export const closeModal = () => async dispatch=>{
    dispatch({
        type:MODEL_CLOSED
    })
} 