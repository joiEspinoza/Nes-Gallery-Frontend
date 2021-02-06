import Swal from "sweetalert2";
import { BackendConnect } from "../Backend/BackendConnect";
import { types } from "../Type/types";


//////<<<<<------------------------------------------------``


const startLoadGenders = () =>
{

    return async ( dispatch ) => 
    {
        try 
        {
            const request = await BackendConnect( 'gender/getGenders', {}, 'GET' );

            const response = await request.json();

            if( response.ok )
            {

                dispatch( loadGenders( response.genders ) );

            };

        } 
        catch( error ) 
        {
            console.log( error );
            return Swal.fire( '', 'Something went wrong', 'error' );  
        };

    };

};


const loadGenders = ( genders ) => ( { type : types.loadGenders, payload : genders } );


//////---------------------------------------------->>>>>


export { startLoadGenders };