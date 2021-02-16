import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { startLoadGames } from "../Actions/gameActions";
import { startLoadGenders } from "../Actions/genderActions";
import AdminScreen from "../Components/dashboard/AdminScreen";
import GameScreen from "../Components/dashboard/GameScreen";
import HomeScreen from "../Components/dashboard/HomeScreen";
import LoginScreen from "../Components/dashboard/LoginScreen";
import RegisterScreen from "../Components/dashboard/RegisterScreen";
import Footer from "../Components/UI/layout/Footer";
import NavBar from "../Components/UI/layout/NavBar";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";


//////<<<<<------------------------------------------------``


const AppRouter = () => 
{

    const dispatch = useDispatch();
    useEffect( () => 
    {
       
        dispatch( startLoadGames() );

        dispatch( startLoadGenders() );

    }, [ dispatch ])

    const { logged } = useSelector( state => state.auth );

    
///////////////////////////************************////////////////////////


    return (

        <Router>

            <NavBar/>
            
            <div>

                <Switch>

                    <Route exact path="/" component={ HomeScreen } />

                    <Route exact path="/game" component={ GameScreen } />

                    <PublicRoute exact isLoggedIn={ logged } path="/login" component={ LoginScreen } />

                    <PublicRoute exact isLoggedIn={ logged } path="/register" component={ RegisterScreen } />

                    <PrivateRoute exact isLoggedIn={ logged } path="/admin" component={ AdminScreen } />

                    <Redirect to="/" />

                </Switch>

            </div>

            <Footer/>

        </Router>

    );

};


//////---------------------------------------------->>>>>


export default AppRouter;
