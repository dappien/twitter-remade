
import { MODAL_OPEN, MODEL_CLOSED } from "../actionType"

const initialState = {
    situation:false,
}

export const modalReducer = (prevState = initialState ,action) => {
    
    const {type,payload} = action

    switch(type){
        case MODAL_OPEN:
            return {
                ...prevState,
                situation:true,
            }
        case MODEL_CLOSED:
            return {
                ...prevState,
                situation:false,
            }
        
            default:
                return prevState
    }


}