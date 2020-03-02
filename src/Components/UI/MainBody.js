import React from 'react';
import  UserBaord from '../PublicUser/UserBoard/UserBaord';
import  Wall from '../PublicUser/Wall/Wall';
import  Ads from '../PublicUser/Ads/Ads';


function MainBody()
{
    return(
        <div className="col-12 d-flex ">
           <UserBaord/>
           <Wall/>
           <Ads/>
        </div>

    )
}

export default MainBody;