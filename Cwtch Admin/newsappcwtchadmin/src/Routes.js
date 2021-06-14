import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';


// Screens

import Home from './Screen/Home';
import Dashboard from './Screen/Dash/Dashboard';
import AddTheme from './Screen/Dash/AddTheme';

const Routes = () => {

        return(
            <BrowserRouter>
                <Switch>

                    <Route exact path="/" component={Dashboard}/>
                    <Route exact path="/addt" component={AddTheme}/>



                </Switch>
            </BrowserRouter>
        )
}



export default Routes;