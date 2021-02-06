import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { startLogin } from '../../../Actions/authActions';
import { useForm } from '../../../Hook/useForm';


//////<<<<<------------------------------------------------``


const BoxLogin = () => 
{

    const initFormValues = 
    {
        email : 'admin@NesGallery.cl',
        password: '123456'
    };

    const [ formValues, handleInputChange ] = useForm( initFormValues );

    const { email, password } = formValues;


    const dispatch = useDispatch();
    const history = useHistory();
    const { logged } = useSelector( state => state.auth );
    const handleLogin = ( event ) =>
    {
        
        event.preventDefault();

        formValues.email = formValues.email.replace( /[" "]/g, "" ).trim();

        dispatch( startLogin( formValues ) )

        if( logged )
        {
            history.push( '/' );
        };
        
    };

///////////////////////////************************////////////////////////
    

    return (


        <div className="login__boxLogin bg-primary">
           
                <form onSubmit={ handleLogin } >

                    <div className="form-group">
                        <label><small className="text-muted">Email</small></label>
                        <input className="form-control" type="email" name="email" value={ email } onChange={ handleInputChange } />
                    </div>

                    <div className="form-group">
                        <label><small className="text-muted">Password</small></label>
                        <input className="form-control" type="password" name="password" value={ password } onChange={ handleInputChange } />
                    </div>

                    <div className="form-group mt-4">
                        <button className="btn btn-primary base__btnGallery login_btnLogin">Login</button>
                    </div>

                    
                    <div className="form-group text-center">
                        <small><Link className="login__linkRegister" to="/register">Register here</Link></small>
                    </div>

                </form>

        </div>


    );


};


//////---------------------------------------------->>>>>


export default BoxLogin;
