import Swal from "sweetalert2";
import { BackendConnect } from "../Backend/BackendConnect";
import { swalMsg } from "../Helper/swalMsg";
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
            return Swal.fire( '', 'Please contact the administrator', 'error' );  
        };

    };

};


const loadGenders = ( genders ) => ( { type : types.loadGenders, payload : genders } );


const startAddGender = ( descr ) =>
{
    return async ( dispatch ) =>
    {

        try 
        {

           const request = await BackendConnect( 'gender/createGender', { descr }, 'POST' ); 

           const response = await request.json();

           if( response.ok )
           {
                Swal.fire( '', response.msg, 'success' );
                
                dispatch( startLoadGenders() );
           }
           else
           {
                Swal.fire( '', swalMsg( response ), 'error' );
           };

        } 
        catch( error ) 
        {
            console.log( error );
            return Swal.fire( '', 'Please contact the administrator', 'error' );  
        };
        
    };
};


const startDeleteGender = ( _id ) =>
{

    return async ( dispatch ) =>
    {
        try
        {
            const request = await BackendConnect( 'gender/deleteGender', { _id }, 'DELETE' );
            
            const response =  await request.json();

            if( response.ok )
            {

                dispatch( startLoadGenders() );

                Swal.fire( '', response.msg, 'success' );

            };

        }
        catch( error ) 
        {
            console.log( error );
            return Swal.fire( '', 'Please contact the administrator', 'error' );  
        };
    };
}; 


//////---------------------------------------------->>>>>


export { startLoadGenders, startAddGender, startDeleteGender };