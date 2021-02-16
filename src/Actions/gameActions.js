import Swal from 'sweetalert2';
import { BackendConnect } from '../Backend/BackendConnect';
import { fileUploadCloudinary } from '../Cloudinary/fileUploadCloudinary';
import { lockUpdate } from '../Helper/helpers';
import { swalMsg, swalMsg2 } from '../Helper/swalMsg';
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
            };

        } 
        catch( error ) 
        {
            return Swal.fire( '', 'Please contact the administrator' , 'error' );
        };

    };
};


const startLoadGamesByGender = ( gender ) =>
{
    return async ( dispatch ) => 
    {

        try 
        {

            const request = await BackendConnect( 'game/getGamesByGender', { gender }, 'POST' );

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
            return Swal.fire( '', 'Please contact the administrator' , 'error' );
        };

    };
};


const startLoadGamesByTitle = ( search ) =>
{
    return async ( dispatch ) => 
    {

        try 
        {

            const request = await BackendConnect( 'game/getGamesByTitle', { search }, 'POST' );

            const response = await request.json();

            if( response.ok )
            {
                document.getElementById( 'search' ).value = '';
                
                dispatch( loadGames( response.games ) );
            }
            else
            {
                return Swal.fire( '', swalMsg2( response ) , 'error' );
            };

        } 
        catch( error ) 
        {
            return Swal.fire( '', 'Please contact the administrator' , 'error' );
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
            return Swal.fire( '', 'Please contact the administrator' , 'error' );
        };

    };
};


const startUpdateGame = ( game ) =>
{
    return async ( dispatch ) => 
    {

        try 
        {

            const request = await BackendConnect( 'game/updateGame', game, 'PUT' );

            const response = await request.json();

            if( response.ok )
            {

                lockUpdate();

                dispatch( startLoadGames() );

                dispatch( setActiveGame( [ game ] ) );


                return Swal.fire
                (
                    {
                        title : '',
                        text: `${ response.msg }`,
                        icon : 'success',
                        confirmButtonText: `Ok`,

                    })
                    .then( ( result ) => 
                    {

                        if( result.isConfirmed ) 
                        {
                            window.location.reload();
                        };

                    }
                );

            }
            else
            {
                return Swal.fire( "", swalMsg( response ), 'error' );
            };

        } 
        catch( error ) 
        {
            return Swal.fire( '', 'Please contact the administrator' , 'error' );
        };

    };
};


const startDeleteGame = ( _id ) =>
{
    return async ( dispatch ) =>
    {

        try 
        {

            const request = await BackendConnect( 'game/deleteGame', { _id }, 'DELETE' );

            const response = await request.json();

            if( response.ok )
            {

                dispatch( startLoadGames() );

                document.getElementById( 'navBackBtn' ).click();
                
                return Swal.fire( '', response.msg , 'success' );

            }
            else
            {

                return Swal.fire( "", swalMsg( response ), 'error' );

            };

        } 
        catch( error ) 
        {
            return Swal.fire( '', 'Please contact the administrator' , 'error' );
        };
        
    };
    
};

const setSpliceGames = ( poolGames ) => ( { type : types.setSpliceGames, payload : poolGames } )


const setActiveGame = ( game ) => ( { type : types.setActiveGame, payload : game } );


const clearActiveGame = () => ( { type : types.clearActiveGame } );


//////---------------------------------------------->>>>>


export 
{ 

    startLoadGames,
    setSpliceGames, 
    startLoadGamesByGender,
    startLoadGamesByTitle,
    startAddGame, 
    startUpdateGame, 
    startDeleteGame, 
    setActiveGame, 
    clearActiveGame

};