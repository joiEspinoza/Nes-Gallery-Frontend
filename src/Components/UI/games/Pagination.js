import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setSpliceGames } from '../../../Actions/gameActions';


//////<<<<<------------------------------------------------``


const Pagination = ( { games } ) => 
{

    const copyGames = [ ...games ];
    const dispatch = useDispatch();
    const handleUpdatePool = ( init, end ) =>
    {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        document.getElementById( 'pag1' ).classList.remove( 'active' );
        dispatch( setSpliceGames( copyGames.splice( init, end ) ) );
    };


///////////////////////////************************////////////////////////


    return (


        <div className="base__flexCenter mt-4">

            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">

                <div className="btn-group mr-2" role="group" aria-label="First group">


                    <button id="pag1" onClick={ ()=>{ handleUpdatePool( 0,12 ) } } type="button" className="active btn btn-secondary">1</button>

                    
                    {
                        ( games.length > 12 || games.length >= 24 ) &&
                        <>
                            <button id="pag2" onClick={ ()=>{ handleUpdatePool( 12,12 ) } } type="button" className="btn btn-secondary">2</button>
                        </>
                    }


                    {
                        ( games.length > 24 || games.length >= 36 ) &&
                        <>
                            <button id="pag3" onClick={ ()=>{ handleUpdatePool( 24,12 ) } } type="button" className="btn btn-secondary">3</button>
                        </>  
                    }


                    {
                        ( games.length > 36 || games.length >= 48 ) &&
                        <>
                            <button id="pag4" onClick={ ()=>{ handleUpdatePool( 36,12 ) } } type="button" className="btn btn-secondary">4</button>
                        </>
                    }


                    {
                        ( games.length > 48 || games.length >= 60 ) &&
                        <>
                            <button id="pag6" onClick={ ()=>{ handleUpdatePool( 48,12 ) } } type="button" className="btn btn-secondary">5</button>
                        </> 
                    }

       
                </div>
                
            </div>
        
        </div>

    );

};


//////---------------------------------------------->>>>>


Pagination.propTypes = 
{
    games: PropTypes.array.isRequired,
};

export default Pagination;
 