import Swal from 'sweetalert2';
import { BackendConnect } from '../Backend/BackendConnect';
import { fileUploadCloudinary } from '../Cloudinary/fileUploadCloudinary';
import { swalMsg } from '../Helper/swalMsg';
import { types } from '../Type/types';


//////<<<<<------------------------------------------------``


const startLoadGames = () =>
{
    return async ( dispatch ) => 
    {

        try 
        {
            const request = await BackendConnect( 'game/getGames', {}, 'GET' );

            const response = await request.json();

            if( response.ok )
            {
                dispatch( loadGames( response.games ) );
            }
            else
            {
                return Swal.fire( '', response.msg , 'error' );
            }

        } 
        catch( error ) 
        {
            return Swal.fire( '', 'Please contact to the administrtaitor' , 'error' );
        };

    };
};


const loadGames = ( games ) => ( { type : types.loadGames, payload : games } );


const startAddGame = ( game ) =>
{

    return async ( dispatch ) => 
    {

        try 
        {

            const btnClear = document.getElementById( 'clear' );

            game.url = await fileUploadCloudinary( game.url, game.title );

            game.url2 = await fileUploadCloudinary( game.url2, game.title );

            const request = await BackendConnect( 'game/newGame', game, 'POST' );

            const response = await request.json();

            if( response.ok )
            {

                dispatch( startLoadGames() );

                btnClear.click();

                return Swal.fire( '', response.msg , 'success' );

            }
            else
            {

                return Swal.fire( "", swalMsg( response ), 'error' );

            };

        } 
        catch( error ) 
        {
            return Swal.fire( '', 'Please contact to the administrtaitor' , 'error' );
        };

    };
};


const setActiveGame = ( game ) => ( { type : types.setActiveGame, payload : game } )


const clearActiveGame = () => ( { type : types.clearActiveGame } );

//////---------------------------------------------->>>>>


export { startLoadGames, startAddGame, setActiveGame, clearActiveGame };