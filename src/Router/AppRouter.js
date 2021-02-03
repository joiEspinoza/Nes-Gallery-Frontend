import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import HomeScreen from "../Components/dashboard/HomeScreen";
import Footer from "../Components/UI/Footer";
import NavBar from "../Components/UI/NavBar";


//////<<<<<------------------------------------------------``


const AppRouter = () => 
{

    return (

        <Router>

            <NavBar/>
            
            <div>

                <Switch>

                    <Route exact path="/" component={ HomeScreen } />

                    <Redirect to="/" />

                </Switch>

            </div>

            <Footer/>

        </Router>

    );

};


//////---------------------------------------------->>>>>


export default AppRouter;
