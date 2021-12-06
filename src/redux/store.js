import { createStore, applyMiddleware,combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {authReducer} from './reducers/auth.reducer'
import { modalReducer } from "./reducers/modal.reducer";


const rootReducer = combineReducers({
    auth:authReducer,
    modal:modalReducer

})

const store= createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
)


export default store 