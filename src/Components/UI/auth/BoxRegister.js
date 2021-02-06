import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { startRegister } from '../../../Actions/authActions';
import { capitalLetter } from '../../../Helper/helpers';
import { useForm } from '../../../Hook/useForm';


//////<<<<<------------------------------------------------``


const BoxRegister = () => 
{

    const initFormValues = 
    {
        email : 'admin@NesGallery.cl',
        name : 'admin',
        password: '123456',
        password2: '123456',
    };

    const [ formValues, handleInputChange ] = useForm( initFormValues );

    const { email, name, password, password2 } = formValues;


    const dispatch = useDispatch();

    const handleRegister = ( event ) =>
    {
        
        event.preventDefault();


        if( formValues.password !== formValues.password2 )
        {
            Swal.fire( '', 'Passwords must be the same', 'error' );
        };


        formValues.name = capitalLetter( name.trim() ) ;
        formValues.email = formValues.email.replace( /[" "]/g, "" ).trim();


        dispatch( startRegister( formValues ) )

    };

///////////////////////////************************////////////////////////
    

    return (


        <div className="login__boxLogin bg-primary">
           
                <form onSubmit={ handleRegister } >

                    <div className="form-group">
                        <label><small className="text-muted">Email</small></label>
                        <input className="form-control" type="email" name="email" value={ email } onChange={ handleInputChange } />
                    </div>


                    <div className="form-group">
                        <label><small className="text-muted">Name</small></label>
                        <input className="form-control" type="text" name="name" value={ name } onChange={ handleInputChange } />
                    </div>


                    <div className="form-group">
                        <label><small className="text-muted">Password</small></label>
                        <input className="form-control" type="password" name="password" value={ password } onChange={ handleInputChange } />
                    </div>



                    <div className="form-group">
                        <label><small className="text-muted">Confirm Password</small></label>
                        <input className="form-control" type="password" name="password2" value={ password2 } onChange={ handleInputChange } />
                    </div>


                    <div className="form-group mt-4">
                        <button className="btn btn-primary login_btnLogin  base__btnGallery">Register</button>
                    </div>

                    
                    <div className="form-group text-center">
                        <small><Link className="login__linkRegister" to="/login">Back Login</Link></small>
                    </div>

                </form>

        </div>


    );


};


//////---------------------------------------------->>>>>


export default BoxRegister;
