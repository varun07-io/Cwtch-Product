import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import AddPostTags from './Screens/Dash/AddPostTags';
import AddPost from './Screens/Dash/AddPost';
import AddEpisode from './Screens/Dash/AddEpisode';
import Dash from "./Screens/Dash/Dashboard"
import AddEpisodeTags from './Screens/Dash/AddEpisodeTags';

const Routes = () => {
    
    return(
        <BrowserRouter>
            <Switch>

                <Route path="/" exact component={Dash}/>
                // Post Home
                <Route path="/addposthome" exact component={AddPostTags}/>
                    <Route path="/addpost" exact component={AddPost}/>

                    <Route path="/addepisodetags" exact component={AddEpisodeTags}/>
                    <Route path="/addepisode" exact component={AddEpisode}/>



            </Switch>
        
        </BrowserRouter>

    )

}


export default Routes;