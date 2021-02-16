import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { startDeleteGame, startUpdateGame } from '../../../Actions/gameActions';
import { dateFormat, lockUpdate } from '../../../Helper/helpers';
import { useForm } from '../../../Hook/useForm';
import Rate from '../games/Rate';


//////<<<<<------------------------------------------------``


const ContentGame = () => 
{

    const { activeGame } = useSelector( state => state.game );
    const { genders } = useSelector( state => state.gender );
    const { name } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    
    const initFormValues = 
    {

        _id : activeGame[0]._id,
        gender : activeGame[0].gender,
        release : '',
        rate : activeGame[0].rate,
        url : activeGame[0].url,
        url2 : activeGame[0].url2,

    };


    const [ formValues, handleInputChange ] = useForm( initFormValues );

    const { gender, release, rate } = formValues;

    const handleStartUpdate = () =>
    {
      
        document.getElementById( 'iGender' ).removeAttribute( 'disabled' );
        document.getElementById( 'iGender' ).focus();

        document.getElementById( 'iRelease' ).setAttribute( 'hidden', true );
        document.getElementById( 'iRelease2' ).removeAttribute( 'hidden' );
        document.getElementById( 'iRelease3' ).removeAttribute( 'hidden' );

        document.getElementById( 'iRate' ).setAttribute( 'hidden', true );
        document.getElementById( 'iRate2' ).removeAttribute( 'hidden' );
        
        document.getElementById( 'bUpdate' ).setAttribute( 'hidden', true );
        document.getElementById( 'bUpdate2' ).removeAttribute( 'hidden' );
        document.getElementById( 'bUpdate3' ).removeAttribute( 'hidden' );

    };


    const handleUpdate = ( event ) =>
    {
      
        event.preventDefault();


        if( name !== 'Admin' )
        {
            return Swal.fire( '', "Guest can't perform this action", 'info' )
        };
    

        formValues.rate = parseInt( formValues.rate );


        if( formValues.release === '' )
        {
            return Swal.fire( '','A release date is required', 'error' );
        };
        formValues.release = dateFormat( release )


        dispatch( startUpdateGame( formValues ) );

    };


    const handleDeleteGame = () =>
    {

        if( name !== 'Admin' )
        {
            return Swal.fire( '', "Guest can't perform this action", 'info' )
        };

        
        Swal.fire
        (
            {
                title : '',
                text: `Do you want to delete "${ activeGame[0].title }"?`,
                icon : 'question',
                showCancelButton: true,
                showDenyButton : false,
                confirmButtonText: `Yes`,
                cancelButtonText : 'No',

            })
            .then( ( result ) => 
            {

                if( result.isConfirmed ) 
                {
                    dispatch( startDeleteGame( activeGame[0]._id ) );
                };

            }
        );
    };

   
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  
///////////////////////////************************////////////////////////


    return (


        <div className="content__baseGame">
    
            <div className="gameBox">

                <div className="row">

                    <div className="col-xl-4 col-md-12 ">

                        <div className="gamerBoxCover base__flexCenter animate__animated animate__flipInY">

                            
                            <img id="coverImg" src={ activeGame[0].url } alt="Game-cover" />
                            
                        </div>

                    </div>

                    <div className="col-xl-8 col-md-12 pt-5">
 
                        <form id="formUpdate" onSubmit={ handleUpdate } >

                                    <div className="form-group">
                                        <label><small className="text-muted">Gender</small></label>
                                        <select id="iGender" disabled className="form-control" name="gender" value={ gender } onChange={ handleInputChange }>
                                            {
                                                genders.map( ( gender ) => 
                                                {
                                                    return <option key={ gender._id } >{ gender.descr }</option>
                                                })
                                            }
                                        </select>
                                    </div>

                                    <div className="form-group mt-5">
                                        <label><small className="text-muted">Release</small></label>
                                        <input id="iRelease" disabled className="form-control" defaultValue={ activeGame[0].release } />
                                        <input id="iRelease2" type="date" className="form-control" hidden name="release" value={ release } onChange={ handleInputChange } />
                                        <input id="iRelease3" hidden disabled className="form-control" name="release" value={ `Current Date : ${ activeGame[0].release }` } onChange={ handleInputChange } />
                                    </div>


                                    <div className="form-group mt-5">
                                        <label><small className="text-muted">Rate</small></label>
                                        <div id="iRate" className="animate__animated animate__zoomIn rateGame"><center><Rate rate={ parseInt( rate ) }/></center></div>
                                        <select id="iRate2" className="form-control" hidden name="rate" value={ rate } onChange={ handleInputChange }>
                                            <option>0</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                    </div>

                                </form>

                    </div>

                </div>
                    

                <div className="row mt-3">
                
                    <div className="col-xl-12">

                        <div className="gameBoxScreenShoot">
                        
                            <img className="gameScreenShoot img-fluid animate__animated animate__flash" src={ activeGame[0].url2 } alt="Screenshoot"/>
                                        
                        </div>
                        
                    </div>

                </div>


                { 
                    ( name === 'Admin' || name === 'Guest' ) &&
                                          
                    <div className="row mt-4">

                        <div className="col-md-12">

                                <div className="gameActionsBox">

                                    <button id="bUpdate" onClick={ handleStartUpdate } className="base__btnGallery btnActions">Start Update</button>

                                    <button id="bUpdate2" type="submit" form="formUpdate" hidden className="base__btnGallery btnActions">Update</button>

                                    <button id="bUpdate3" onClick={ lockUpdate }  hidden className="overflow-auto base__btnGallery btnActions">Cancel Update</button>
                                    
                                    <button onClick={ handleDeleteGame } className="base__btnGallery btnActions">Delete</button>

                                </div>

                        </div>

                    </div>
                } 


            </div>

  
        </div>
    

    );

};


//////---------------------------------------------->>>>>


export default ContentGame;
