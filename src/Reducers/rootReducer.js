import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { gameReducer } from "./gameReducer";
import { genderReducer } from "./genderReduce";


//////<<<<<------------------------------------------------``


const rootReducer = combineReducers(


    {
        auth : authReducer,
        game : gameReducer,
        gender : genderReducer
    }

);


//////---------------------------------------------->>>>>


export { rootReducer };