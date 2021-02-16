import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { logout } from '../../../Actions/authActions';
import { startLoadGames, startLoadGamesByTitle } from '../../../Actions/gameActions';
import { capitalLetter } from '../../../Helper/helpers';


//////<<<<<------------------------------------------------``


const NavBar = () => 
{
 
    const location = useLocation();
    const { logged, name } = useSelector( state => state.auth );

    const history = useHistory();
    const handleRedirectLogin = () =>
    {
        history.push( '/login' );
    };

    const handleRedirectHome = () =>
    {
        history.push( '/' );
    };


    const handleRedirectAdmin = () =>
    {
        history.push( '/admin' );
    };


    const dispatch = useDispatch();
    const handleLogout = () =>
    {
        dispatch( logout() );
    };


    const handleLoadAll = () =>
    {

        history.push( '/' );

        dispatch( startLoadGames() );
        
    };


    const handleSearch = () =>
    {   
        
        const search = document.getElementById( 'search' ).value;
       
        dispatch( startLoadGamesByTitle( capitalLetter( search ) ) );
    };

    const handleSearchEnter = ( event ) =>
    {   
        
        if( event.keyCode === 13 )
        {
            if( document.getElementById( 'search' ).value === '' )
            {
                return;
            }
            else
            {
                const search = document.getElementById( 'search' ).value;
                dispatch( startLoadGamesByTitle( capitalLetter( search ) ) );
            };
        };

    };


    window.onkeydown = handleSearchEnter;

    
///////////////////////////************************////////////////////////


    return (

        
        <div className="row base__hRow">

            <div className="col-xl-4 bg-primary">

                <div className="navBar__col1">

                    <img onClick={ handleLoadAll } className="navBar__logo img-fluid  base__pointer" alt="NGLogo" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1612281203/Nes%20Gallery/UI/ngLogo_gvijbr.png" />

                </div>
                
            </div>

            <div className="col-xl-4 bg-primary">


                {
                    ( location.pathname !== '/login' && location.pathname !== '/admin' ) &&

                    <div className="navBar__col2">

                        <div className="input-group">

                            <input  id="search" type="text" className="form-control inputSearch" placeholder="Super Mario...." />
                            <button id="btnSearch" onClick={ handleSearch } className="btn base__btnGallery btnSearch" ><i className="fas fa-search"></i></button>

                        </div>

                    </div>

                }
               

            </div>

            <div className="col-xl-4 bg-primary" >

                <div className="navBar__col3">

                   { 
                        ( location.pathname === '/'  && !logged ) ?

                        
                        <table>
                            <tbody>
                                <tr>
                                    
                                    <td><button onClick={ handleRedirectLogin } className="btn btn-outline-secondary navBar__btnLogin base__btnGallery" type="button">Login</button></td>
                                    <td ><span className="navBar__squareLogin"><i className="fas fa-square-full"></i></span></td>
                                </tr>
                            </tbody>
                        </table>

                        :

                        <div></div>

                    }


                    {
                        ( location.pathname === '/' && logged ) ?
                        <table>

                            <tbody>
                                <tr>
                                    
                                    <td><button onClick={ handleRedirectAdmin } className="btn btn-outline-secondary navBar__btnLogin base__btnGallery" type="button">{ name }</button></td>
                                    <td ><span className="navBar__squareLogin" style={ { color : '#d14407' } }><i className="fas fa-square-full"></i></span></td>
                                </tr>
                            </tbody>

                        </table>
                        :
                        <div></div>
                    }


                    {
                        ( location.pathname === '/admin' ) ?
                        <table>

                            <tbody>
                                <tr>
                                    
                                    <td><button onClick={ handleLogout } className="btn btn-outline-secondary navBar__btnLogin base__btnGallery" type="button">Logout</button></td>
                                    <td ><span className="navBar__squareLogin" style={ { color : '#d14407' } }><i className="fas fa-square-full"></i></span></td>
                                </tr>
                            </tbody>

                        </table>
                        :
                        <div></div>
                    }


                    {   
                        ( location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/game'  )  &&
                        <table>
                            <tbody>
                                <tr>    
                                    <td><button id="navBackBtn" onClick={ handleRedirectHome } className="btn btn-outline-secondary navBar__btnLogin base__btnGallery" type="button"><i className="fas fa-backward"></i></button></td>
                                </tr>
                            </tbody>
                        </table>
                    }

                </div>

            </div>

        </div>

    );

};


//////---------------------------------------------->>>>>


export default NavBar;
