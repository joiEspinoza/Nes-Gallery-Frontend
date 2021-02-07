import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { startLoadGames } from "../Actions/gameActions";
import { startLoadGenders } from "../Actions/genderActions";
import AdminScreen from "../Components/dashboard/AdminScreen";
import HomeScreen from "../Components/dashboard/HomeScreen";
import LoginScreen from "../Components/dashboard/LoginScreen";
import RegisterScreen from "../Components/dashboard/RegisterScreen";
import Footer from "../Components/UI/layout/Footer";
import NavBar from "../Components/UI/layout/NavBar";


//////<<<<<------------------------------------------------``


const AppRouter = () => 
{

    const dispatch = useDispatch();
    useEffect( () => 
    {
       
        dispatch( startLoadGames() );
        dispatch( startLoadGenders() )


    }, [ dispatch ])


///////////////////////////************************////////////////////////


    return (

        <Router>

            <NavBar/>
            
            <div>

                <Switch>

                    <Route exact path="/" component={ HomeScreen } />

                    <Route exact path="/login" component={ LoginScreen } />

                    <Route exact path="/register" component={ RegisterScreen } />

                    <Route exact path="/admin" component={ AdminScreen } />

                    <Redirect to="/" />

                </Switch>

            </div>

            <Footer/>

        </Router>

    );

};


//////---------------------------------------------->>>>>


export default AppRouter;
