import { types } from "../Type/types";


//////<<<<<------------------------------------------------``



const initState = 
{
    games : [],
    activeGame : []
};


const gameReducer = ( state = initState, action ) =>
{

    switch ( action.type ) 
    {
    
        case types.loadGames : return { ...state, games : action.payload };

        case types.clearStates : return initState;
        
        default: return state;
            
    };

};


//////---------------------------------------------->>>>>

export { gameReducer };