import React from 'react';
import  UserBaord from '../PublicUser/UserBoard/UserBaord';
import  Wall from '../PublicUser/Wall/Wall';
import  Ads from '../PublicUser/Ads/Ads';
import { Route, Switch, withRouter, Redirect ,BrowserRouter } from 'react-router-dom';
import Communities from '../PublicUser/Communities/Communities';


function MainBody()
{
    return(
        <div className="col-12 d-flex ">
             <UserBaord/>
             {/* <BrowserRouter>      
                <Switch>
                    <Route path="/Community" component={Communities} />   
                    <Route path="/" component={Wall} />         
                    
                </Switch>
            </BrowserRouter>    */}
           
   
           <Ads/>
        </div>

    )
}

export default MainBody;