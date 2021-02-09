import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startAddGame } from '../../../Actions/gameActions';
import { useForm } from '../../../Hook/useForm';
import Swal from 'sweetalert2';
import { capitalLetter, dateFormat } from '../../../Helper/helpers';
import { useHistory } from 'react-router';
import { startAddGender, startDeleteGender } from '../../../Actions/genderActions';
import { startUpdatePassword } from '../../../Actions/authActions';


//////<<<<<------------------------------------------------``




function ContentAdmin() 
{

    const btn1 = document.getElementById( 'btn1' );
    const btn2 = document.getElementById( 'btn2' );
    const url1 = document.getElementById( 'url1' );
    const url2 = document.getElementById( 'url2' );


    const { genders } = useSelector( state => state.gender );
    const { _id } = useSelector( state => state.auth );


    const initFormValue = 
    {

        title   : "",
        gender  : "",
        realese : "",
        price   : 0,
        stock   : 0,
        rate    : 0,
        url     : "",
        url2    : "",

        descr : "",

        oldPassword : "",
        newPassword : "",
        newPassword2 : "",


    };


    const [ formValues, handleInputChange, reset ] = useForm( initFormValue );
    const { title, gender, realese, price, stock, rate } = formValues;


////////////////////// GAME SECTION /////////////////////////////////
   

    const dispatch = useDispatch();
    const handleFileChange = ( event ) =>
    {
        const file = event.target.files[0];
        formValues.url = file; 
    };


    const handleFileChange2 = async ( event ) =>
    {
        const file2 = event.target.files[0]; 
        formValues.url2 = file2; 
    };


    const handleAddGame = ( event ) =>
    {

        event.preventDefault();

        formValues.title = capitalLetter( formValues.title.trim() );

        formValues.price = parseInt( formValues.price );
        if( formValues.price <= 9999 )
        {
            return Swal.fire( '','Price must be bigger than 9999', 'error' );
        };


        formValues.stock = parseInt( formValues.stock );
        if( formValues.stock <= 0  )
        {
            return Swal.fire( '','Stock must be bigger than 0', 'error' );
        };


        formValues.rate = parseInt( formValues.rate );


        if( formValues.realese === '' )
        {
            return Swal.fire( '','Realease date is required', 'error' );
        };
        formValues.realese = dateFormat(formValues.realese);


        btn1.setAttribute( 'hidden', true );
        btn2.removeAttribute( 'hidden' );


        dispatch( startAddGame( formValues ) )
        .then( () => 
        { 

            btn1.removeAttribute( 'hidden' );
            btn2.setAttribute( 'hidden', true );

        });

    };


    const handleReset = () =>
    {
        reset();
        url1.value = '';
        url2.value = '';
    };


///////////////////////////////////////////////////////////////////////


////////////////////// GENDER SECTION /////////////////////////////////


    const { descr } = formValues;
    const handleAddGender = ( event ) =>
    {
        event.preventDefault();
        dispatch( startAddGender( capitalLetter( descr.trim() ) ) );

    };


    const handlDeleteGender = ( _id, descr ) =>
    {
        Swal.fire(
            {
                text: `Do you want to delete "${ descr }"?`,
                showCancelButton: true,
                showDenyButton : false,
                confirmButtonText: `Yes`,
                cancelButtonText : 'No',

            })
            .then( ( result ) => 
            {

                if (result.isConfirmed) 
                {
                    dispatch( startDeleteGender( _id ) );
                };

            });
    };
  
    
////////////////////////////////////////////////////////////////////////


////////////////////// USER SECTION /////////////////////////////////

    const { oldPassword, newPassword, newPassword2 } = formValues;

    const handleUpdatePassword = ( event ) =>
    {

        event.preventDefault();


        if( newPassword !== newPassword2  )
        {
            return Swal.fire( '', 'Both password have be the same', 'error' );
        };

        
        dispatch( startUpdatePassword( _id, newPassword, oldPassword ) );
 
    };


////////////////////////////////////////////////////////////////////////




    const history = useHistory();
    const handleBackHome = () =>
    {
        history.push( '/' );
    };


///////////////////////////************************////////////////////////


    return (


        <div className="content__baseAdmin">

            <div className="row">

                <div className="col-md-4 mt-4" >

                    <div className="contBox">

                        <div className="adminBoxs bg-primary">

                            <form onSubmit={ handleAddGame }>

                                <div className="form-group">
                                    <label><small className="text-muted">Title</small></label>
                                    <input className="form-control" type="text" name="title" value={ title } onChange={ handleInputChange }  />
                                </div>

                                <div className="form-group">
                                    <label><small className="text-muted">Gender</small></label>
                                    <select className="form-control" name="gender" value={ gender } onChange={ handleInputChange }>

                                        <option></option>
                                        {
                                            genders.map( ( gender ) => 
                                            {
                                                return <option key={ gender._id }>{ gender.descr }</option>
                                            })
                                        }

                                    </select>

                                </div>


                                <div className="form-group">
                                    <label><small className="text-muted">Realese</small></label>
                                    <input className="form-control" type="date" name="realese" value={ realese } onChange={ handleInputChange }/>
                                </div>


                                <div className="form-group">
                                    <label><small className="text-muted">Price</small></label>
                                    <input className="form-control" type="number" name="price" value={ price } onChange={ handleInputChange }/>
                                </div>


                                <div className="form-group">
                                    <label><small className="text-muted">Stock</small></label>
                                    <input className="form-control" type="number" name="stock" value={ stock } onChange={ handleInputChange }/>
                                </div>


                                <div className="form-group">
                                    <label><small className="text-muted">Rate</small></label>
                                    <select className="form-control" name="rate" value={ rate } onChange={ handleInputChange }>

                                        <option></option>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
        
                                    </select>
                                </div>


                                <div className="form-group">
                                    <label><small className="text-muted">Cover</small></label>
                                    <input id="url1" className="form-control" type="file" name="url" onChange={ handleFileChange }/>
                                </div>


                                <div className="form-group">
                                    <label><small className="text-muted">Screenshot</small></label>
                                    <input id="url2" className="form-control" type="file" name="url2" onChange={ handleFileChange2 }/>
                                </div>


                                <div className="form-group mt-5">
                                    <button id="btn1" className="base__btnGallery btn-block">Add Game</button>
                                    <button id="btn2" hidden disabled className="base__btnGalleryRed btn-block"><i className="fas fa-circle-notch fa-spin"></i></button>
                                    <button id="clear" onClick={ handleReset } hidden ></button>
                                </div>

                            </form>

                        </div> 

                    </div> 

                </div>

                <div className="col-md-4 mt-4" >

                    <div className="row">

                        <div className="col-md-12">

                            <div className="contBox" >

                                <div className="adminBoxs bg-primary">

                                        <form onSubmit={ handleAddGender }>

                                            <div className="form-group">
                                                <label><small className="text-muted">Gender</small></label>
                                                <input className="form-control" name="descr" value={ descr } onChange={ handleInputChange } />
                                            </div>

                                            
                                            <div className="form-group mt-5">
                                                <button id="btn3" className="base__btnGallery btn-block">Add Gender</button>
                                            </div>


                                        </form>
                                </div>
                            
                            </div> 

                        </div>

                    </div>                       

                    <div className="row mt-3">

                        <div className="col-md-12">
                            
                            <div className="contBox">
                                
                                <div className="boxTable">

                                    <table className="table table-striped bg-primary table-hover">

                                        <tbody>

                                        {
                                            genders.map( ( gender ) => 
                                            {

                                                return <tr className="text-center" key={ gender._id }>
                                                
                                                    <td>{ gender.descr }</td>
                                                    <td><button  onClick={ () => { handlDeleteGender( gender._id, gender.descr ) } } className="base__btnGallery btn-block"><i className="fas fa-trash-alt"></i></button></td>

                                                </tr>
                                            })
                                        }
                                        
                                    </tbody>

                                    </table> 
                                
                                </div>  

                            </div>       

                        </div>

                    </div>                           

                </div>

                <div className="col-md-4 mt-4" >

                    <div className="row">

                        <div className="col-md-12">

                            <div className="contBox">

                                <div className="adminBoxs bg-primary">
                                    

                                    <form onSubmit={ handleUpdatePassword }>

                                        <div className="form-group">
                                            <label><small className="text-muted"></small>Current password</label>
                                            <input type="password" className="form-control" name="oldPassword" value={ oldPassword } onChange={ handleInputChange } />
                                        </div>

                                        <div className="form-group">
                                            <label><small className="text-muted"></small>New password</label>
                                            <input type="password" className="form-control" name="newPassword" value={ newPassword } onChange={ handleInputChange }/>
                                        </div>

                                        <div className="form-group">
                                            <label><small className="text-muted"></small>Confirm new password</label>
                                            <input type="password" className="form-control" name="newPassword2" value={ newPassword2 } onChange={ handleInputChange }/>
                                        </div>

                                        <div className="form-group mt-5">
                                            <button className="base__btnGallery btn-block">Update Password</button>
                                        </div>
                                        
                                    </form>


                                </div>

                            </div>                     

                        </div>

                    </div>


                    <div className="row mt-4">


                        <div className="col-md-12">

                            <div className="contBox">

                                <div className="adminBoxs bg-primary">
                                    <button onClick={ handleBackHome } className="base__btnGallery btn-block">Back Home</button>
                                </div>

                            </div>

                        </div>


                    </div>

                </div>

            </div> 
                              
        </div> 
              
    );

};


//////---------------------------------------------->>>>>


export default ContentAdmin;
