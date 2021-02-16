import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
//import { Link } from 'react-router-dom';
import { startLogin } from '../../../Actions/authActions';
import { useForm } from '../../../Hook/useForm';


//////<<<<<------------------------------------------------``


const BoxLogin = () => 
{

    const initFormValues = 
    {
        email : 'guest@NesGallery.cl',
        password: '123456'
    };

    const [ formValues, handleInputChange ] = useForm( initFormValues );
    const { email, password } = formValues;
    const dispatch = useDispatch();
    const handleLogin = ( event ) =>
    {   
        event.preventDefault();

        const btn0 = document.getElementById( 'btn0' );
        const btn1 = document.getElementById( 'btn1' );

        formValues.email = formValues.email.replace( /[" "]/g, "" ).trim();

        if( btn0 && btn1 )
        {
            btn0.setAttribute( 'hidden', true );
            btn1.removeAttribute( 'hidden' );
        };

        document.getElementById('inputPass').value = '';
        
        dispatch( startLogin( formValues ) )
        .then( () => 
        {

            btn1.setAttribute( 'hidden', true );
            btn0.removeAttribute( 'hidden' );

        });
        
    };


    const handleLoginEnter = ( event ) =>
    {
        if( event.keyCode === 13 )
        {
           
            document.getElementById( 'btn0' ).click();
         
        };
    };
 

    const handleToggleType = ( event ) =>
    {   
        event.preventDefault();

        const pass = document.getElementById( 'inputPass' );
        if( pass.type === "password" ) 
        {
            pass.type = "text";
        }
        else 
        {
            pass.type = "password";
        };

    };


    const location = useLocation();
    if( location.pathname === '/login' )
    {
        window.onkeydown = handleLoginEnter;
    };

///////////////////////////************************////////////////////////
    

    return (


        <div className="login__boxLogin bg-primary">
           
            <form onSubmit={ handleLogin } >

                <div className="form-group">
                    <label><small>Email</small></label>
                    <input className="form-control" type="email" name="email" value={ email } onChange={ handleInputChange } />
                </div>

                <div className="form-group">
                    <label><small>Password</small></label>
                    <div className="input-group">

                    <input id="inputPass" className="form-control" type="password" name="password" value={ password } onChange={ handleInputChange } />
                        
                            <div className="input-group-append">
                                
                                <button onClick={ handleToggleType } className="base__btnGallery btnEyeLogin"><i className="far fa-eye"></i></button>
                            
                            </div>
                        
                        </div>
                </div>

                <div className="form-group mt-4">
                    <button id="btn0" className="btn btn-primary base__btnGallery login_btnLogin">Login</button>
                    <button id="btn1" hidden disabled className="base__btnGalleryRed btn-block"><i className="fas fa-circle-notch fa-spin"></i></button>
                </div>

                {/*
                    <div className="form-group text-center">
                        <small><Link className="login__linkRegister" to="/register">Register here</Link></small>
                    </div>
                */}
                
            </form>

        </div>

    );

};


//////---------------------------------------------->>>>>


export default BoxLogin;
