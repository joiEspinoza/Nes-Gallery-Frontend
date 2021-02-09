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

        case types.setActiveGame : return { ...state, activeGame : action.payload };

        case types.clearActiveGame : return { ...state, activeGame : [] };

        default: return state;
            
    };

};


//////---------------------------------------------->>>>>

export { gameReducer };