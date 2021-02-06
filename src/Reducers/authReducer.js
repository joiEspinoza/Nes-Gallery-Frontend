import { types } from "../Type/types";


//////<<<<<------------------------------------------------``



const initState =
{
    _id : null,
    name : null,
    logged : false
};


const authReducer = ( state = initState, action ) =>
{

    switch ( action.type ) 
    {
    
        case types.login : return { ...state, logged : true ,...action.payload };

        case types.clearStates : return initState;
        
        default: return state;
            
    };

};

//////---------------------------------------------->>>>>


export { authReducer };