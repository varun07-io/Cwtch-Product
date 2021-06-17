import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom'

import Dash from "./Screens/Dash/Dashboard"

const Routes = () => {
    
    return(
        <BrowserRouter>
            <Switch>

                <Route path="/" component={Dash}/>
            </Switch>
        
        </BrowserRouter>

    )

}


export default Routes;