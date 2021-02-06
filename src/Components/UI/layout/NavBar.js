import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';


//////<<<<<------------------------------------------------``


const NavBar = () => 
{

    const location = useLocation();
    const { logged, name } = useSelector( state => state.auth );

    const history = useHistory();
    const handleRedirectLogin = () =>
    {
        history.push( '/login' );
    }

    const handleRedirectHome = () =>
    {
        history.push( '/' );
    };
    

///////////////////////////************************////////////////////////


    return (

        
        <div className="row base__hRow">

            <div className="col-md-4 bg-primary navBar__colNabVar" >

                <img className="navBar__logo img-fluid" alt="NGLogo" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1612281203/Nes%20Gallery/UI/ngLogo_gvijbr.png" />

            </div>

            <div className="col-md-4 bg-primary navBar__colNabVar" >
            </div>

            <div className="col-md-4 bg-primary navBar__colNabVar" >

                <span className="navBar__login">

                   { 
                        location.pathname === '/' && !logged ?

                        
                        <table>
                            <tbody>
                                <tr>
                                    
                                    <td><button onClick={ handleRedirectLogin } className="btn btn-outline-secondary navBar__btnLogin base__btnGallery" type="button">Login</button></td>
                                    <td ><span className="navBar__squareLogin"><i className="fas fa-square-full"></i></span></td>
                                </tr>
                            </tbody>
                        </table>

                        :

                        <table>
                            <tbody>
                                <tr>
                                    
                                    <td><button disabled={ true } className="btn btn-outline-secondary navBar__btnLogin base__btnGallery" type="button">{ name }</button></td>
                                    <td ><span className="navBar__squareLogin" style={ { color : '#d14407' } }><i className="fas fa-square-full"></i></span></td>
                                </tr>
                            </tbody>
                        </table>

                    }


                    {   
                        location.pathname === '/login'  &&
                        <table>
                            <tbody>
                                <tr>    
                                    <td><button onClick={ handleRedirectHome } className="btn btn-outline-secondary navBar__btnLogin base__btnGallery" type="button">Back</button></td>
                                </tr>
                            </tbody>
                        </table>
                    }


                    {   
                        location.pathname === '/register'  &&
                        <table>
                            <tbody>
                                <tr>    
                                    <td><button onClick={ handleRedirectHome } className="btn btn-outline-secondary navBar__btnLogin base__btnGallery" type="button">Back</button></td>
                                </tr>
                            </tbody>
                        </table>
                    }
                     
                </span>

            </div>

        </div>

    );

};


//////---------------------------------------------->>>>>


export default NavBar;
