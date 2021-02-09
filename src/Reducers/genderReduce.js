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

        default: return state;
            
    };

};


//////---------------------------------------------->>>>>

export { genderReducer };