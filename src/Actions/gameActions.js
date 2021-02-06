import Swal from 'sweetalert2';
import { BackendConnect } from '../Backend/BackendConnect';
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

    }
}


const loadGames = ( games ) => ( { type : types.loadGames, payload : games } );


//////---------------------------------------------->>>>>

export { startLoadGames }