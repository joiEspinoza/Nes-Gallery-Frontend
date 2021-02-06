import Swal from 'sweetalert2';
import { BackendConnect } from '../Backend/BackendConnect';
import { swalMsg } from '../Helper/helpers';
import { types } from '../Type/types';


//////<<<<<------------------------------------------------``


const startLogin = ( userData ) =>
{
    return async ( dispatch ) => 
    {

        try 
        {
            const request = await BackendConnect( 'auth/login', userData, 'POST' );

            const response = await request.json();

            if( response.ok )
            {
                dispatch( login( response.user ) );
                
            }
            else
            {
                return Swal.fire( '', swalMsg( response ) , 'error' );
            };

        } 
        catch( error ) 
        {
            return Swal.fire( '', 'Please contact to the administrtaitor' , 'error' );
        };

    };

};


const login = ( user ) => ( { type : types.login, payload : user } );


const startRegister = ( userData ) =>
{
    return async ( dispatch ) => 
    {

        try 
        {
            const request = await BackendConnect( 'auth/register', userData, 'POST' );

            const response = await request.json();

            if( response.ok )
            {
                return Swal.fire( '', 'User created succefully' ,'success' );
            }
            else
            {
                return Swal.fire( '', swalMsg( response ) , 'error' );
            };

        } 
        catch( error ) 
        {
            return Swal.fire( '', 'Please contact to the administrtaitor' , 'error' );
        };

    };
    
};

//////---------------------------------------------->>>>>

export { startLogin, startRegister }