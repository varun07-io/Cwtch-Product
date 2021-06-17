import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import AddPostTags from './Screens/Dash/AddPostTags';
import AddPost from './Screens/Dash/AddPost';

import Dash from "./Screens/Dash/Dashboard"

const Routes = () => {
    
    return(
        <BrowserRouter>
            <Switch>

                <Route path="/" exact component={Dash}/>
                // Post Home
                <Route path="/addposthome" exact component={AddPostTags}/>
                    <Route path="/addpost" exact component={AddPost}/>


            </Switch>
        
        </BrowserRouter>

    )

}


export default Routes;