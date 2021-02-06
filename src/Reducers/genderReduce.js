import { types } from "../Type/types";


//////<<<<<------------------------------------------------``



const initState = 
{
    genders : []
};


const genderReducer = ( state = initState, action ) =>
{

    switch ( action.type ) 
    {
    
        case types.loadGenders : return { ...state, genders : action.payload };

        case types.clearStates : return initState;
        
        default: return state;
            
    };

};


//////---------------------------------------------->>>>>

export { genderReducer };