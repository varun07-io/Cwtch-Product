import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';


// Screens

import Home from './Screen/Home';
import Dashboard from './Screen/Dash/Dashboard';


const Routes = () => {

        return(
            <BrowserRouter>
                <Switch>

                    <Route exact path="/" component={Dashboard}/>


                </Switch>
            </BrowserRouter>
        )
}



export default Routes;