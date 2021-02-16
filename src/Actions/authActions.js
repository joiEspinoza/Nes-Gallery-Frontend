import Swal from 'sweetalert2';
import { BackendConnect } from '../Backend/BackendConnect';
import { swalMsg } from '../Helper/helpers';
import { swalMsg2 } from '../Helper/swalMsg';
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
            return Swal.fire( '', 'Please contact the administrator' , 'error' );
        };

    };

};


const login = ( user ) => ( { type : types.login, payload : user } );


const startRegister = ( userData ) =>
{
    return async () => 
    {

        try 
        {
            const request = await BackendConnect( 'auth/register', userData, 'POST' );

            const response = await request.json();

            if( response.ok )
            {
                return Swal.fire( '', 'The user was created successfully' ,'success' );
            }
            else
            {
                return Swal.fire( '', swalMsg( response ) , 'error' );
            };

        } 
        catch( error ) 
        {
            return Swal.fire( '', 'Please contact the administrator' , 'error' );
        };

    };
    
};


const startUpdatePassword = ( _id, newPassword, oldPassword ) =>
{
    return async () => 
    {

        try 
        {

            const btnClear = document.getElementById( 'clear' );

            const request = await BackendConnect( 'auth/updatePassword', { _id, oldPassword, newPassword }, 'PUT' );
            
            const response = await request.json();

            if( response.ok )
            {
                btnClear.click();
                return Swal.fire( '', response.msg ,'success' );
            }
            else
            {

                return Swal.fire( '', swalMsg2( response ) ,'error' );
                
            };

        } 
        catch( error ) 
        {
            return Swal.fire( '', 'Please contact the administrator' , 'error' );
        };

    };
    
};



const logout = () => ( { type : types.clearUser } )


//////---------------------------------------------->>>>>


export { startLogin, startRegister, startUpdatePassword, logout }