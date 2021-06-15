import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';


// Screens

import Home from './Screen/Home';
import Dashboard from './Screen/Dash/Dashboard';
import AddTheme from './Screen/Dash/AddTheme';
import AddSuggestionTopics from './Screen/Dash/AddSuggestionTopics';
import AddNews from './Screen/Dash/AddNews';

const Routes = () => {

        return(
            <BrowserRouter>
                <Switch>

                    <Route exact path="/" component={Dashboard}/>
                    <Route exact path="/addt" component={AddTheme}/>
                    <Route exact path="/adds" component={AddSuggestionTopics}/>

                    <Route exact path="/addnews" component={AddNews}/>





                </Switch>
            </BrowserRouter>
        )
}



export default Routes;